import { PrismaService } from '../../prisma/prisma.service';
import { Review } from '@prisma/client';
export declare class AdminReviewsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllReviews(skip?: number, take?: number): Promise<Review[]>;
    getReviewById(id: number): Promise<Review>;
    deleteReview(id: number): Promise<Review>;
}
