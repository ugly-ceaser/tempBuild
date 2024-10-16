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
exports.AdminJobsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdminJobsService = class AdminJobsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createJob(createJobDto) {
        const { companyName, jobTitle, jobDescription, keyResponsibilities, qualifications, workArrangement, applicationUrl } = createJobDto;
        const job = await this.prisma.jobMarket.create({
            data: {
                companyName,
                jobTitle,
                jobDescription,
                keyResponsibilities,
                qualifications,
                workArrangement,
                applicationUrl,
            },
        });
        return job;
    }
    async getJobs(page = 1, pageSize = 10) {
        const take = pageSize;
        const skip = (page - 1) * pageSize;
        const jobs = await this.prisma.jobMarket.findMany({
            skip,
            take,
            orderBy: {
                createdAt: 'desc',
            },
        });
        const totalJobs = await this.prisma.jobMarket.count();
        return {
            jobs,
            total: totalJobs,
            page,
            pageSize,
            totalPages: Math.ceil(totalJobs / pageSize),
        };
    }
    async getJobById(id) {
        const job = await this.prisma.jobMarket.findUnique({
            where: { id },
        });
        if (!job) {
            throw new common_1.NotFoundException(`Job with ID ${id} not found`);
        }
        return job;
    }
    async updateJob(id, updateJobDto) {
        const { companyName, jobTitle, jobDescription, keyResponsibilities, qualifications, workArrangement, applicationUrl } = updateJobDto;
        const job = await this.prisma.jobMarket.update({
            where: { id },
            data: {
                companyName,
                jobTitle,
                jobDescription,
                keyResponsibilities,
                qualifications,
                workArrangement,
                applicationUrl,
            },
        });
        return job;
    }
    async deleteJob(id) {
        const job = await this.prisma.jobMarket.delete({
            where: { id },
        });
        return job;
    }
};
exports.AdminJobsService = AdminJobsService;
exports.AdminJobsService = AdminJobsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminJobsService);
//# sourceMappingURL=admin-jobs.service.js.map