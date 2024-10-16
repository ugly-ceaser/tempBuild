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
exports.HotDealController = void 0;
const common_1 = require("@nestjs/common");
const hotDeal_service_1 = require("./hotDeal.service");
let HotDealController = class HotDealController {
    constructor(hotDealService) {
        this.hotDealService = hotDealService;
    }
    async GetAll(userId, query) {
        return await this.hotDealService.GetAll(userId, query);
    }
    async filterDeals(filters, query) {
        return await this.hotDealService.filterDeals(filters, query);
    }
    async likeDeal(body) {
        const { userId, propertyId } = body;
        return await this.hotDealService.likeDeal(userId, propertyId);
    }
    async disLikeDeal(body) {
        const { userId, propertyId } = body;
        return await this.hotDealService.disLikeDeal(userId, propertyId);
    }
};
exports.HotDealController = HotDealController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], HotDealController.prototype, "GetAll", null);
__decorate([
    (0, common_1.Get)('/filter'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HotDealController.prototype, "filterDeals", null);
__decorate([
    (0, common_1.Post)('/like'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotDealController.prototype, "likeDeal", null);
__decorate([
    (0, common_1.Post)('/dislike'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotDealController.prototype, "disLikeDeal", null);
exports.HotDealController = HotDealController = __decorate([
    (0, common_1.Controller)("hotDeal"),
    __metadata("design:paramtypes", [hotDeal_service_1.HotDealService])
], HotDealController);
//# sourceMappingURL=hotDeal.controller.js.map