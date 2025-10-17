import app from './app';
import { config } from './config';
import logger from './config/logger';
import { prisma } from './config/database';
import dotenv from "dotenv"

dotenv.config();

const PORT = config.port;

const startServer = async (): Promise<void> => {
    try {
        console.log('Starting server...');
        console.log('Port:', PORT);
        console.log('Environment:', config.nodeEnv);

        // Test database connection
        console.log('Connecting to database...');
        await prisma.$connect();
        logger.info('Database connected successfully');

        // Start server
        const server = app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT} in ${config.nodeEnv} mode`);
            console.log(`✅ Health check available at http://localhost:${PORT}/health`);
            logger.info(`Server running on port ${PORT} in ${config.nodeEnv} mode`);
            logger.info(`Health check available at http://localhost:${PORT}/health`);
        });

        // Graceful shutdown
        const gracefulShutdown = async (signal: string) => {
            logger.info(`${signal} received. Starting graceful shutdown...`);

            server.close(async () => {
                logger.info('HTTP server closed');

                try {
                    await prisma.$disconnect();
                    logger.info('Database connection closed');
                    process.exit(0);
                } catch (error) {
                    logger.error('Error during shutdown:', error);
                    process.exit(1);
                }
            });
        };

        process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
        process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    } catch (error) {
        console.error('❌ Failed to start server:', error);
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
    logger.error('Uncaught Exception:', error);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

startServer();
