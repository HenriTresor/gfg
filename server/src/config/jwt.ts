import { JwtPayload, SignOptions } from 'jsonwebtoken';

export interface CustomJwtPayload extends JwtPayload {
    userId: string;
    email: string;
    role: string;
}

export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'fallback-secret-key',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
};

export const jwtSignOptions: SignOptions = {
    expiresIn: jwtConfig.expiresIn as any,
    issuer: 'gfg-server',
    audience: 'gfg-client',
};

export const jwtRefreshSignOptions: SignOptions = {
    expiresIn: jwtConfig.refreshExpiresIn as any,
    issuer: 'gfg-server',
    audience: 'gfg-client',
};
