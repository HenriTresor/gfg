import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { ResponseHelper } from '../utils/response';
import { hashPassword, comparePassword, generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/crypto';
import logger from '../config/logger';
import { CreateUserRequest, LoginRequest } from '../types';

export class AuthController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const userData: CreateUserRequest = req.body;

            // Check if user with email already exists
            const existingEmail = await prisma.user.findUnique({
                where: { email: userData.email },
            });

            if (existingEmail) {
                ResponseHelper.conflict(res, 'User with this email already exists');
                return;
            }


            // Hash password
            const hashedPassword = await hashPassword(userData.password);

            // Create user
            const user = await prisma.user.create({
                data: {
                    ...userData,
                    password: hashedPassword,
                    role: userData.role as any,
                },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    role: true,
                    isActive: true,
                    createdAt: true,
                },
            });

            logger.info(`User registered: ${user.email}`);
            ResponseHelper.created(res, user, 'User registered successfully');
        } catch (error) {
            logger.error('Error registering user:', error);
            ResponseHelper.internalServerError(res, 'Failed to register user');
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const loginData: LoginRequest = req.body;

            // Find user by email
            const user = await prisma.user.findUnique({
                where: { email: loginData.email },
            });

            if (!user) {
                ResponseHelper.unauthorized(res, 'Invalid email or password');
                return;
            }

            // Check if user is active
            if (!user.isActive) {
                ResponseHelper.unauthorized(res, 'Account is deactivated');
                return;
            }

            // Verify password
            const isPasswordValid = await comparePassword(loginData.password, user.password);
            if (!isPasswordValid) {
                ResponseHelper.unauthorized(res, 'Invalid email or password');
                return;
            }

            // Generate tokens
            const accessToken = generateAccessToken({
                userId: user.id,
                email: user.email,
                role: user.role,
            });

            const refreshToken = generateRefreshToken({
                userId: user.id,
                email: user.email,
                role: user.role,
            });

            // Store refresh token in database
            await prisma.session.create({
                data: {
                    token: refreshToken,
                    userId: user.id,
                    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
                },
            });

            // Remove password from response
            const { password, ...userWithoutPassword } = user;

            logger.info(`User logged in: ${user.email}`);

            ResponseHelper.success(res, {
                user: userWithoutPassword,
                accessToken,
                refreshToken,
            }, 'Login successful');
        } catch (error) {
            logger.error('Error logging in user:', error);
            ResponseHelper.internalServerError(res, 'Failed to login');
        }
    }

    async refreshToken(req: Request, res: Response): Promise<void> {
        try {
            const { refreshToken } = req.body;

            // Verify refresh token
            const decoded = verifyRefreshToken(refreshToken);

            // Check if session exists and is valid
            const session = await prisma.session.findFirst({
                where: {
                    token: refreshToken,
                    userId: decoded.userId,
                    expiresAt: {
                        gt: new Date(),
                    },
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                            role: true,
                            isActive: true,
                        },
                    },
                },
            });

            if (!session || !session.user.isActive) {
                ResponseHelper.unauthorized(res, 'Invalid or expired refresh token');
                return;
            }

            // Generate new access token
            const newAccessToken = generateAccessToken({
                userId: session.user.id,
                email: session.user.email,
                role: session.user.role,
            });

            ResponseHelper.success(res, {
                accessToken: newAccessToken,
                user: session.user,
            }, 'Token refreshed successfully');
        } catch (error) {
            logger.error('Error refreshing token:', error);
            ResponseHelper.unauthorized(res, 'Invalid refresh token');
        }
    }

    async logout(req: Request, res: Response): Promise<void> {
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader && authHeader.split(' ')[1];

            if (token) {
                // Find and delete the session
                await prisma.session.deleteMany({
                    where: { token },
                });
            }

            logger.info('User logged out');
            ResponseHelper.success(res, null, 'Logout successful');
        } catch (error) {
            logger.error('Error logging out user:', error);
            ResponseHelper.internalServerError(res, 'Failed to logout');
        }
    }
}
