import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { prisma } from '../config/database';
import { CustomJwtPayload } from '../config/jwt';
import logger from '../config/logger';

// Extend Express Request interface to include user
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: string;
            };
        }
    }
}

export const authenticateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

        if (!token) {
            res.status(401).json({
                error: 'Access token required',
                code: 'NO_TOKEN'
            });
            return;
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as CustomJwtPayload;

        // Check if user exists and is active
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                email: true,
                role: true,
                isActive: true,
            },
        });

        if (!user || !user.isActive) {
            res.status(401).json({
                error: 'Invalid or expired token',
                code: 'INVALID_TOKEN'
            });
            return;
        }

        // Attach user info to request
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role,
        };

        next();
    } catch (error) {
        logger.error('Authentication error:', error);

        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({
                error: 'Invalid token',
                code: 'INVALID_TOKEN'
            });
        } else if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({
                error: 'Token expired',
                code: 'TOKEN_EXPIRED'
            });
        } else {
            res.status(500).json({
                error: 'Authentication failed',
                code: 'AUTH_ERROR'
            });
        }
    }
};

export const requireRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({
                error: 'Authentication required',
                code: 'NO_AUTH'
            });
            return;
        }

        if (!roles.includes(req.user.role)) {
            res.status(403).json({
                error: 'Insufficient permissions',
                code: 'INSUFFICIENT_PERMISSIONS'
            });
            return;
        }

        next();
    };
};

export const optionalAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            next();
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as CustomJwtPayload;

        const session = await prisma.session.findFirst({
            where: {
                token,
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
                        role: true,
                        isActive: true,
                    },
                },
            },
        });

        if (session && session.user.isActive) {
            req.user = {
                id: session.user.id,
                email: session.user.email,
                role: session.user.role,
            };
        }

        next();
    } catch (error) {
        // For optional auth, we don't throw errors, just continue without user
        next();
    }
};
