import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { ResponseHelper } from '../utils/response';
import { PaginationHelper } from '../utils/pagination';
import logger from '../config/logger';
import { hashPassword } from '../utils/crypto';
import { ApproveRequestRequest, RejectRequestRequest, PaymentReportRequest, PaymentReportResponse, PaymentReportEntry } from '../types';

export class AdminController {
    async getAllCasualWorkEntries(req: Request, res: Response): Promise<void> {
        try {
            const pagination = PaginationHelper.parsePaginationParams(req.query);

            const where: any = {};

            // Apply filters
            if (req.query.status) {
                where.status = req.query.status as any;
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
            if (req.query.supervisorId) {
                where.supervisorId = req.query.supervisorId;
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

            ResponseHelper.success(res, result, 'All casual work entries retrieved successfully');
        } catch (error) {
            logger.error('Error getting all casual work entries:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve casual work entries');
        }
    }

    async getPendingCasualWorkEntries(req: Request, res: Response): Promise<void> {
        try {
            const pagination = PaginationHelper.parsePaginationParams(req.query);

            const where: any = {
                status: 'PENDING',
            };

            // Apply additional filters
            if (req.query.farmName) {
                where.farmName = { contains: req.query.farmName as string, mode: 'insensitive' };
            }
            if (req.query.supervisorId) {
                where.supervisorId = req.query.supervisorId;
            }

            const [entries, total] = await Promise.all([
                prisma.casualWorkEntry.findMany({
                    where,
                    skip: pagination.skip,
                    take: pagination.limit,
                    orderBy: { createdAt: 'asc' }, // Oldest first for approval queue
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

            ResponseHelper.success(res, result, 'Pending casual work entries retrieved successfully');
        } catch (error) {
            logger.error('Error getting pending casual work entries:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve pending casual work entries');
        }
    }

    async getCasualWorkEntryById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const entry = await prisma.casualWorkEntry.findUnique({
                where: { id },
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

    async generatePaymentReport(req: Request, res: Response): Promise<void> {
        try {
            const reportData = await this.generateReportData(req.query as any);
            ResponseHelper.success(res, reportData, 'Payment report generated successfully');
        } catch (error) {
            logger.error('Error generating payment report:', error);
            ResponseHelper.internalServerError(res, 'Failed to generate payment report');
        }
    }

    async generateCustomPaymentReport(req: Request, res: Response): Promise<void> {
        try {
            const reportData = await this.generateReportData(req.body as PaymentReportRequest);
            ResponseHelper.success(res, reportData, 'Custom payment report generated successfully');
        } catch (error) {
            logger.error('Error generating custom payment report:', error);
            ResponseHelper.internalServerError(res, 'Failed to generate custom payment report');
        }
    }

    private async generateReportData(filters: any): Promise<PaymentReportResponse> {
        const where: any = {};

        // Apply date filters
        if (filters.startDate) {
            where.date = { ...where.date, gte: new Date(filters.startDate) };
        }
        if (filters.endDate) {
            where.date = { ...where.date, lte: new Date(filters.endDate) };
        }

        // Apply other filters
        if (filters.farmName) {
            where.farmName = { contains: filters.farmName, mode: 'insensitive' };
        }

        const entries = await prisma.casualWorkEntry.findMany({
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
            },
            orderBy: [
                { casual: { name: 'asc' } },
                { date: 'asc' },
            ],
        });

        // Group entries by casual
        const casualMap = new Map<string, PaymentReportEntry>();

        entries.forEach((entry: any) => {
            const casualId = entry.casual.id;

            if (!casualMap.has(casualId)) {
                casualMap.set(casualId, {
                    casualId: entry.casual.id,
                    casual: {
                        name: entry.casual.name,
                        nationalId: entry.casual.nationalId,
                        phoneNumber: entry.casual.phoneNumber,
                    },
                    supervisor: {
                        email: entry.supervisor?.email || '',
                        firstName: entry.supervisor?.firstName,
                        lastName: entry.supervisor?.lastName,
                    },
                    totalAmount: 0,
                    totalAmountInclMomoCharges: 0,
                    workEntries: [],
                });
            }

            const casualEntry = casualMap.get(casualId)!;
            casualEntry.totalAmount += entry.amount;
            casualEntry.totalAmountInclMomoCharges += entry.amountInclMomoCharges;
            casualEntry.workEntries.push({
                id: entry.id,
                activityDone: entry.activityDone,
                unit: entry.unit,
                costPerUnit: entry.costPerUnit,
                date: entry.date,
                farmName: entry.farmName,
                period: entry.period,
                month: entry.month,
                crop: entry.crop,
                adjustment: entry.adjustment,
                amount: entry.amount,
                amountInclMomoCharges: entry.amountInclMomoCharges,
            });
        });

        const reportEntries = Array.from(casualMap.values());

        const totalAmount = reportEntries.reduce((sum, entry) => sum + entry.totalAmount, 0);
        const totalAmountInclMomoCharges = reportEntries.reduce((sum, entry) => sum + entry.totalAmountInclMomoCharges, 0);
        const totalWorkEntries = entries.length;

        return {
            entries: reportEntries,
            summary: {
                totalCasuals: reportEntries.length,
                totalAmount,
                totalAmountInclMomoCharges,
                totalWorkEntries,
            },
            generatedAt: new Date(),
            filters: {
                startDate: filters.startDate ? new Date(filters.startDate) : undefined,
                endDate: filters.endDate ? new Date(filters.endDate) : undefined,
                farmName: filters.farmName,
            },
        };
    }

    async getStatistics(req: Request, res: Response): Promise<void> {
        try {
            const [
                totalCasuals,
                activeCasuals,
                totalWorkEntries,
                totalSupervisors,
                totalAmount,
                totalAmountInclMomoCharges,
            ] = await Promise.all([
                prisma.casual.count(),
                prisma.casual.count({ where: { isActive: true } }),
                prisma.casualWorkEntry.count(),
                prisma.user.count({ where: { role: 'FARM_SUPERVISOR' as any } }),
                prisma.casualWorkEntry.aggregate({
                    _sum: { amount: true },
                }),
                prisma.casualWorkEntry.aggregate({
                    _sum: { amountInclMomoCharges: true },
                }),
            ]);

            const statistics = {
                casuals: {
                    total: totalCasuals,
                    active: activeCasuals,
                    inactive: totalCasuals - activeCasuals,
                },
                workEntries: {
                    total: totalWorkEntries,
                },
                supervisors: {
                    total: totalSupervisors,
                },
                financial: {
                    totalAmount: totalAmount._sum?.amount || 0,
                    totalAmountInclMomoCharges: totalAmountInclMomoCharges._sum?.amountInclMomoCharges || 0,
                },
                generatedAt: new Date(),
            };

            ResponseHelper.success(res, statistics, 'Statistics retrieved successfully');
        } catch (error) {
            logger.error('Error getting statistics:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve statistics');
        }
    }

    async createSupervisor(req: Request, res: Response): Promise<void> {
        try {
            const { email, password, firstName, lastName } = req.body;

            // Check if user with email already exists
            const existingUser = await prisma.user.findUnique({
                where: { email },
            });

            if (existingUser) {
                ResponseHelper.conflict(res, 'User with this email already exists');
                return;
            }

            // Hash password
            const hashedPassword = await hashPassword(password);

            // Create supervisor user
            const supervisor = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    role: 'FARM_SUPERVISOR',
                    isActive: true,
                },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    role: true,
                    isActive: true,
                    createdAt: true,
                },
            });

            logger.info(`Supervisor created by admin ${req.user!.email}: ${supervisor.email}`);
            ResponseHelper.created(res, supervisor, 'Supervisor created successfully');
        } catch (error) {
            logger.error('Error creating supervisor:', error);
            ResponseHelper.internalServerError(res, 'Failed to create supervisor');
        }
    }
}
