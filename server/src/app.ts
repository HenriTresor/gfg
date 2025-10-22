import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { config } from './config';
import corsOptions from './config/cors';
import { morganStream } from './config/logger';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';
import nodemailer from 'nodemailer';

// Import routes
import healthRoutes from './routes/health';
import authRoutes from './routes/auth';
import casualRoutes from './routes/casuals';
import casualWorkEntryRoutes from './routes/casualWorkEntries';
import dailyCasualRequestRoutes from './routes/dailyCasualRequests';
import adminRoutes from './routes/admin';
import notificationRoutes from './routes/notifications';

const app = express();

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
    crossOriginEmbedderPolicy: false,
}));

// CORS
app.use(cors(corsOptions));

// Compression
app.use(compression());

// Request logging
app.use(requestLogger);

// Logging - Console output for development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// File logging for all environments
app.use(morgan('combined', { stream: morganStream }));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Mount routes
app.use('/health', healthRoutes);

// API routes
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to Green Fresh Growers API',
        version: '1.0.0',
        environment: config.nodeEnv,
        endpoints: {
            auth: '/api/auth',
            casuals: '/api/casuals',
            casualWorkEntries: '/api/casual-work-entries',
            dailyCasualRequests: '/api/daily-casual-requests',
            admin: '/api/admin',
            notifications: '/api/notifications',
            health: '/health',
        },
    });
});

// Mount API routes
app.use('/api/auth', authRoutes);
app.use('/api/casuals', casualRoutes);
app.use('/api/casual-work-entries', casualWorkEntryRoutes);
app.use('/api/daily-casual-requests', dailyCasualRequestRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/notifications', notificationRoutes);

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 2525, // or 2525 if 587 fails
    secure: false, // true only for port 465
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 15000, // 15s
});

transporter.verify(function (error, success) {
    if (error) {
        console.error('❌ SMTP connection failed:', error.message);
    } else {
        console.log('✅ SMTP server is reachable and ready to send messages');
    }
});

export default app;
