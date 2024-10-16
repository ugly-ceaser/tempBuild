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
exports.JobMarketController = void 0;
const common_1 = require("@nestjs/common");
const job_service_1 = require("./job.service");
const jobDto_1 = require("../dto/jobDto");
const gaurd_1 = require("../auth/gaurd");
const guard_1 = require("../admin/guard");
const get_user_decorator_1 = require("../auth/decorator/get-user-decorator");
let JobMarketController = class JobMarketController {
    constructor(jobMarketService) {
        this.jobMarketService = jobMarketService;
    }
    async create(createJobDto, userId) {
        return this.jobMarketService.create(userId, createJobDto);
    }
    async findAll() {
        return this.jobMarketService.findAll();
    }
    async findOne(id) {
        return this.jobMarketService.findOne(id);
    }
    async update(id, updateJobDto) {
        return this.jobMarketService.update(id, updateJobDto);
    }
    async remove(id) {
        return this.jobMarketService.remove(id);
    }
};
exports.JobMarketController = JobMarketController;
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jobDto_1.CreateJobDto, String]),
    __metadata("design:returntype", Promise)
], JobMarketController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobMarketController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JobMarketController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(gaurd_1.JWTGaurd),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, jobDto_1.UpdateJobDto]),
    __metadata("design:returntype", Promise)
], JobMarketController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JobMarketController.prototype, "remove", null);
exports.JobMarketController = JobMarketController = __decorate([
    (0, common_1.Controller)('job-market'),
    __metadata("design:paramtypes", [job_service_1.JobMarketService])
], JobMarketController);
//# sourceMappingURL=job.contoller.js.map