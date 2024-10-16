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
exports.JobMarketService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let JobMarketService = class JobMarketService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, createJobDto) {
        try {
            const job = await this.prisma.jobMarket.create({
                data: {
                    ...createJobDto,
                    userId,
                },
            });
            return { data: job, success: true };
        }
        catch (error) {
            console.error('Error creating job:', error);
            throw new common_1.InternalServerErrorException('Failed to create job');
        }
    }
    async findAll() {
        try {
            const jobs = await this.prisma.jobMarket.findMany();
            return { data: jobs, success: true };
        }
        catch (error) {
            console.error('Error finding jobs:', error);
            throw new common_1.InternalServerErrorException('Failed to retrieve jobs');
        }
    }
    async findOne(id) {
        try {
            const job = await this.prisma.jobMarket.findUnique({ where: { id } });
            if (!job) {
                throw new common_1.NotFoundException('Job not found');
            }
            return { data: job, success: true };
        }
        catch (error) {
            console.error('Error finding job:', error);
            throw new common_1.InternalServerErrorException('Failed to retrieve job');
        }
    }
    async update(id, updateJobDto) {
        try {
            const job = await this.prisma.jobMarket.update({
                where: { id },
                data: updateJobDto,
            });
            return { data: job, success: true };
        }
        catch (error) {
            console.error('Error updating job:', error);
            throw new common_1.InternalServerErrorException('Failed to update job');
        }
    }
    async remove(id) {
        try {
            const job = await this.prisma.jobMarket.delete({ where: { id } });
            return { data: job, success: true };
        }
        catch (error) {
            console.error('Error deleting job:', error);
            throw new common_1.InternalServerErrorException('Failed to delete job');
        }
    }
};
exports.JobMarketService = JobMarketService;
exports.JobMarketService = JobMarketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JobMarketService);
//# sourceMappingURL=job.service.js.map