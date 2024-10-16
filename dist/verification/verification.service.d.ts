import { PrismaService } from '../prisma/prisma.service';
import { CreateUserKycDto, UpdateUserKycDto } from '../dto/kycDto';
export declare class VerificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserKycDto: CreateUserKycDto): Promise<{
        data: any;
        success: boolean;
    }>;
    findOne(userId: string): Promise<{
        data: any;
        success: boolean;
    }>;
    update(userId: string, updateUserKycDto: UpdateUserKycDto): Promise<{
        data: any;
        success: boolean;
    }>;
    remove(userId: string): Promise<{
        data: any;
        success: boolean;
    }>;
}
