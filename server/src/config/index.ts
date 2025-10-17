import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
    // Server
    port: parseInt(process.env.PORT || '3000',10),
    nodeEnv: process.env.NODE_ENV || 'development',

    // Database
    databaseUrl: process.env.DATABASE_URL || '',

    // JWT
    jwt: {
        secret: process.env.JWT_SECRET || 'fallback-secret-key',
        refreshSecret: process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret-key',
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
    },

    // CORS
    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
        credentials: process.env.CORS_CREDENTIALS === 'true',
    },

    // Rate Limiting
    rateLimit: {
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
        maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
    },

    // Security
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '12', 10),
    sessionSecret: process.env.SESSION_SECRET || 'fallback-session-secret',

    // File Upload
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10), // 10MB
    uploadPath: process.env.UPLOAD_PATH || './uploads',

    // Logging
    logLevel: process.env.LOG_LEVEL || 'info',
    logFileMaxSize: process.env.LOG_FILE_MAX_SIZE || '20m',
    logFileMaxFiles: process.env.LOG_FILE_MAX_FILES || '14d',

    // Email (optional)
    email: {
        smtpHost: process.env.SMTP_HOST,
        smtpPort: parseInt(process.env.SMTP_PORT || '587', 10),
        smtpUser: process.env.SMTP_USER,
        smtpPass: process.env.SMTP_PASS,
    },
};

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.warn(`Warning: ${envVar} is not set in environment variables`);
    }
}
