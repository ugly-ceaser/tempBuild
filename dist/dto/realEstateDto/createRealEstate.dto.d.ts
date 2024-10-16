export declare class CreateRealEstateDto {
    userId: string;
    houseName: string;
    category: string;
    numberOfRooms: number;
    pictures: string[];
    mainPictureIndex: number;
    description: string;
    state: string;
    lga: string;
    nearby: string[];
    amenities: string[];
    address: string;
    createdAt?: Date;
}
