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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReviewService = class ReviewService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createReviewDto, userId) {
        const { realEstateId, rating, comment } = createReviewDto;
        const existingReview = await this.prisma.review.findUnique({
            where: {
                userId_realEstateId: {
                    userId,
                    realEstateId
                }
            }
        });
        if (existingReview) {
            const updatedReview = await this.prisma.review.update({
                where: {
                    userId_realEstateId: {
                        userId,
                        realEstateId
                    }
                },
                data: {
                    comment: comment.trim(),
                    rating,
                },
            });
            return { data: updatedReview, success: true };
        }
        try {
            const newReview = await this.prisma.review.create({
                data: {
                    userId,
                    realEstateId,
                    rating,
                    comment: comment.trim(),
                },
            });
            return { data: newReview, success: true };
        }
        catch (error) {
            console.error('Error creating review:', error);
            throw new common_1.InternalServerErrorException('Could not create review');
        }
    }
    async update(reviewId, userId, updateReviewDto) {
        try {
            const review = await this.prisma.review.findUnique({ where: { id: reviewId } });
            if (!review) {
                throw new common_1.NotFoundException(`Review with ID ${reviewId} not found`);
            }
            if (review.userId !== userId) {
                throw new common_1.ForbiddenException(`You are not allowed to update this review`);
            }
            const updatedReview = await this.prisma.review.update({
                where: { id: reviewId },
                data: {
                    rating: updateReviewDto.rating,
                    comment: updateReviewDto.comment,
                    propertyPictures: updateReviewDto.propertyPictures,
                },
            });
            return { data: updatedReview, success: true };
        }
        catch (error) {
            console.error('Error updating review:', error);
            if (error instanceof common_1.NotFoundException || error instanceof common_1.ForbiddenException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Could not update review');
        }
    }
    async delete(reviewId, userId) {
        try {
            const review = await this.prisma.review.findUnique({ where: { id: reviewId } });
            if (!review) {
                throw new common_1.NotFoundException(`Review with ID ${reviewId} not found`);
            }
            if (review.userId !== userId) {
                throw new common_1.ForbiddenException(`You are not allowed to delete this review`);
            }
            await this.prisma.review.delete({ where: { id: reviewId } });
            return { data: null, success: true };
        }
        catch (error) {
            console.error('Error deleting review:', error);
            if (error instanceof common_1.NotFoundException || error instanceof common_1.ForbiddenException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Could not delete review');
        }
    }
    async getReviewsForRealEstate(realEstateId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        try {
            const [data, total] = await this.prisma.$transaction([
                this.prisma.review.findMany({
                    where: { realEstateId },
                    skip: offset,
                    take: limit,
                }),
                this.prisma.review.count({ where: { realEstateId } }),
            ]);
            const realEstateData = await this.prisma.realEstate.findUnique({
                where: { id: realEstateId }
            });
            const images = realEstateData?.pictures || [];
            const ratings = data.map(x => x.rating);
            let averageRate = 0;
            if (ratings.length > 0) {
                const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
                averageRate = totalRating / ratings.length;
            }
            return {
                data: data,
                total: total,
                page: page,
                limit: limit,
                images: images,
                averageRate: averageRate,
                success: true
            };
        }
        catch (error) {
            console.error('Error fetching reviews for real estate:', error);
            throw new common_1.InternalServerErrorException('Could not fetch reviews for real estate');
        }
    }
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewService);
//# sourceMappingURL=review.service.js.map