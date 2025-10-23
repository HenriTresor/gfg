import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { ResponseHelper } from '../utils/response';
import { PaginationHelper } from '../utils/pagination';
import logger from '../config/logger';
import { CreateCasualWorkEntryRequest, UpdateCasualWorkEntryRequest } from '../types';

export class CasualWorkEntryController {
    async getAllCasualWorkEntries(req: Request, res: Response): Promise<void> {
        try {
            const pagination = PaginationHelper.parsePaginationParams(req.query);
            const userId = req.user!.id;
            const userRole = req.user!.role;

            const where: any = {};

            // Farm supervisors can only see their own entries
            if (userRole === 'FARM_SUPERVISOR') {
                where.supervisorId = userId;
            }

            // Apply filters
            if (req.query.status) {
                where.status = req.query.status;
            }
            if (req.query.farmName) {
                where.farmName = { contains: req.query.farmName as string, mode: 'insensitive' };
            }
            if (req.query.month) {
                where.month = { contains: req.query.month as string, mode: 'insensitive' };
            }
            if (req.query.crop) {
                where.crop = { contains: req.query.crop as string, mode: 'insensitive' };
            }

            const [entries, total] = await Promise.all([
                prisma.casualWorkEntry.findMany({
                    where,
                    skip: pagination.skip,
                    take: pagination.limit,
                    orderBy: { createdAt: 'desc' },
                    include: {
                        casual: {
                            select: {
                                id: true,
                                name: true,
                                nationalId: true,
                                phoneNumber: true,
                            },
                        },
                        supervisor: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                        admin: {
                            select: {
                                id: true,
                                email: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                    },
                }),
                prisma.casualWorkEntry.count({ where }),
            ]);

            const result = PaginationHelper.createPaginationResult(entries, total, pagination);

            ResponseHelper.success(res, result, 'Casual work entries retrieved successfully');
        } catch (error) {
            logger.error('Error getting all casual work entries:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve casual work entries');
        }
    }

    async searchCasualWorkEntries(req: Request, res: Response): Promise<void> {
        try {
            const pagination = PaginationHelper.parsePaginationParams(req.query);
            const userId = req.user!.id;
            const userRole = req.user!.role;
            const search = req.query.search as string;

            if (!search) {
                ResponseHelper.badRequest(res, 'Search parameter is required');
                return;
            }

            const where: any = {
                OR: [
                    { activityDone: { contains: search, mode: 'insensitive' } },
                    { farmName: { contains: search, mode: 'insensitive' } },
                    { period: { contains: search, mode: 'insensitive' } },
                    { crop: { contains: search, mode: 'insensitive' } },
                    { casual: { name: { contains: search, mode: 'insensitive' } } },
                ],
            };

            // Farm supervisors can only search their own entries
            if (userRole === 'FARM_SUPERVISOR') {
                where.supervisorId = userId;
            }

            const [entries, total] = await Promise.all([
                prisma.casualWorkEntry.findMany({
                    where,
                    skip: pagination.skip,
                    take: pagination.limit,
                    orderBy: { createdAt: 'desc' },
                    include: {
                        casual: {
                            select: {
                                id: true,
                                name: true,
                                nationalId: true,
                                phoneNumber: true,
                            },
                        },
                        supervisor: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                    },
                }),
                prisma.casualWorkEntry.count({ where }),
            ]);

            const result = PaginationHelper.createPaginationResult(entries, total, pagination);

            ResponseHelper.success(res, result, 'Search completed successfully');
        } catch (error) {
            logger.error('Error searching casual work entries:', error);
            ResponseHelper.internalServerError(res, 'Failed to search casual work entries');
        }
    }

    async getCasualWorkEntryById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const userId = req.user!.id;
            const userRole = req.user!.role;

            const where: any = { id };

            // Farm supervisors can only view their own entries
            if (userRole === 'FARM_SUPERVISOR') {
                where.supervisorId = userId;
            }

            const entry = await prisma.casualWorkEntry.findFirst({
                where,
                include: {
                    casual: {
                        select: {
                            id: true,
                            name: true,
                            nationalId: true,
                            phoneNumber: true,
                        },
                    },
                    supervisor: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                    admin: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            if (!entry) {
                ResponseHelper.notFound(res, 'Casual work entry not found');
                return;
            }

            ResponseHelper.success(res, entry, 'Casual work entry retrieved successfully');
        } catch (error) {
            logger.error('Error getting casual work entry by ID:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve casual work entry');
        }
    }

    async createCasualWorkEntry(req: Request, res: Response): Promise<void> {
        try {
            const entryData: CreateCasualWorkEntryRequest = req.body;
            const supervisorId = req.user!.id;

            // Verify that the casual exists and is active
            const casual = await prisma.casual.findUnique({
                where: { id: entryData.casualId },
            });

            if (!casual) {
                ResponseHelper.notFound(res, 'Casual not found');
                return;
            }

            if (!casual.isActive) {
                ResponseHelper.badRequest(res, 'Cannot create work entry for inactive casual');
                return;
            }

            // Calculate amounts
            const adjustment = entryData.adjustment || 0;
            const amount = (entryData.unit * entryData.costPerUnit) - adjustment;
            const momoCharges = 200; // Fixed momo charges
            const amountInclMomoCharges = amount + momoCharges;

            const entry = await prisma.casualWorkEntry.create({
                data: {
                    ...entryData,
                    adjustment,
                    amount,
                    amountInclMomoCharges,
                    supervisorId,
                    date: new Date(entryData.date),
                },
                include: {
                    casual: {
                        select: {
                            id: true,
                            name: true,
                            nationalId: true,
                            phoneNumber: true,
                        },
                    },
                    supervisor: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            logger.info(`Casual work entry created: ${entry.casual.name} - ${entry.activityDone} (${entry.unit} units)`);
            ResponseHelper.created(res, entry, 'Casual work entry created successfully');
        } catch (error) {
            logger.error('Error creating casual work entry:', error);
            ResponseHelper.internalServerError(res, 'Failed to create casual work entry');
        }
    }

    async updateCasualWorkEntry(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updateData: UpdateCasualWorkEntryRequest = req.body;
            const userId = req.user!.id;
            const userRole = req.user!.role;

            // Only admins can update work entries
            if (userRole !== 'SYSTEM_ADMIN') {
                ResponseHelper.forbidden(res, 'Only system administrators can update work entries');
                return;
            }

            // Check if entry exists
            const where: any = { id };

            const existingEntry = await prisma.casualWorkEntry.findFirst({
                where,
            });

            if (!existingEntry) {
                ResponseHelper.notFound(res, 'Casual work entry not found');
                return;
            }

            // Calculate new amounts if unit or costPerUnit is being updated
            let amount = existingEntry.amount;
            let amountInclMomoCharges = existingEntry.amountInclMomoCharges;

            if (updateData.unit !== undefined || updateData.costPerUnit !== undefined || updateData.adjustment !== undefined) {
                const unit = updateData.unit ?? existingEntry.unit;
                const costPerUnit = updateData.costPerUnit ?? existingEntry.costPerUnit;
                const adjustment = updateData.adjustment ?? existingEntry.adjustment;

                amount = (unit * costPerUnit) - adjustment;
                const momoCharges = 200;
                amountInclMomoCharges = amount + momoCharges;
            }

            const entry = await prisma.casualWorkEntry.update({
                where: { id },
                data: {
                    ...updateData,
                    amount,
                    amountInclMomoCharges,
                    ...(updateData.date && { date: new Date(updateData.date) }),
                },
                include: {
                    casual: {
                        select: {
                            id: true,
                            name: true,
                            nationalId: true,
                            phoneNumber: true,
                        },
                    },
                    supervisor: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            logger.info(`Casual work entry updated: ${entry.casual.name} - ${entry.activityDone}`);
            ResponseHelper.success(res, entry, 'Casual work entry updated successfully');
        } catch (error) {
            logger.error('Error updating casual work entry:', error);
            ResponseHelper.internalServerError(res, 'Failed to update casual work entry');
        }
    }

    async deleteCasualWorkEntry(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const userId = req.user!.id;
            const userRole = req.user!.role;

            // Only admins can delete work entries
            if (userRole !== 'SYSTEM_ADMIN') {
                ResponseHelper.forbidden(res, 'Only system administrators can delete work entries');
                return;
            }

            // Check if entry exists
            const where: any = { id };

            const existingEntry = await prisma.casualWorkEntry.findFirst({
                where,
                include: {
                    casual: {
                        select: {
                            name: true,
                        },
                    },
                },
            });

            if (!existingEntry) {
                ResponseHelper.notFound(res, 'Casual work entry not found');
                return;
            }

            await prisma.casualWorkEntry.delete({
                where: { id },
            });

            logger.info(`Casual work entry deleted: ${existingEntry.casual.name} - ${existingEntry.activityDone}`);
            ResponseHelper.success(res, null, 'Casual work entry deleted successfully');
        } catch (error) {
            logger.error('Error deleting casual work entry:', error);
            ResponseHelper.internalServerError(res, 'Failed to delete casual work entry');
        }
    }
}
