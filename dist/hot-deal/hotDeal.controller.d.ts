import { HotDealService } from "./hotDeal.service";
export declare class HotDealController {
    private readonly hotDealService;
    constructor(hotDealService: HotDealService);
    GetAll(userId: string, query: {
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
    filterDeals(filters: {
        category?: string;
        numberOfRooms?: number;
        state?: string;
        lga?: string;
    }, query: {
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
    likeDeal(body: {
        userId: string;
        propertyId: number;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    disLikeDeal(body: {
        userId: string;
        propertyId: number;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
}
