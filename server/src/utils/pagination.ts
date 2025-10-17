export interface PaginationOptions {
    page: number;
    limit: number;
    skip?: number;
}

export interface PaginationResult<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}

export class PaginationHelper {
    static parsePaginationParams(query: any): PaginationOptions {
        const page = Math.max(1, parseInt(query.page) || 1);
        const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 10));
        const skip = (page - 1) * limit;

        return { page, limit, skip };
    }

    static createPaginationResult<T>(
        data: T[],
        total: number,
        options: PaginationOptions
    ): PaginationResult<T> {
        const totalPages = Math.ceil(total / options.limit);
        const hasNext = options.page < totalPages;
        const hasPrev = options.page > 1;

        return {
            data,
            pagination: {
                page: options.page,
                limit: options.limit,
                total,
                totalPages,
                hasNext,
                hasPrev,
            },
        };
    }

    static getPaginationMeta(options: PaginationOptions, total: number) {
        const totalPages = Math.ceil(total / options.limit);

        return {
            page: options.page,
            limit: options.limit,
            total,
            totalPages,
            hasNext: options.page < totalPages,
            hasPrev: options.page > 1,
        };
    }
}

