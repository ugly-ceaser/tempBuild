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
exports.HotDealService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HotDealService = class HotDealService {
    constructor(prisma) {
        this.prisma = prisma;
        this.MAX_PAGINATION_LIMIT = 100;
    }
    async GetAll(userId, { page = 1, limit = 10 } = {}) {
        limit = Math.min(limit, this.MAX_PAGINATION_LIMIT);
        const skip = (page - 1) * limit;
        try {
            const userInterest = await this.prisma.realEstateInterest.findUnique({
                where: { userId },
            });
            if (!userInterest) {
                throw new common_1.NotFoundException(`No real estate interest found for user ${userId}`);
            }
            const { lga, state, country } = userInterest;
            const [data, total] = await this.prisma.$transaction([
                this.prisma.realEstate.findMany({
                    where: {
                        OR: [
                            { lga: { in: lga } },
                            { state: { in: state } },
                            { country: { in: country } },
                        ],
                    },
                    skip,
                    take: limit,
                }),
                this.prisma.realEstate.count({
                    where: {
                        OR: [
                            { lga: { in: lga } },
                            { state: { in: state } },
                            { country: { in: country } },
                        ],
                    },
                }),
            ]);
            return { data: { items: data, total, page, limit }, success: true };
        }
        catch (error) {
            console.error('Error fetching hot deals based on user interest:', error);
            throw new common_1.InternalServerErrorException('An error occurred while fetching hot deals');
        }
    }
    async disLikeDeal(userId, propertyId) {
        try {
            const realEstate = await this.prisma.realEstate.findUnique({
                where: { id: propertyId },
                include: { user: true },
            });
            if (!realEstate) {
                throw new common_1.NotFoundException(`Real estate property with ID ${propertyId} not found`);
            }
            const userInterest = await this.prisma.realEstateInterest.findUnique({
                where: { userId },
            });
            if (!userInterest) {
                throw new common_1.NotFoundException(`No real estate interest found for user ${userId}`);
            }
            await this.prisma.realEstateInterest.update({
                where: { userId },
                data: {
                    state: { set: userInterest.state.filter(s => s !== realEstate.state) },
                    lga: { set: userInterest.lga.filter(l => l !== realEstate.lga) },
                    country: { set: userInterest.country.filter(c => c !== realEstate.user?.country) },
                },
            });
            return { success: true, message: 'Deal disliked and removed from user interest' };
        }
        catch (error) {
            console.error('Error disliking deal:', error);
            throw new common_1.InternalServerErrorException('An error occurred while disliking the deal');
        }
    }
    async likeDeal(userId, propertyId) {
        try {
            const realEstate = await this.prisma.realEstate.findUnique({
                where: { id: propertyId },
                include: { user: true },
            });
            if (!realEstate) {
                throw new common_1.NotFoundException(`Real estate property with ID ${propertyId} not found`);
            }
            if (!realEstate.user || !realEstate.user.country) {
                throw new common_1.NotFoundException(`User or user's country not found for property ${propertyId}`);
            }
            await this.prisma.realEstateInterest.update({
                where: { userId },
                data: {
                    state: { push: realEstate.state },
                    lga: { push: realEstate.lga },
                    country: { push: realEstate.user.country },
                },
            });
            return { success: true, message: 'Deal liked and added to user interest' };
        }
        catch (error) {
            console.error('Error liking deal:', error);
            throw new common_1.InternalServerErrorException('An error occurred while liking the deal');
        }
    }
    async filterDeals(filter, { page = 1, limit = 10 } = {}) {
        limit = Math.min(limit, this.MAX_PAGINATION_LIMIT);
        const skip = (page - 1) * limit;
        try {
            const [data, total] = await this.prisma.$transaction([
                this.prisma.realEstate.findMany({
                    where: {
                        ...(filter.category && { category: filter.category }),
                        ...(filter.numberOfRooms && { numberOfRooms: filter.numberOfRooms }),
                        ...(filter.state && { state: filter.state }),
                        ...(filter.lga && { lga: filter.lga }),
                    },
                    skip,
                    take: limit,
                }),
                this.prisma.realEstate.count({
                    where: {
                        ...(filter.category && { category: filter.category }),
                        ...(filter.numberOfRooms && { numberOfRooms: filter.numberOfRooms }),
                        ...(filter.state && { state: filter.state }),
                        ...(filter.lga && { lga: filter.lga }),
                    },
                }),
            ]);
            return { data: { items: data, total, page, limit }, success: true };
        }
        catch (error) {
            console.error('Error filtering real estate deals:', error);
            throw new common_1.InternalServerErrorException('An error occurred while filtering real estate deals');
        }
    }
};
exports.HotDealService = HotDealService;
exports.HotDealService = HotDealService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HotDealService);
//# sourceMappingURL=hotDeal.service.js.map