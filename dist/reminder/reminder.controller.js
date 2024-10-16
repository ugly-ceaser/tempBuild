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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderController = void 0;
const common_1 = require("@nestjs/common");
const reminder_service_1 = require("./reminder.service");
const reminder_1 = require("../dto/reminder");
let ReminderController = class ReminderController {
    constructor(reminderService) {
        this.reminderService = reminderService;
    }
    async create(createReminderDto) {
        const result = await this.reminderService.create(createReminderDto);
        return result;
    }
    async findAll(userId) {
        const result = await this.reminderService.findAll(userId);
        return result;
    }
    async findOne(id) {
        const result = await this.reminderService.findOne(id);
        return result;
    }
    async update(id, updateReminderDto) {
        const result = await this.reminderService.update(id, updateReminderDto);
        return result;
    }
    async remove(id) {
        const result = await this.reminderService.remove(id);
        return result;
    }
};
exports.ReminderController = ReminderController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reminder_1.CreateReminderDto]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, reminder_1.UpdateReminderDto]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReminderController.prototype, "remove", null);
exports.ReminderController = ReminderController = __decorate([
    (0, common_1.Controller)('reminders'),
    __metadata("design:paramtypes", [reminder_service_1.ReminderService])
], ReminderController);
//# sourceMappingURL=reminder.controller.js.map