import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from '../dto/notificationDto';
export declare class NotificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createNotification(dto: CreateNotificationDto): Promise<{
        userId: string;
        priority: string;
        id: number;
        createdAt: Date;
        message: string;
        status: string;
        type: string;
        actionButtonLabel: string | null;
        actionButtonLink: string | null;
        relatedResourceLink: string | null;
    }>;
    getUserNotifications(userId: string, page?: number, limit?: number): Promise<{
        data: {
            userId: string;
            priority: string;
            id: number;
            createdAt: Date;
            message: string;
            status: string;
            type: string;
            actionButtonLabel: string | null;
            actionButtonLink: string | null;
            relatedResourceLink: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        success: boolean;
    }>;
    markAsRead(notificationId: number): Promise<{
        userId: string;
        priority: string;
        id: number;
        createdAt: Date;
        message: string;
        status: string;
        type: string;
        actionButtonLabel: string | null;
        actionButtonLink: string | null;
        relatedResourceLink: string | null;
    }>;
}
