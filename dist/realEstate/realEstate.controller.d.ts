import { RealEstateService } from './realEstate.service';
import { CreateRealEstateDto, UpdateRealEstateDto, ReplaceRealEstateImgDto } from '../dto/realEstateDto/index';
export declare class RealEstateController {
    private readonly realEstateService;
    constructor(realEstateService: RealEstateService);
    createRealEstate(createRealEstateDto: CreateRealEstateDto, userId: string): Promise<{
        data: {
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
        };
        success: boolean;
    }>;
    getRealEstate(userId: string, page?: number, limit?: number): Promise<{
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
    getRealEstateById(userId: string, propertyId: number): Promise<{
        data: {
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
        };
        success: boolean;
    }>;
    updateRealEstate(userId: string, propertyId: number, updateRealEstateDto: UpdateRealEstateDto): Promise<{
        data: {
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
        };
        success: boolean;
    }>;
    deleteRealEstate(userId: string, propertyId: number): Promise<{
        data: any;
        success: boolean;
    }>;
    replaceImage(userId: string, propertyId: number, replaceImageDto: ReplaceRealEstateImgDto): Promise<{
        data: {
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
        };
        success: boolean;
    }>;
    searchRealEstate(userId: string, category?: string, numberOfRooms?: number, state?: string, lga?: string, page?: number, limit?: number): Promise<{
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
