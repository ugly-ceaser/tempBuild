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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("./services");
const adminDto_1 = require("./dto/adminDto");
const guard_1 = require("./guard");
const decorator_1 = require("./decorator");
const jobDto_1 = require("../dto/jobDto");
let AdminController = class AdminController {
    constructor(adminAuthService, adminReportsService, adminJobsService, adminReviewsService) {
        this.adminAuthService = adminAuthService;
        this.adminReportsService = adminReportsService;
        this.adminJobsService = adminJobsService;
        this.adminReviewsService = adminReviewsService;
    }
    async login(adminDto) {
        return this.adminAuthService.login(adminDto);
    }
    async register(adminDto) {
        return this.adminAuthService.register(adminDto);
    }
    async getAllReports(page = 1, pageSize = 10) {
        return this.adminReportsService.getAllReports(page, pageSize);
    }
    async getReportById(id) {
        return this.adminReportsService.getReportById(id);
    }
    async deleteReport(id) {
        let ID = parseInt(id);
        return this.adminReportsService.deleteReport(ID);
    }
    async createJob(createJobDto) {
        return this.adminJobsService.createJob(createJobDto);
    }
    async getJobs(page = 1, pageSize = 10) {
        return this.adminJobsService.getJobs(page, pageSize);
    }
    async getJobById(id) {
        return this.adminJobsService.getJobById(id);
    }
    async updateJob(id, updateJobDto) {
        return this.adminJobsService.updateJob(id, updateJobDto);
    }
    async deleteJob(id) {
        return this.adminJobsService.deleteJob(id);
    }
    async getAllReviews(page = 1, pageSize = 10) {
        return this.adminReviewsService.getAllReviews(page, pageSize);
    }
    async getReviewById(id) {
        return this.adminReviewsService.getReviewById(id);
    }
    async deleteReview(id) {
        return this.adminReviewsService.deleteReview(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminDto_1.AdminLoginDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adminDto_1.AdminRegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_REPORTS'),
    (0, common_1.Get)('reports'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllReports", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_REPORTS'),
    (0, common_1.Get)('reports/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getReportById", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_REPORTS'),
    (0, common_1.Delete)('reports/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteReport", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_JOBS'),
    (0, common_1.Post)('jobs'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jobDto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createJob", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_JOBS'),
    (0, common_1.Get)('jobs'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getJobs", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_JOBS'),
    (0, common_1.Get)('jobs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getJobById", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_JOBS'),
    (0, common_1.Put)('jobs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, jobDto_1.UpdateJobDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateJob", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_JOBS'),
    (0, common_1.Delete)('jobs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteJob", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_REVIEWS'),
    (0, common_1.Get)('reviews'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllReviews", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_REVIEWS'),
    (0, common_1.Get)('reviews/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getReviewById", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.AdminJWTGuard, guard_1.RolesGuard),
    (0, decorator_1.Roles)('ADMIN_REVIEWS'),
    (0, common_1.Delete)('reviews/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteReview", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [services_1.AdminAuthService,
        services_1.AdminReportsService,
        services_1.AdminJobsService,
        services_1.AdminReviewsService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map