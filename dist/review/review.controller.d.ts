import { ReviewService } from './review.service';
import { CreateReviewDto } from '../dto/reviewDto/createReviewDto';
import { UpdateReviewDto } from '../dto/reviewDto/editReviewDto';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    createReview(createReviewDto: CreateReviewDto, userId: string): Promise<{
        data: import(".prisma/client").Review | null;
        success: boolean;
    }>;
    updateReview(reviewId: number, userId: string, updateReviewDto: UpdateReviewDto): Promise<{
        data: import(".prisma/client").Review | null;
        success: boolean;
    }>;
    deleteReview(reviewId: number, userId: string): Promise<{
        data: import(".prisma/client").Review | null;
        success: boolean;
    }>;
    getReviewsForRealEstate(realEstateId: number, page?: number, limit?: number): Promise<{
        data: import(".prisma/client").Review[];
        images: string[];
        averageRate: number;
        total: number;
        page: number;
        limit: number;
        success: boolean;
    }>;
}
