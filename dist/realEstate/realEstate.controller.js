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
exports.RealEstateController = void 0;
const common_1 = require("@nestjs/common");
const gaurd_1 = require("../auth/gaurd");
const realEstate_service_1 = require("./realEstate.service");
const get_user_decorator_1 = require("../auth/decorator/get-user-decorator");
const index_1 = require("../dto/realEstateDto/index");
let RealEstateController = class RealEstateController {
    constructor(realEstateService) {
        this.realEstateService = realEstateService;
    }
    async createRealEstate(createRealEstateDto, userId) {
        createRealEstateDto.userId = userId;
        return this.realEstateService.create(createRealEstateDto);
    }
    async getRealEstate(userId, page = 1, limit = 10) {
        if (page <= 0 || limit <= 0) {
            throw new common_1.BadRequestException('Page and limit must be positive numbers');
        }
        return await this.realEstateService.findAll({ page, limit });
    }
    async getRealEstateById(userId, propertyId) {
        return this.realEstateService.findOne(userId, propertyId);
    }
    async updateRealEstate(userId, propertyId, updateRealEstateDto) {
        return this.realEstateService.update(userId, propertyId, updateRealEstateDto);
    }
    async deleteRealEstate(userId, propertyId) {
        return this.realEstateService.remove(userId, propertyId);
    }
    async replaceImage(userId, propertyId, replaceImageDto) {
        return this.realEstateService.replaceImage(userId, propertyId, replaceImageDto);
    }
    async searchRealEstate(userId, category, numberOfRooms, state, lga, page = 1, limit = 10) {
        if (page <= 0 || limit <= 0) {
            throw new common_1.BadRequestException('Page and limit must be positive numbers');
        }
        return this.realEstateService.searchRealEstates(userId, { category, numberOfRooms, state, lga, page, limit });
    }
};
exports.RealEstateController = RealEstateController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.CreateRealEstateDto, String]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "createRealEstate", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "getRealEstate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "getRealEstateById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, index_1.UpdateRealEstateDto]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "updateRealEstate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "deleteRealEstate", null);
__decorate([
    (0, common_1.Patch)(':id/replace-image'),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, index_1.ReplaceRealEstateImgDto]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "replaceImage", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Query)('category')),
    __param(2, (0, common_1.Query)('numberOfRooms', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Query)('state')),
    __param(4, (0, common_1.Query)('lga')),
    __param(5, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(6, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], RealEstateController.prototype, "searchRealEstate", null);
exports.RealEstateController = RealEstateController = __decorate([
    (0, common_1.UseGuards)(gaurd_1.JWTGaurd),
    (0, common_1.Controller)('realEstate'),
    __metadata("design:paramtypes", [realEstate_service_1.RealEstateService])
], RealEstateController);
//# sourceMappingURL=realEstate.controller.js.map