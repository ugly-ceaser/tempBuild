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
exports.VerificationController = void 0;
const common_1 = require("@nestjs/common");
const verification_service_1 = require("./verification.service");
const kycDto_1 = require("../dto/kycDto");
const get_user_decorator_1 = require("../auth/decorator/get-user-decorator");
const gaurd_1 = require("../auth/gaurd");
let VerificationController = class VerificationController {
    constructor(verificationService) {
        this.verificationService = verificationService;
    }
    async create(userId, createUserKycDto) {
        createUserKycDto.userId = userId;
        return this.verificationService.create(createUserKycDto);
    }
    async findOne(userId) {
        console.log(`GET /verification called with UserID: ${userId}`);
        return this.verificationService.findOne(userId);
    }
    async update(userId, updateUserKycDto) {
        return this.verificationService.update(userId, updateUserKycDto);
    }
    async remove(userId) {
        return this.verificationService.remove(userId);
    }
    testRoute() {
        return 'Verification route works!';
    }
};
exports.VerificationController = VerificationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, kycDto_1.CreateUserKycDto]),
    __metadata("design:returntype", Promise)
], VerificationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VerificationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, kycDto_1.UpdateUserKycDto]),
    __metadata("design:returntype", Promise)
], VerificationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, get_user_decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VerificationController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "testRoute", null);
exports.VerificationController = VerificationController = __decorate([
    (0, common_1.UseGuards)(gaurd_1.JWTGaurd),
    (0, common_1.Controller)('verification'),
    __metadata("design:paramtypes", [verification_service_1.VerificationService])
], VerificationController);
//# sourceMappingURL=verification.controller.js.map