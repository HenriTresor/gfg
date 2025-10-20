import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { ResponseHelper } from '../utils/response';
import { PaginationHelper } from '../utils/pagination';
import logger from '../config/logger';
import { hashPassword } from '../utils/crypto';
import { cacheService } from '../services/cacheService';
import { CACHE_KEYS, CACHE_TTL } from '../services/cacheService';
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
            const filters = req.body as PaymentReportRequest;
            const reportData = await this.generateReportData(filters);

            // Save report to database
            await prisma.paymentReport.create({
                data: {
                    generatedBy: req.user!.id,
                    reportData: JSON.stringify(reportData),
                    filters: JSON.stringify(filters),
                },
            });

            ResponseHelper.success(res, reportData, 'Custom payment report generated successfully');
        } catch (error) {
            logger.error('Error generating custom payment report:', error);
            ResponseHelper.internalServerError(res, 'Failed to generate custom payment report');
        }
    }

    async getLatestReport(req: Request, res: Response): Promise<void> {
        try {
            const latestReport = await prisma.paymentReport.findFirst({
                orderBy: { createdAt: 'desc' },
                include: {
                    generatedByUser: {
                        select: {
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            if (!latestReport) {
                ResponseHelper.success(res, null, 'No reports found');
                return;
            }

            const reportData = {
                ...JSON.parse(latestReport.reportData),
                generatedAt: latestReport.createdAt,
                generatedBy: latestReport.generatedByUser,
                filters: JSON.parse(latestReport.filters),
            };

            ResponseHelper.success(res, reportData, 'Latest report retrieved successfully');
        } catch (error) {
            logger.error('Error getting latest report:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve latest report');
        }
    }

    async getAllReports(req: Request, res: Response): Promise<void> {
        try {
            const reports = await prisma.paymentReport.findMany({
                orderBy: { createdAt: 'desc' },
                include: {
                    generatedByUser: {
                        select: {
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            const formattedReports = reports.map((report: any) => {
                const reportData = JSON.parse(report.reportData);
                const filters = JSON.parse(report.filters);

                return {
                    id: report.id,
                    generatedAt: report.createdAt,
                    generatedBy: report.generatedByUser,
                    filters: filters,
                    summary: reportData.summary,
                };
            });

            ResponseHelper.success(res, formattedReports, 'All reports retrieved successfully');
        } catch (error) {
            logger.error('Error getting all reports:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve reports');
        }
    }

    async getReportById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const report = await prisma.paymentReport.findUnique({
                where: { id },
                include: {
                    generatedByUser: {
                        select: {
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            if (!report) {
                ResponseHelper.notFound(res, 'Report not found');
                return;
            }

            const reportData = {
                ...JSON.parse(report.reportData),
                generatedAt: report.createdAt,
                generatedBy: report.generatedByUser,
                filters: JSON.parse(report.filters),
            };

            ResponseHelper.success(res, reportData, 'Report retrieved successfully');
        } catch (error) {
            logger.error('Error getting report by ID:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve report');
        }
    }

    async deleteReport(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const report = await prisma.paymentReport.findUnique({
                where: { id },
            });

            if (!report) {
                ResponseHelper.notFound(res, 'Report not found');
                return;
            }

            await prisma.paymentReport.delete({
                where: { id },
            });

            ResponseHelper.success(res, null, 'Report deleted successfully');
        } catch (error) {
            logger.error('Error deleting report:', error);
            ResponseHelper.internalServerError(res, 'Failed to delete report');
        }
    }

    private async generateReportData(filters: any): Promise<PaymentReportResponse> {
        const where: any = {};

        // Require date filters
        if (!filters.startDate || !filters.endDate) {
            throw new Error('Start date and end date are required to generate the report');
        }

        // Apply date filters
        const startDate = new Date(filters.startDate);
        const endDate = new Date(filters.endDate);

        // Validate date range
        if (endDate < startDate) {
            throw new Error('End date must be after start date');
        }

        where.date = {
            gte: startDate,
            lte: endDate,
        };

        // Apply other filters
        if (filters.farmName) {
            where.farmName = { contains: filters.farmName, mode: 'insensitive' };
        }

        const entries = await prisma.casualWorkEntry.findMany({
            where: {
                ...where,
                casual: {
                    isActive: true, // Only include active casuals in reports
                },
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
            // Use cache-aside pattern
            const statistics = await cacheService.getOrSet(
                CACHE_KEYS.STATISTICS,
                async () => {
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

                    return {
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
                },
                CACHE_TTL.STATISTICS
            );

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

            // Invalidate cache
            cacheService.invalidatePattern('statistics');
            cacheService.invalidatePattern('supervisors');

            logger.info(`Supervisor created by admin ${req.user!.email}: ${supervisor.email}`);
            ResponseHelper.created(res, supervisor, 'Supervisor created successfully');
        } catch (error) {
            logger.error('Error creating supervisor:', error);
            ResponseHelper.internalServerError(res, 'Failed to create supervisor');
        }
    }
}
