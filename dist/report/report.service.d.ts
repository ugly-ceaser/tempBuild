import { PrismaService } from '../prisma/prisma.service';
import { CreateReportDto, UpdateReportDto } from '../dto/reportDto';
export declare class ReportService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createReportDto: CreateReportDto): Promise<{
        data: {
            userId: string;
            id: number;
            createdAt: Date;
            comment: string | null;
            reportCategory: string;
            reportPriority: string;
            reportableType: string;
        };
        success: boolean;
    }>;
    findAll(): Promise<{
        data: {
            userId: string;
            id: number;
            createdAt: Date;
            comment: string | null;
            reportCategory: string;
            reportPriority: string;
            reportableType: string;
        }[];
        success: boolean;
    }>;
    findOne(id: number): Promise<{
        data: {
            userId: string;
            id: number;
            createdAt: Date;
            comment: string | null;
            reportCategory: string;
            reportPriority: string;
            reportableType: string;
        };
        success: boolean;
    }>;
    update(id: number, updateReportDto: UpdateReportDto): Promise<{
        data: {
            userId: string;
            id: number;
            createdAt: Date;
            comment: string | null;
            reportCategory: string;
            reportPriority: string;
            reportableType: string;
        };
        success: boolean;
    }>;
    remove(id: number): Promise<{
        data: any;
        success: boolean;
    }>;
}
