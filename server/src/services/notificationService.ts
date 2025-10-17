import { PrismaClient, NotificationType } from '@prisma/client';

const prisma = new PrismaClient();

export class NotificationService {
    async createNotification(
        userId: string,
        type: NotificationType,
        title: string,
        message: string,
        link?: string,
        metadata?: any
    ) {
        return await prisma.notification.create({
            data: {
                userId,
                type,
                title,
                message,
                link,
                metadata: metadata ? JSON.stringify(metadata) : null,
            },
        });
    }

    async getUserNotifications(userId: string, limit: number = 50) {
        return await prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });
    }

    async getUnreadCount(userId: string) {
        return await prisma.notification.count({
            where: {
                userId,
                isRead: false,
            },
        });
    }

    async markAsRead(notificationId: string, userId: string) {
        return await prisma.notification.updateMany({
            where: {
                id: notificationId,
                userId,
            },
            data: {
                isRead: true,
            },
        });
    }

    async markAllAsRead(userId: string) {
        return await prisma.notification.updateMany({
            where: {
                userId,
                isRead: false,
            },
            data: {
                isRead: true,
            },
        });
    }

    async deleteNotification(notificationId: string, userId: string) {
        return await prisma.notification.deleteMany({
            where: {
                id: notificationId,
                userId,
            },
        });
    }
}

export const notificationService = new NotificationService();

