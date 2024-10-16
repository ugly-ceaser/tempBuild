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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const gaurd_1 = require("../auth/gaurd");
const review_service_1 = require("./review.service");
const createReviewDto_1 = require("../dto/reviewDto/createReviewDto");
const editReviewDto_1 = require("../dto/reviewDto/editReviewDto");
const get_user_decorator_1 = require("../auth/decorator/get-user-decorator");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    createReview(createReviewDto, userId) {
        return this.reviewService.create(createReviewDto, userId);
    }
    updateReview(reviewId, userId, updateReviewDto) {
        return this.reviewService.update(reviewId, userId, updateReviewDto);
    }
    deleteReview(reviewId, userId) {
        return this.reviewService.delete(reviewId, userId);
    }
    getReviewsForRealEstate(realEstateId, page = 1, limit = 10) {
        if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
            throw new common_1.BadRequestException('Invalid page or limit parameter');
        }
        return this.reviewService.getReviewsForRealEstate(realEstateId, page, limit);
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createReviewDto_1.CreateReviewDto, String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, get_user_decorator_1.GetUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, editReviewDto_1.UpdateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "updateReview", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, get_user_decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "deleteReview", null);
__decorate([
    (0, common_1.Get)('real-estate/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "getReviewsForRealEstate", null);
exports.ReviewController = ReviewController = __decorate([
    (0, common_1.UseGuards)(gaurd_1.JWTGaurd),
    (0, common_1.Controller)('reviews'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map