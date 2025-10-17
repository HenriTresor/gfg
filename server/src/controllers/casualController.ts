import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { ResponseHelper } from '../utils/response';
import { PaginationHelper } from '../utils/pagination';
import logger from '../config/logger';
import { CreateCasualRequest, UpdateCasualRequest, SearchParams } from '../types';
import { cacheService } from '../services/cacheService';
import { CACHE_KEYS, CACHE_TTL } from '../services/cacheService';

export class CasualController {
    async getAllCasuals(req: Request, res: Response): Promise<void> {
        try {
            const pagination = PaginationHelper.parsePaginationParams(req.query);
            const search = req.query.search as string;

            // Create cache key based on pagination and search
            const cacheKey = CACHE_KEYS.CASUAL_WORKERS(pagination.page, pagination.limit) + (search ? `:search:${search}` : '');

            // Use cache-aside pattern
            const result = await cacheService.getOrSet(
                cacheKey,
                async () => {
                    const where: any = {};

                    if (search) {
                        where.OR = [
                            { name: { contains: search, mode: 'insensitive' as any } },
                            { nationalId: { contains: search } },
                            { phoneNumber: { contains: search } },
                        ];
                    }

                    const [casuals, total] = await Promise.all([
                        prisma.casual.findMany({
                            where,
                            skip: pagination.skip,
                            take: pagination.limit,
                            orderBy: { createdAt: 'desc' },
                        }),
                        prisma.casual.count({ where }),
                    ]);

                    return PaginationHelper.createPaginationResult(casuals, total, pagination);
                },
                CACHE_TTL.CASUAL_WORKERS
            );

            ResponseHelper.success(res, result, 'Casuals retrieved successfully');
        } catch (error) {
            logger.error('Error getting all casuals:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve casuals');
        }
    }

    async searchCasuals(req: Request, res: Response): Promise<void> {
        try {
            const { search, page = 1, limit = 10 } = req.query;
            const pagination = PaginationHelper.parsePaginationParams(req.query);

            if (!search || typeof search !== 'string') {
                ResponseHelper.badRequest(res, 'Search parameter is required');
                return;
            }

            const where = {
                OR: [
                    { name: { contains: search, mode: 'insensitive' as any } },
                    { nationalId: { contains: search } },
                    { phoneNumber: { contains: search } },
                ],
                isActive: true,
            };

            const [casuals, total] = await Promise.all([
                prisma.casual.findMany({
                    where,
                    skip: pagination.skip,
                    take: pagination.limit,
                    orderBy: { name: 'asc' },
                }),
                prisma.casual.count({ where }),
            ]);

            const result = PaginationHelper.createPaginationResult(casuals, total, pagination);

            ResponseHelper.success(res, result, 'Search completed successfully');
        } catch (error) {
            logger.error('Error searching casuals:', error);
            ResponseHelper.internalServerError(res, 'Failed to search casuals');
        }
    }

    async getCasualById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const casual = await prisma.casual.findUnique({
                where: { id },
                include: {
                    workEntries: {
                        take: 5,
                        orderBy: { createdAt: 'desc' },
                        select: {
                            id: true,
                            activityDone: true,
                            unit: true,
                            costPerUnit: true,
                            date: true,
                            farmName: true,
                            amount: true,
                        },
                    },
                },
            });

            if (!casual) {
                ResponseHelper.notFound(res, 'Casual not found');
                return;
            }

            ResponseHelper.success(res, casual, 'Casual retrieved successfully');
        } catch (error) {
            logger.error('Error getting casual by ID:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve casual');
        }
    }

    async createCasual(req: Request, res: Response): Promise<void> {
        try {
            const casualData: CreateCasualRequest = req.body;

            // Check if casual with same national ID already exists
            const existingCasual = await prisma.casual.findUnique({
                where: { nationalId: casualData.nationalId },
            });

            if (existingCasual) {
                ResponseHelper.conflict(res, 'Casual with this national ID already exists');
                return;
            }

            // Check if casual with same phone number already exists
            const existingPhone = await prisma.casual.findFirst({
                where: { phoneNumber: casualData.phoneNumber },
            });

            if (existingPhone) {
                ResponseHelper.conflict(res, 'Casual with this phone number already exists');
                return;
            }

            const casual = await prisma.casual.create({
                data: casualData,
            });

            // Invalidate cache
            cacheService.invalidateCasual();

            logger.info(`Casual created: ${casual.name} (${casual.nationalId})`);
            ResponseHelper.created(res, casual, 'Casual created successfully');
        } catch (error) {
            logger.error('Error creating casual:', error);
            ResponseHelper.internalServerError(res, 'Failed to create casual');
        }
    }

    async updateCasual(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updateData: UpdateCasualRequest = req.body;

            // Check if casual exists
            const existingCasual = await prisma.casual.findUnique({
                where: { id },
            });

            if (!existingCasual) {
                ResponseHelper.notFound(res, 'Casual not found');
                return;
            }

            // If updating national ID, check for duplicates
            if (updateData.nationalId && updateData.nationalId !== existingCasual.nationalId) {
                const duplicateNationalId = await prisma.casual.findUnique({
                    where: { nationalId: updateData.nationalId },
                });

                if (duplicateNationalId) {
                    ResponseHelper.conflict(res, 'Casual with this national ID already exists');
                    return;
                }
            }

            // If updating phone number, check for duplicates
            if (updateData.phoneNumber && updateData.phoneNumber !== existingCasual.phoneNumber) {
                const duplicatePhone = await prisma.casual.findFirst({
                    where: { phoneNumber: updateData.phoneNumber },
                });

                if (duplicatePhone) {
                    ResponseHelper.conflict(res, 'Casual with this phone number already exists');
                    return;
                }
            }

            const casual = await prisma.casual.update({
                where: { id },
                data: updateData,
            });

            // Invalidate cache
            cacheService.invalidateCasual();

            logger.info(`Casual updated: ${casual.name} (${casual.nationalId})`);
            ResponseHelper.success(res, casual, 'Casual updated successfully');
        } catch (error) {
            logger.error('Error updating casual:', error);
            ResponseHelper.internalServerError(res, 'Failed to update casual');
        }
    }

    async deleteCasual(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            // Check if casual exists
            const existingCasual = await prisma.casual.findUnique({
                where: { id },
            });

            if (!existingCasual) {
                ResponseHelper.notFound(res, 'Casual not found');
                return;
            }

            // Soft delete by setting isActive to false
            const casual = await prisma.casual.update({
                where: { id },
                data: { isActive: false },
            });

            // Invalidate cache
            cacheService.invalidateCasual();

            logger.info(`Casual deactivated: ${casual.name} (${casual.nationalId})`);
            ResponseHelper.success(res, casual, 'Casual deactivated successfully');
        } catch (error) {
            logger.error('Error deleting casual:', error);
            ResponseHelper.internalServerError(res, 'Failed to delete casual');
        }
    }
}
