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
var ReminderSchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderSchedulerService = void 0;
const common_1 = require("@nestjs/common");
const cron = require("node-cron");
const prisma_service_1 = require("../prisma/prisma.service");
let ReminderSchedulerService = ReminderSchedulerService_1 = class ReminderSchedulerService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(ReminderSchedulerService_1.name);
    }
    start() {
        cron.schedule('*/5 * * * *', async () => {
            const now = new Date();
            try {
                const reminders = await this.prisma.reminder.findMany({
                    where: {
                        time: { lte: now },
                        status: false,
                    },
                });
                for (const reminder of reminders) {
                    this.logger.log(`Reminder triggered for: ${reminder.id}`);
                    await this.prisma.reminder.update({
                        where: { id: reminder.id },
                        data: { status: true },
                    });
                }
            }
            catch (error) {
                this.logger.error('Error checking reminders', error.stack);
            }
        });
    }
};
exports.ReminderSchedulerService = ReminderSchedulerService;
exports.ReminderSchedulerService = ReminderSchedulerService = ReminderSchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReminderSchedulerService);
//# sourceMappingURL=reminder.schedule.service.js.map