import { AdminAuthService, AdminJobsService, AdminReportsService, AdminReviewsService } from "./services";
import { AdminLoginDto, AdminRegisterDto } from './dto/adminDto';
import { CreateJobDto, UpdateJobDto } from '../dto/jobDto';
export declare class AdminController {
    private readonly adminAuthService;
    private readonly adminReportsService;
    private readonly adminJobsService;
    private readonly adminReviewsService;
    constructor(adminAuthService: AdminAuthService, adminReportsService: AdminReportsService, adminJobsService: AdminJobsService, adminReviewsService: AdminReviewsService);
    login(adminDto: AdminLoginDto): Promise<{
        data: {
            roles: {
                name: string;
                id: string;
            }[];
        } & {
            email: string;
            password: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        access_token: string;
    }>;
    register(adminDto: AdminRegisterDto): Promise<{
        data: {
            roles: {
                name: string;
                id: string;
            }[];
        } & {
            email: string;
            password: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        access_token: string;
    }>;
    getAllReports(page?: number, pageSize?: number): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        comment: string | null;
        reportCategory: string;
        reportPriority: string;
        reportableType: string;
    }[]>;
    getReportById(id: number): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        comment: string | null;
        reportCategory: string;
        reportPriority: string;
        reportableType: string;
    }>;
    deleteReport(id: string): Promise<void>;
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
    getAllReviews(page?: number, pageSize?: number): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        realEstateId: number;
        rating: number;
        comment: string | null;
        propertyPictures: string[];
    }[]>;
    getReviewById(id: number): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        realEstateId: number;
        rating: number;
        comment: string | null;
        propertyPictures: string[];
    }>;
    deleteReview(id: number): Promise<{
        userId: string;
        id: number;
        createdAt: Date;
        realEstateId: number;
        rating: number;
        comment: string | null;
        propertyPictures: string[];
    }>;
}
