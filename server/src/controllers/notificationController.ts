import { Request, Response } from 'express';
import { notificationService } from '../services/notificationService';
import { ResponseHelper } from '../utils/response';
import logger from '../config/logger';
import { cacheService } from '../services/cacheService';
import { CACHE_KEYS, CACHE_TTL } from '../services/cacheService';

export class NotificationController {
    async getMyNotifications(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user!.id;
            const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;

            const notifications = await notificationService.getUserNotifications(userId, limit);
            ResponseHelper.success(res, notifications, 'Notifications retrieved successfully');
        } catch (error) {
            logger.error('Error getting notifications:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve notifications');
        }
    }

    async getUnreadCount(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user!.id;

            // Use cache-aside pattern
            const count = await cacheService.getOrSet(
                CACHE_KEYS.NOTIFICATION_COUNT(userId),
                async () => {
                    return await notificationService.getUnreadCount(userId);
                },
                CACHE_TTL.NOTIFICATION_COUNT
            );

            ResponseHelper.success(res, { count }, 'Unread count retrieved successfully');
        } catch (error) {
            logger.error('Error getting unread count:', error);
            ResponseHelper.internalServerError(res, 'Failed to retrieve unread count');
        }
    }

    async markAsRead(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const userId = req.user!.id;

            await notificationService.markAsRead(id, userId);

            // Invalidate cache
            cacheService.invalidateUser(userId);

            ResponseHelper.success(res, null, 'Notification marked as read');
        } catch (error) {
            logger.error('Error marking notification as read:', error);
            ResponseHelper.internalServerError(res, 'Failed to mark notification as read');
        }
    }

    async markAllAsRead(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user!.id;

            await notificationService.markAllAsRead(userId);

            // Invalidate cache
            cacheService.invalidateUser(userId);

            ResponseHelper.success(res, null, 'All notifications marked as read');
        } catch (error) {
            logger.error('Error marking all notifications as read:', error);
            ResponseHelper.internalServerError(res, 'Failed to mark all notifications as read');
        }
    }

    async deleteNotification(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const userId = req.user!.id;

            await notificationService.deleteNotification(id, userId);

            // Invalidate cache
            cacheService.invalidateUser(userId);

            ResponseHelper.success(res, null, 'Notification deleted successfully');
        } catch (error) {
            logger.error('Error deleting notification:', error);
            ResponseHelper.internalServerError(res, 'Failed to delete notification');
        }
    }
}

export const notificationController = new NotificationController();

