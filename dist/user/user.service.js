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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUserInfo(dto, userId) {
        try {
            const userExists = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            if (!userExists) {
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            const newUserInfo = await this.prisma.userInfo.create({
                data: {
                    fullName: dto.fullName,
                    profilePicture: dto.profilePicture,
                    address: dto.address,
                    userType: dto.userType,
                    userId: userExists.id,
                },
            });
            return { data: newUserInfo, success: true };
        }
        catch (error) {
            console.error('Error creating user info:', error);
            throw new common_1.InternalServerErrorException('Failed to create user info');
        }
    }
    async getUserProfile(userId) {
        try {
            const userInfo = await this.prisma.userInfo.findUnique({
                where: { userId: userId },
            });
            if (!userInfo) {
                throw new common_1.NotFoundException(`UserInfo for user ID ${userId} not found`);
            }
            return { data: userInfo, success: true };
        }
        catch (error) {
            console.error('Error fetching user profile:', error);
            throw new common_1.InternalServerErrorException('Failed to fetch user profile');
        }
    }
    async updateUserProfile(userId, dto) {
        try {
            const existingUserInfo = await this.prisma.userInfo.findUnique({
                where: { userId: userId },
            });
            if (!existingUserInfo) {
                throw new common_1.NotFoundException(`UserInfo for user ID ${userId} not found`);
            }
            const updatedUserInfo = await this.prisma.userInfo.update({
                where: { userId: userId },
                data: {
                    fullName: dto.fullName,
                    profilePicture: dto.profilePicture,
                    address: dto.address,
                    userType: dto.userType,
                },
            });
            return { data: updatedUserInfo, success: true };
        }
        catch (error) {
            console.error('Error updating user profile:', error);
            throw new common_1.InternalServerErrorException('Failed to update user profile');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map