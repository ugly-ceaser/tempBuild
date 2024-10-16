import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from '../dto/reviewDto/createReviewDto';
import { UpdateReviewDto } from '../dto/reviewDto/editReviewDto';
import { Review } from '@prisma/client';
export declare class ReviewService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createReviewDto: CreateReviewDto, userId: string): Promise<{
        data: Review | null;
        success: boolean;
    }>;
    update(reviewId: number, userId: string, updateReviewDto: UpdateReviewDto): Promise<{
        data: Review | null;
        success: boolean;
    }>;
    delete(reviewId: number, userId: string): Promise<{
        data: Review | null;
        success: boolean;
    }>;
    getReviewsForRealEstate(realEstateId: number, page?: number, limit?: number): Promise<{
        data: Review[];
        images: string[];
        averageRate: number;
        total: number;
        page: number;
        limit: number;
        success: boolean;
    }>;
}
