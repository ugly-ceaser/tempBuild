import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInfoDto, UpdateUserInfoDto } from '../dto/userDto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUserInfo(dto: CreateUserInfoDto, userId: string): Promise<{
        data: any;
        success: boolean;
    }>;
    getUserProfile(userId: string): Promise<{
        data: any;
        success: boolean;
    }>;
    updateUserProfile(userId: string, dto: UpdateUserInfoDto): Promise<{
        data: any;
        success: boolean;
    }>;
}
