import { PrismaService } from '../../prisma/prisma.service';
import { CreateJobDto, UpdateJobDto } from '../../dto/jobDto/index';
export declare class AdminJobsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createJob(createJobDto: CreateJobDto): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        keyResponsibilities: string[];
        qualifications: string[];
        workArrangement: string;
        applicationUrl: string;
    }>;
    getJobs(page?: number, pageSize?: number): Promise<{
        jobs: {
            userId: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            companyName: string;
            jobTitle: string;
            jobDescription: string;
            keyResponsibilities: string[];
            qualifications: string[];
            workArrangement: string;
            applicationUrl: string;
        }[];
        total: number;
        page: number;
        pageSize: number;
        totalPages: number;
    }>;
    getJobById(id: number): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        keyResponsibilities: string[];
        qualifications: string[];
        workArrangement: string;
        applicationUrl: string;
    }>;
    updateJob(id: number, updateJobDto: UpdateJobDto): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        keyResponsibilities: string[];
        qualifications: string[];
        workArrangement: string;
        applicationUrl: string;
    }>;
    deleteJob(id: number): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        keyResponsibilities: string[];
        qualifications: string[];
        workArrangement: string;
        applicationUrl: string;
    }>;
}
