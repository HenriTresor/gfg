import { Response } from 'express';

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    code?: string;
    pagination?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export class ResponseHelper {
    // Success responses
    static success<T>(res: Response, data: T, message?: string, statusCode: number = 200): void {
        const response: ApiResponse<T> = {
            success: true,
            data,
            message,
        };
        res.status(statusCode).json(response);
    }

    static created<T>(res: Response, data: T, message: string = 'Resource created successfully'): void {
        this.success(res, data, message, 201);
    }

    static noContent(res: Response, message: string = 'No content'): void {
        res.status(204).send();
    }

    // Error responses
    static error(
        res: Response,
        message: string,
        statusCode: number = 500,
        code?: string
    ): void {
        const response: ApiResponse = {
            success: false,
            error: message,
            code,
        };
        res.status(statusCode).json(response);
    }

    static badRequest(res: Response, message: string = 'Bad request', code?: string): void {
        this.error(res, message, 400, code);
    }

    static unauthorized(res: Response, message: string = 'Unauthorized', code?: string): void {
        this.error(res, message, 401, code);
    }

    static forbidden(res: Response, message: string = 'Forbidden', code?: string): void {
        this.error(res, message, 403, code);
    }

    static notFound(res: Response, message: string = 'Resource not found', code?: string): void {
        this.error(res, message, 404, code);
    }

    static conflict(res: Response, message: string = 'Conflict', code?: string): void {
        this.error(res, message, 409, code);
    }

    static unprocessableEntity(res: Response, message: string = 'Unprocessable entity', code?: string): void {
        this.error(res, message, 422, code);
    }

    static tooManyRequests(res: Response, message: string = 'Too many requests', code?: string): void {
        this.error(res, message, 429, code);
    }

    static internalServerError(res: Response, message: string = 'Internal server error', code?: string): void {
        this.error(res, message, 500, code);
    }

    // Paginated response
    static paginated<T>(
        res: Response,
        data: T[],
        page: number,
        limit: number,
        total: number,
        message?: string
    ): void {
        const totalPages = Math.ceil(total / limit);

        const response: ApiResponse<T[]> = {
            success: true,
            data,
            message,
            pagination: {
                page,
                limit,
                total,
                totalPages,
            },
        };

        res.status(200).json(response);
    }
}

