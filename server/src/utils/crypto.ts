import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { CustomJwtPayload, jwtSignOptions, jwtRefreshSignOptions } from '../config/jwt';
import crypto from 'crypto';

// Hash password
export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, config.bcryptRounds);
};

// Compare password
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

// Generate JWT token
export const generateAccessToken = (payload: { userId: string; email: string; role: string }): string => {
    return jwt.sign(payload, config.jwt.secret, jwtSignOptions);
};

// Generate refresh token
export const generateRefreshToken = (payload: { userId: string; email: string; role: string }): string => {
    return jwt.sign(payload, config.jwt.refreshSecret, jwtRefreshSignOptions);
};

// Verify access token
export const verifyAccessToken = (token: string): CustomJwtPayload => {
    return jwt.verify(token, config.jwt.secret) as CustomJwtPayload;
};

// Verify refresh token
export const verifyRefreshToken = (token: string): CustomJwtPayload => {
    return jwt.verify(token, config.jwt.refreshSecret) as CustomJwtPayload;
};

// Generate random string
export const generateRandomString = (length: number = 32): string => {
    return crypto.randomBytes(length).toString('hex');
};

// Generate secure token
export const generateSecureToken = (): string => {
    return crypto.randomBytes(64).toString('hex');
};

// Hash string with SHA-256
export const hashString = (input: string): string => {
    return crypto.createHash('sha256').update(input).digest('hex');
};

// Generate UUID v4
export const generateUUID = (): string => {
    return crypto.randomUUID();
};

