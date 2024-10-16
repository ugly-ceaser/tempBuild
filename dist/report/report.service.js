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
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportService = class ReportService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createReportDto) {
        const { userId, ...rest } = createReportDto;
        try {
            const report = await this.prisma.report.create({
                data: {
                    ...rest,
                    user: { connect: { id: userId } },
                },
            });
            return { data: report, success: true };
        }
        catch (error) {
            console.error('Error creating report:', error);
            throw new common_1.InternalServerErrorException('Failed to create report');
        }
    }
    async findAll() {
        try {
            const reports = await this.prisma.report.findMany();
            return { data: reports, success: true };
        }
        catch (error) {
            console.error('Error fetching reports:', error);
            throw new common_1.InternalServerErrorException('Failed to fetch reports');
        }
    }
    async findOne(id) {
        try {
            const report = await this.prisma.report.findUnique({
                where: { id },
            });
            if (!report) {
                throw new common_1.NotFoundException(`Report with ID ${id} not found`);
            }
            return { data: report, success: true };
        }
        catch (error) {
            console.error('Error fetching report:', error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to fetch report');
        }
    }
    async update(id, updateReportDto) {
        try {
            const report = await this.findOne(id);
            const updatedReport = await this.prisma.report.update({
                where: { id },
                data: updateReportDto,
            });
            return { data: updatedReport, success: true };
        }
        catch (error) {
            console.error('Error updating report:', error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to update report');
        }
    }
    async remove(id) {
        try {
            const report = await this.findOne(id);
            await this.prisma.report.delete({
                where: { id },
            });
            return { data: null, success: true };
        }
        catch (error) {
            console.error('Error deleting report:', error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to delete report');
        }
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportService);
//# sourceMappingURL=report.service.js.map