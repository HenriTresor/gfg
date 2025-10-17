import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { ResponseHelper } from '../utils/response';
import { PaginationHelper } from '../utils/pagination';
import logger from '../config/logger';
import { emailService } from '../services/emailService';
import { notificationService } from '../services/notificationService';
import { NotificationType } from '../generated/prisma';

export class DailyCasualRequestController {
    // Supervisors can create requests
    async createRequest(req: Request, res: Response): Promise<void> {
        try {
            const supervisorId = req.user!.id;
            const {
                casualsRequired,
                crop,
                cropStage,
                date,
                week,
                activity,
                farmName,
                units,
                costPerUnit,
            } = req.body;

            // Calculate total
            const total = casualsRequired * costPerUnit;

            const request = await prisma.dailyCasualRequest.create({
                data: {
                    casualsRequired,
                    crop,
                    cropStage,
                    date: new Date(date),
                    week,
                    activity,
                    farmName,
                    units: units || 1,
                    costPerUnit,
                    total,
                    supervisorId,
                },
                include: {
                    supervisor: {
                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            // Send email to supervisor
            try {
                const supervisorName = request.supervisor.firstName 
                    ? `${request.supervisor.firstName} ${request.supervisor.lastName || ''}`
                    : request.supervisor.email;

                await emailService.sendRequestCreatedEmail(
                    request.supervisor.email,
                    supervisorName,
                    {
                        activity,
                        crop,
                        date,
                        casualsRequired,
                    }
                );
            } catch (emailError) {
                logger.error('Error sending email notification:', emailError);
            }

            // Create in-app notification for supervisor
            try {
                await notificationService.createNotification(
                    supervisorId,
                    NotificationType.REQUEST_CREATED,
                    'Request Created',
                    `Your request for ${casualsRequired} casuals for ${crop} - ${activity} has been created and is pending approval.`,
                    `/daily-casual-requests`
                );
            } catch (notifError) {
                logger.error('Error creating notification:', notifError);
            }

            // Send email to all admins
            try {
                const admins = await prisma.user.findMany({
                    where: { role: 'SYSTEM_ADMIN' },
                    select: { email: true, firstName: true, lastName: true },
                });

                const supervisorName = request.supervisor.firstName 
                    ? `${request.supervisor.firstName} ${request.supervisor.lastName || ''}`
                    : request.supervisor.email;

                for (const admin of admins) {
                    await emailService.sendNewRequestNotificationEmail(
                        admin.email,
                        {
                            supervisorName,
                            activity,
                            crop,
                            date,
                            casualsRequired,
                        }
                    );
                }
            } catch (emailError) {
                logger.error('Error sending email to admins:', emailError);
            }

            // Create in-app notifications for all admins
            try {
                const admins = await prisma.user.findMany({
                    where: { role: 'SYSTEM_ADMIN' },
                    select: { id: true },
                });

                const supervisorName = request.supervisor.firstName 
                    ? `${request.supervisor.firstName} ${request.supervisor.lastName || ''}`
                    : request.supervisor.email;

                for (const admin of admins) {
                    await notificationService.createNotification(
                        admin.id,
                        NotificationType.REQUEST_CREATED,
                        'New Request Pending',
                        `${supervisorName} created a request for ${casualsRequired} casuals for ${crop} - ${activity}`,
                        `/admin/daily-casual-requests`
                    );
                }
            } catch (notifError) {
                logger.error('Error creating notifications for admins:', notifError);
            }

            logger.info(`Daily casual request created by ${req.user!.email}: ${casualsRequired} casuals for ${crop} - ${activity}`);
            ResponseHelper.created(res, request, 'Daily casual request created successfully');
        } catch (error) {
            logger.error('Error creating daily casual request:', error);
            ResponseHelper.internalServerError(res, 'Failed to create daily casual request');
        }
    }

    // Supervisors can view all requests (not just their own)
    async getMyRequests(req: Request, res: Response): Promise<void> {
        try {
            const pagination = PaginationHelper.parsePaginationParams(req.query);

            const where: any = {};

            // Apply filters
            if (req.query.status) {
                where.status = req.query.status;
            }
            if (req.query.farmName) {
                where.farmName = { contains: req.query.farmName as string, mode: 'insensitive' };
            }
            if (req.query.crop) {
                where.crop = { contains: req.query.crop as string, mode: 'insensitive' };
            }

            const [requests, total] = await Promise.all([
                prisma.dailyCasualRequest.findMany({
                    where,
                    skip: pagination.skip,
                    take: pagination.limit,
                    orderBy: { createdAt: 'desc' },
                    include: {
                        supervisor: {
                            select: {
                                id: true,
                                email: true,
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
                prisma.dailyCasualRequest.count({ where }),
            ]);

            const result = PaginationHelper.createPaginationResult(requests, total, pagination);
            ResponseHelper.success(res, result, 'Daily casual requests retrieved successfully');
        } catch (error) {
            logger.error('Error getting daily casual requests:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve daily casual requests');
        }
    }

    // Admin can view all requests
    async getAllRequests(req: Request, res: Response): Promise<void> {
        try {
            const pagination = PaginationHelper.parsePaginationParams(req.query);

            const where: any = {};

            // Apply filters
            if (req.query.status) {
                where.status = req.query.status;
            }
            if (req.query.farmName) {
                where.farmName = { contains: req.query.farmName as string, mode: 'insensitive' };
            }
            if (req.query.crop) {
                where.crop = { contains: req.query.crop as string, mode: 'insensitive' };
            }
            if (req.query.supervisorId) {
                where.supervisorId = req.query.supervisorId;
            }

            const [requests, total] = await Promise.all([
                prisma.dailyCasualRequest.findMany({
                    where,
                    skip: pagination.skip,
                    take: pagination.limit,
                    orderBy: { createdAt: 'desc' },
                    include: {
                        supervisor: {
                            select: {
                                id: true,
                                email: true,
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
                prisma.dailyCasualRequest.count({ where }),
            ]);

            const result = PaginationHelper.createPaginationResult(requests, total, pagination);
            ResponseHelper.success(res, result, 'All daily casual requests retrieved successfully');
        } catch (error) {
            logger.error('Error getting all daily casual requests:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve daily casual requests');
        }
    }

    // Admin can get pending requests
    async getPendingRequests(req: Request, res: Response): Promise<void> {
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

            const [requests, total] = await Promise.all([
                prisma.dailyCasualRequest.findMany({
                    where,
                    skip: pagination.skip,
                    take: pagination.limit,
                    orderBy: { createdAt: 'asc' }, // Oldest first
                    include: {
                        supervisor: {
                            select: {
                                id: true,
                                email: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                    },
                }),
                prisma.dailyCasualRequest.count({ where }),
            ]);

            const result = PaginationHelper.createPaginationResult(requests, total, pagination);
            ResponseHelper.success(res, result, 'Pending daily casual requests retrieved successfully');
        } catch (error) {
            logger.error('Error getting pending daily casual requests:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve pending requests');
        }
    }

    // Admin can approve request
    async approveRequest(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const adminId = req.user!.id;

            const existingRequest = await prisma.dailyCasualRequest.findUnique({
                where: { id },
                include: {
                    supervisor: {
                        select: {
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            if (!existingRequest) {
                ResponseHelper.notFound(res, 'Daily casual request not found');
                return;
            }

            if (existingRequest.status !== 'PENDING') {
                ResponseHelper.badRequest(res, 'Only pending requests can be approved');
                return;
            }

            const request = await prisma.dailyCasualRequest.update({
                where: { id },
                data: {
                    status: 'APPROVED',
                    adminId,
                },
                include: {
                    supervisor: {
                        select: {
                            id: true,
                            email: true,
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
            });

            // Send email to supervisor
            try {
                const supervisorName = request.supervisor.firstName 
                    ? `${request.supervisor.firstName} ${request.supervisor.lastName || ''}`
                    : request.supervisor.email;

                await emailService.sendRequestApprovedEmail(
                    request.supervisor.email,
                    supervisorName,
                    {
                        activity: request.activity,
                        crop: request.crop,
                        date: request.date.toISOString(),
                        casualsRequired: request.casualsRequired,
                    }
                );
            } catch (emailError) {
                logger.error('Error sending approval email:', emailError);
            }

            // Create in-app notification for supervisor
            try {
                await notificationService.createNotification(
                    request.supervisor.id,
                    NotificationType.REQUEST_APPROVED,
                    'Request Approved',
                    `Your request for ${request.casualsRequired} casuals for ${request.crop} - ${request.activity} has been approved.`,
                    `/daily-casual-requests`
                );
            } catch (notifError) {
                logger.error('Error creating approval notification:', notifError);
            }

            logger.info(`Daily casual request approved by admin ${req.user!.email}: ${request.casualsRequired} casuals for ${request.crop} - ${request.activity}`);
            ResponseHelper.success(res, request, 'Daily casual request approved successfully');
        } catch (error) {
            logger.error('Error approving daily casual request:', error);
            ResponseHelper.internalServerError(res, 'Failed to approve daily casual request');
        }
    }

    // Admin can reject request
    async rejectRequest(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const adminId = req.user!.id;
            const { rejectionReason } = req.body;

            if (!rejectionReason || !rejectionReason.trim()) {
                ResponseHelper.badRequest(res, 'Rejection reason is required');
                return;
            }

            const existingRequest = await prisma.dailyCasualRequest.findUnique({
                where: { id },
                include: {
                    supervisor: {
                        select: {
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            if (!existingRequest) {
                ResponseHelper.notFound(res, 'Daily casual request not found');
                return;
            }

            if (existingRequest.status !== 'PENDING') {
                ResponseHelper.badRequest(res, 'Only pending requests can be rejected');
                return;
            }

            const request = await prisma.dailyCasualRequest.update({
                where: { id },
                data: {
                    status: 'REJECTED',
                    adminId,
                    rejectionReason,
                },
                include: {
                    supervisor: {
                        select: {
                            id: true,
                            email: true,
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
            });

            // Send email to supervisor
            try {
                const supervisorName = request.supervisor.firstName 
                    ? `${request.supervisor.firstName} ${request.supervisor.lastName || ''}`
                    : request.supervisor.email;

                await emailService.sendRequestRejectedEmail(
                    request.supervisor.email,
                    supervisorName,
                    {
                        activity: request.activity,
                        crop: request.crop,
                        date: request.date.toISOString(),
                        casualsRequired: request.casualsRequired,
                        rejectionReason: request.rejectionReason!,
                    }
                );
            } catch (emailError) {
                logger.error('Error sending rejection email:', emailError);
            }

            // Create in-app notification for supervisor
            try {
                await notificationService.createNotification(
                    request.supervisor.id,
                    NotificationType.REQUEST_REJECTED,
                    'Request Rejected',
                    `Your request for ${request.casualsRequired} casuals for ${request.crop} - ${request.activity} has been rejected. Reason: ${rejectionReason}`,
                    `/daily-casual-requests`
                );
            } catch (notifError) {
                logger.error('Error creating rejection notification:', notifError);
            }

            logger.info(`Daily casual request rejected by admin ${req.user!.email}: ${request.casualsRequired} casuals for ${request.crop} - ${request.activity}. Reason: ${rejectionReason}`);
            ResponseHelper.success(res, request, 'Daily casual request rejected successfully');
        } catch (error) {
            logger.error('Error rejecting daily casual request:', error);
            ResponseHelper.internalServerError(res, 'Failed to reject daily casual request');
        }
    }

    // Supervisors can update their pending requests
    async updateRequest(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const supervisorId = req.user!.id;
            const updateData = req.body;

            const existingRequest = await prisma.dailyCasualRequest.findFirst({
                where: { id, supervisorId },
            });

            if (!existingRequest) {
                ResponseHelper.notFound(res, 'Daily casual request not found');
                return;
            }

            if (existingRequest.status !== 'PENDING') {
                ResponseHelper.badRequest(res, 'Cannot update approved or rejected requests');
                return;
            }

            // Recalculate total if casualsRequired or costPerUnit is updated
            let total = existingRequest.total;
            if (updateData.casualsRequired !== undefined || updateData.costPerUnit !== undefined) {
                const casualsRequired = updateData.casualsRequired ?? existingRequest.casualsRequired;
                const costPerUnit = updateData.costPerUnit ?? existingRequest.costPerUnit;
                total = casualsRequired * costPerUnit;
            }

            const request = await prisma.dailyCasualRequest.update({
                where: { id },
                data: {
                    ...updateData,
                    total,
                    ...(updateData.date && { date: new Date(updateData.date) }),
                },
                include: {
                    supervisor: {
                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            });

            logger.info(`Daily casual request updated: ${request.casualsRequired} casuals for ${request.crop} - ${request.activity}`);
            ResponseHelper.success(res, request, 'Daily casual request updated successfully');
        } catch (error) {
            logger.error('Error updating daily casual request:', error);
            ResponseHelper.internalServerError(res, 'Failed to update daily casual request');
        }
    }

    // Supervisors can delete their pending requests
    async deleteRequest(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const supervisorId = req.user!.id;

            const existingRequest = await prisma.dailyCasualRequest.findFirst({
                where: { id, supervisorId },
                include: {
                    supervisor: {
                        select: {
                            email: true,
                        },
                    },
                },
            });

            if (!existingRequest) {
                ResponseHelper.notFound(res, 'Daily casual request not found');
                return;
            }

            if (existingRequest.status !== 'PENDING') {
                ResponseHelper.badRequest(res, 'Cannot delete approved or rejected requests');
                return;
            }

            await prisma.dailyCasualRequest.delete({
                where: { id },
            });

            logger.info(`Daily casual request deleted: ${existingRequest.casualsRequired} casuals for ${existingRequest.crop} - ${existingRequest.activity}`);
            ResponseHelper.success(res, null, 'Daily casual request deleted successfully');
        } catch (error) {
            logger.error('Error deleting daily casual request:', error);
            ResponseHelper.internalServerError(res, 'Failed to delete daily casual request');
        }
    }
}

