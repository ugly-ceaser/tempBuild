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
exports.ReminderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const schedule_1 = require("@nestjs/schedule");
const notification_service_1 = require("../notification/notification.service");
const date_fns_1 = require("date-fns");
let ReminderService = class ReminderService {
    constructor(prisma, notification) {
        this.prisma = prisma;
        this.notification = notification;
    }
    async create(createReminderDto) {
        try {
            const { userId, title, ...rest } = createReminderDto;
            const reminder = await this.prisma.reminder.create({
                data: {
                    userId,
                    title,
                    ...rest,
                },
            });
            await this.notification.createNotification({
                userId,
                message: `Reminder has been set for: ${reminder.title}`,
                type: 'Reminder',
                priority: 'high',
                actionButtonLabel: 'View Reminder',
                actionButtonLink: `/reminders/${reminder.id}`,
                relatedResourceLink: `/reminders/${reminder.id}`,
                status: 'unread',
            });
            return { data: reminder, success: true };
        }
        catch (error) {
            console.error('Error creating reminder:', error);
            throw new common_1.InternalServerErrorException('Could not create reminder');
        }
    }
    async findAll(userId) {
        try {
            const reminders = await this.prisma.reminder.findMany({
                where: { userId },
            });
            return { data: reminders, success: true };
        }
        catch (error) {
            console.error('Error fetching reminders:', error);
            throw new common_1.InternalServerErrorException('Could not fetch reminders');
        }
    }
    async findOne(reminderId) {
        try {
            const reminder = await this.prisma.reminder.findUnique({
                where: { id: reminderId },
            });
            if (!reminder) {
                throw new common_1.NotFoundException(`Reminder with ID ${reminderId} not found`);
            }
            return { data: reminder, success: true };
        }
        catch (error) {
            console.error('Error fetching reminder:', error);
            throw new common_1.InternalServerErrorException('Could not fetch reminder');
        }
    }
    async update(reminderId, updateReminderDto) {
        try {
            const existingReminder = await this.findOne(reminderId);
            if (!existingReminder.success) {
                return { data: null, success: false };
            }
            const updatedReminder = await this.prisma.reminder.update({
                where: { id: reminderId },
                data: updateReminderDto,
            });
            return { data: updatedReminder, success: true };
        }
        catch (error) {
            console.error('Error updating reminder:', error);
            throw new common_1.InternalServerErrorException('Could not update reminder');
        }
    }
    async remove(reminderId) {
        try {
            const existingReminder = await this.findOne(reminderId);
            if (!existingReminder.success) {
                return { data: null, success: false };
            }
            await this.prisma.reminder.delete({
                where: { id: reminderId },
            });
            return { data: null, success: true };
        }
        catch (error) {
            console.error('Error deleting reminder:', error);
            throw new common_1.InternalServerErrorException('Could not delete reminder');
        }
    }
    async checkRemindersDueToday(userId) {
        try {
            const startOfToday = (0, date_fns_1.startOfDay)(new Date());
            const endOfToday = (0, date_fns_1.endOfDay)(new Date());
            const reminders = await this.prisma.reminder.findMany({
                where: {
                    userId,
                    dueDate: {
                        gte: startOfToday,
                        lte: endOfToday,
                    },
                },
            });
            for (const reminder of reminders) {
                await this.notification.createNotification({
                    userId: reminder.userId,
                    message: `Your reminder for "${reminder.note}" is due today.`,
                    type: 'Reminder',
                    priority: 'high',
                    actionButtonLabel: 'View Reminder',
                    actionButtonLink: `/reminders/${reminder.id}`,
                    relatedResourceLink: `/reminders/${reminder.id}`,
                    status: 'unread',
                });
            }
            return { data: reminders, success: true };
        }
        catch (error) {
            console.error('Error checking reminders due today:', error);
            throw new common_1.InternalServerErrorException('Could not check reminders due today');
        }
    }
};
exports.ReminderService = ReminderService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_8AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReminderService.prototype, "checkRemindersDueToday", null);
exports.ReminderService = ReminderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_service_1.NotificationService])
], ReminderService);
//# sourceMappingURL=reminder.service.js.map