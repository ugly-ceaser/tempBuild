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
exports.VerificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VerificationService = class VerificationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserKycDto) {
        const { userId, ...rest } = createUserKycDto;
        try {
            const kyc = await this.prisma.userKyc.create({
                data: {
                    ...rest,
                    user: { connect: { id: userId } },
                },
            });
            await this.prisma.user.update({
                where: { id: userId },
                data: { isVerified: true },
            });
            return { data: kyc, success: true };
        }
        catch (error) {
            console.error('Error creating KYC record:', error);
            throw new common_1.InternalServerErrorException('Failed to create KYC record');
        }
    }
    async findOne(userId) {
        try {
            console.log('Finding KYC for userId:', userId);
            const userKyc = await this.prisma.userKyc.findUnique({
                where: { userId },
            });
            if (!userKyc) {
                throw new common_1.NotFoundException(`UserKyc with userId ${userId} not found`);
            }
            console.log('Found userKyc:', userKyc);
            return { data: userKyc, success: true };
        }
        catch (error) {
            console.error('Error finding KYC record:', error);
            throw new common_1.InternalServerErrorException('Failed to find KYC record');
        }
    }
    async update(userId, updateUserKycDto) {
        try {
            await this.findOne(userId);
            const updatedUserKyc = await this.prisma.userKyc.update({
                where: { userId },
                data: updateUserKycDto,
            });
            return { data: updatedUserKyc, success: true };
        }
        catch (error) {
            console.error('Error updating KYC record:', error);
            throw new common_1.InternalServerErrorException('Failed to update KYC record');
        }
    }
    async remove(userId) {
        try {
            await this.findOne(userId);
            const deletedUserKyc = await this.prisma.userKyc.delete({
                where: { userId },
            });
            return { data: deletedUserKyc, success: true };
        }
        catch (error) {
            console.error('Error deleting KYC record:', error);
            throw new common_1.InternalServerErrorException('Failed to delete KYC record');
        }
    }
};
exports.VerificationService = VerificationService;
exports.VerificationService = VerificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VerificationService);
//# sourceMappingURL=verification.service.js.map