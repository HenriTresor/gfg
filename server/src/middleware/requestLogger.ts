import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    // Log request details
    logger.info(`[${req.method}] ${req.path}`, {
        method: req.method,
        path: req.path,
        query: req.query,
        body: req.method !== 'GET' ? req.body : undefined,
        ip: req.ip,
        userAgent: req.get('user-agent'),
    });

    // Log response
    res.on('finish', () => {
        logger.info(`[${req.method}] ${req.path} - ${res.statusCode}`, {
            statusCode: res.statusCode,
            duration: Date.now() - Date.now(),
        });
    });

    next();
};

export default requestLogger;

