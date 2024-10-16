import { PrismaService } from '../prisma/prisma.service';
export declare class HotDealService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly MAX_PAGINATION_LIMIT;
    GetAll(userId: string, { page, limit }?: {
        page?: number;
        limit?: number;
    }): Promise<{
        data: {
            items: {
                address: string;
                userId: string;
                id: number;
                country: string;
                createdAt: Date;
                description: string;
                houseName: string | null;
                category: string;
                numberOfRooms: number;
                pictures: string[];
                mainPictureIndex: number;
                state: string;
                lga: string;
                nearby: string[];
                amenities: string[];
            }[];
            total: number;
            page: number;
            limit: number;
        };
        success: boolean;
    }>;
    disLikeDeal(userId: string, propertyId: number): Promise<{
        success: boolean;
        message: string;
    }>;
    likeDeal(userId: string, propertyId: number): Promise<{
        success: boolean;
        message: string;
    }>;
    filterDeals(filter: {
        category?: string;
        numberOfRooms?: number;
        state?: string;
        lga?: string;
    }, { page, limit }?: {
        page?: number;
        limit?: number;
    }): Promise<{
        data: {
            items: {
                address: string;
                userId: string;
                id: number;
                country: string;
                createdAt: Date;
                description: string;
                houseName: string | null;
                category: string;
                numberOfRooms: number;
                pictures: string[];
                mainPictureIndex: number;
                state: string;
                lga: string;
                nearby: string[];
                amenities: string[];
            }[];
            total: number;
            page: number;
            limit: number;
        };
        success: boolean;
    }>;
}
