import { Router } from 'express';
import { ResponseHelper } from '../utils/response';

const router = Router();

// Health check endpoint
router.get('/', (req, res) => {
    ResponseHelper.success(res, {
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
        version: '1.0.0',
    }, 'Server is healthy');
});

// Detailed health check
router.get('/detailed', async (req, res) => {
    try {
        const { prisma } = await import('../config/database');

        // Test database connection
        await prisma.$queryRaw`SELECT 1`;

        ResponseHelper.success(res, {
            status: 'OK',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
            version: '1.0.0',
            database: 'Connected',
            memory: process.memoryUsage(),
        }, 'Detailed health check passed');
    } catch (error) {
        ResponseHelper.internalServerError(res, 'Health check failed');
    }
});

export default router;

