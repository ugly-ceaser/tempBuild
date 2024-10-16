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
exports.RealEstateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RealEstateService = class RealEstateService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRealEstateDto) {
        try {
            const { userId, ...rest } = createRealEstateDto;
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            const realEstate = await this.prisma.realEstate.create({
                data: {
                    ...rest,
                    user: { connect: { id: userId } },
                },
            });
            return { data: realEstate, success: true };
        }
        catch (error) {
            console.error('Error creating real estate:', error);
            throw new common_1.InternalServerErrorException('An error occurred while creating the real estate property');
        }
    }
    async findAll({ page = 1, limit = 10 } = {}) {
        try {
            const skip = (page - 1) * limit;
            const [data, total] = await this.prisma.$transaction([
                this.prisma.realEstate.findMany({
                    skip,
                    take: limit,
                }),
                this.prisma.realEstate.count(),
            ]);
            return {
                data: {
                    items: data,
                    total,
                    page,
                    limit,
                },
                success: true
            };
        }
        catch (error) {
            console.error('Error fetching real estate properties:', error);
            throw new common_1.InternalServerErrorException('An error occurred while retrieving real estate properties');
        }
    }
    async findOne(userId, propertyId) {
        try {
            const realEstate = await this.prisma.realEstate.findFirst({
                where: {
                    id: propertyId,
                    userId,
                },
            });
            if (!realEstate) {
                throw new common_1.NotFoundException('Property not found');
            }
            return { data: realEstate, success: true };
        }
        catch (error) {
            console.error('Error finding real estate:', error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An error occurred while retrieving the real estate property');
        }
    }
    async update(userId, propertyId, updateRealEstateDto) {
        try {
            const realEstate = await this.prisma.realEstate.findFirst({
                where: {
                    id: propertyId,
                    userId,
                },
            });
            if (!realEstate) {
                throw new common_1.NotFoundException('Property not found');
            }
            const updatedRealEstate = await this.prisma.realEstate.update({
                where: { id: propertyId },
                data: updateRealEstateDto,
            });
            return { data: updatedRealEstate, success: true };
        }
        catch (error) {
            console.error('Error updating real estate:', error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An error occurred while updating the real estate property');
        }
    }
    async remove(userId, propertyId) {
        try {
            const realEstate = await this.prisma.realEstate.findFirst({
                where: {
                    id: propertyId,
                    userId,
                },
            });
            if (!realEstate) {
                throw new common_1.NotFoundException('Property not found');
            }
            await this.prisma.realEstate.delete({
                where: { id: propertyId },
            });
            return { data: null, success: true };
        }
        catch (error) {
            console.error('Error deleting real estate:', error);
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An error occurred while deleting the real estate property');
        }
    }
    async replaceImage(userId, propertyId, replaceImageDto) {
        try {
            const realEstate = await this.prisma.realEstate.findFirst({
                where: {
                    id: propertyId,
                    userId,
                },
            });
            if (!realEstate) {
                throw new common_1.NotFoundException('Property not found');
            }
            if (replaceImageDto.imageIndex < 0 || replaceImageDto.imageIndex >= realEstate.pictures.length) {
                throw new common_1.ForbiddenException('Image index out of bounds');
            }
            const updatedPictures = realEstate.pictures.map((picture, index) => index === replaceImageDto.imageIndex ? replaceImageDto.newImageUrl : picture);
            const updatedRealEstate = await this.prisma.realEstate.update({
                where: { id: propertyId },
                data: { pictures: updatedPictures },
            });
            return { data: updatedRealEstate, success: true };
        }
        catch (error) {
            console.error('Error replacing real estate image:', error);
            if (error instanceof common_1.NotFoundException || error instanceof common_1.ForbiddenException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An error occurred while replacing the real estate image');
        }
    }
    async searchRealEstates(userId, { category, numberOfRooms, state, lga, page = 1, limit = 10 }) {
        try {
            const skip = (page - 1) * limit;
            const searchConditions = { userId };
            if (category)
                searchConditions.category = category;
            if (numberOfRooms)
                searchConditions.numberOfRooms = numberOfRooms;
            if (state)
                searchConditions.state = state;
            if (lga)
                searchConditions.lga = lga;
            const [data, total] = await this.prisma.$transaction([
                this.prisma.realEstate.findMany({
                    where: searchConditions,
                    skip,
                    take: limit,
                }),
                this.prisma.realEstate.count({
                    where: searchConditions,
                }),
            ]);
            return { data: { items: data, total, page, limit }, success: true };
        }
        catch (error) {
            console.error('Error searching real estate:', error);
            throw new common_1.InternalServerErrorException('An error occurred while searching for real estate properties');
        }
    }
};
exports.RealEstateService = RealEstateService;
exports.RealEstateService = RealEstateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RealEstateService);
//# sourceMappingURL=realEstate.service.js.map