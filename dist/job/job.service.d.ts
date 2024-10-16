import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto, UpdateJobDto } from '../dto/jobDto';
export declare class JobMarketService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, createJobDto: CreateJobDto): Promise<{
        data: any;
        success: boolean;
    }>;
    findAll(): Promise<{
        data: any[];
        success: boolean;
    }>;
    findOne(id: number): Promise<{
        data: any;
        success: boolean;
    }>;
    update(id: number, updateJobDto: UpdateJobDto): Promise<{
        data: any;
        success: boolean;
    }>;
    remove(id: number): Promise<{
        data: any;
        success: boolean;
    }>;
}
