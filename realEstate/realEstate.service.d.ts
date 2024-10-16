import { PrismaService } from '../prisma/prisma.service';
import { CreateRealEstateDto, UpdateRealEstateDto, ReplaceRealEstateImgDto } from '../dto/realEstateDto/index';
export declare class RealEstateService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRealEstateDto: CreateRealEstateDto): Promise<{
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
    findAll({ page, limit }?: {
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
    findOne(userId: string, propertyId: number): Promise<{
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
    update(userId: string, propertyId: number, updateRealEstateDto: UpdateRealEstateDto): Promise<{
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
    remove(userId: string, propertyId: number): Promise<{
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
    searchRealEstates(userId: string, { category, numberOfRooms, state, lga, page, limit }: {
        category?: string;
        numberOfRooms?: number;
        state?: string;
        lga?: string;
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
