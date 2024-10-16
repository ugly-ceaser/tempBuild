import { JobMarketService } from './job.service';
import { CreateJobDto, UpdateJobDto } from '../dto/jobDto';
export declare class JobMarketController {
    private readonly jobMarketService;
    constructor(jobMarketService: JobMarketService);
    create(createJobDto: CreateJobDto, userId: string): Promise<{
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
