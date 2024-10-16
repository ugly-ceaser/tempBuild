"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationService = class NotificationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createNotification(dto) {
        try {
            const notification = await this.prisma.notification.create({
                data: {
                    userId: dto.userId,
                    message: dto.message,
                    status: dto.status,
                    type: dto.type,
                    priority: dto.priority,
                    actionButtonLabel: dto.actionButtonLabel,
                    actionButtonLink: dto.actionButtonLink,
                    relatedResourceLink: dto.relatedResourceLink,
                },
            });
            return notification;
        }
        catch (error) {
            console.error('Error creating notification:', error);
            throw new common_1.InternalServerErrorException('Could not create notification');
        }
    }
    async getUserNotifications(userId, page = 1, limit = 10) {
        try {
            const skip = (page - 1) * limit;
            const [notifications, total] = await this.prisma.$transaction([
                this.prisma.notification.findMany({
                    where: { userId },
                    orderBy: { createdAt: 'desc' },
                    skip,
                    take: limit,
                }),
                this.prisma.notification.count({
                    where: { userId },
                }),
            ]);
            return {
                data: notifications,
                total,
                page,
                limit,
                success: true,
            };
        }
        catch (error) {
            console.error('Error fetching notifications:', error);
            throw new common_1.InternalServerErrorException('Could not fetch notifications');
        }
    }
    async markAsRead(notificationId) {
        try {
            const notification = await this.prisma.notification.update({
                where: { id: notificationId },
                data: { status: 'read' },
            });
            return notification;
        }
        catch (error) {
            console.error('Error marking notification as read:', error);
            throw new common_1.InternalServerErrorException('Could not update notification status');
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map