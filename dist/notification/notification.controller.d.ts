import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    getNotifications(userId: string): Promise<{
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
