import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

export interface AppError extends Error {
    statusCode?: number;
    code?: string;
    isOperational?: boolean;
}

export class CustomError extends Error implements AppError {
    public statusCode: number;
    public code?: string;
    public isOperational: boolean;

    constructor(message: string, statusCode: number = 500, code?: string) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// Global error handler
export const errorHandler = (
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    let { statusCode = 500, message, code } = error;

    // Log error
    logger.error('Error occurred:', {
        error: {
            message,
            code,
            statusCode,
            stack: error.stack,
        },
        request: {
            method: req.method,
            url: req.url,
            ip: req.ip,
            userAgent: req.get('User-Agent'),
        },
    });

    // Handle specific error types
    if (error.name === 'ValidationError') {
        statusCode = 400;
        message = 'Validation failed';
        code = 'VALIDATION_ERROR';
    } else if (error.name === 'CastError') {
        statusCode = 400;
        message = 'Invalid ID format';
        code = 'INVALID_ID';
    } else if (error.name === 'MongoError' && (error as any).code === 11000) {
        statusCode = 409;
        message = 'Duplicate field value';
        code = 'DUPLICATE_FIELD';
    } else if (error.name === 'JsonWebTokenError') {
        statusCode = 401;
        message = 'Invalid token';
        code = 'INVALID_TOKEN';
    } else if (error.name === 'TokenExpiredError') {
        statusCode = 401;
        message = 'Token expired';
        code = 'TOKEN_EXPIRED';
    }

    // Don't leak error details in production
    if (process.env.NODE_ENV === 'production' && !error.isOperational) {
        message = 'Something went wrong';
        code = 'INTERNAL_ERROR';
    }

    res.status(statusCode).json({
        error: {
            message,
            code,
            ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
        },
    });
};

// 404 handler
export const notFoundHandler = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const error = new CustomError(
        `Route ${req.originalUrl} not found`,
        404,
        'ROUTE_NOT_FOUND'
    );
    next(error);
};

// Async error wrapper
export const asyncHandler = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

