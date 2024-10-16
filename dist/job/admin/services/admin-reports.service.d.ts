import { PrismaService } from '../../prisma/prisma.service';
import { Report } from '@prisma/client';
export declare class AdminReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllReports(page?: number, pageSize?: number): Promise<Report[]>;
    getReportById(id: number): Promise<Report>;
    deleteReport(id: number): Promise<void>;
}
