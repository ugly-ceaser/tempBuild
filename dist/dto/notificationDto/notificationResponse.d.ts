export declare class NotificationResponseDto {
    id: number;
    userId: string;
    message: string;
    createdAt: Date;
    status: string;
    type: string;
    priority: string;
    actionButtonLabel?: string;
    actionButtonLink?: string;
    relatedResourceLink?: string;
}
