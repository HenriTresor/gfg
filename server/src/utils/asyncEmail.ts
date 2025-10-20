import logger from '../config/logger';

/**
 * Execute a function asynchronously without blocking the response
 * This is useful for sending emails, notifications, etc.
 */
export const asyncExecute = (fn: () => Promise<void>): void => {
    setImmediate(async () => {
        try {
            await fn();
        } catch (error) {
            logger.error('Error in async execution:', error);
        }
    });
};

