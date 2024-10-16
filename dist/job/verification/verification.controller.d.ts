import { VerificationService } from './verification.service';
import { CreateUserKycDto, UpdateUserKycDto } from '../dto/kycDto';
export declare class VerificationController {
    private readonly verificationService;
    constructor(verificationService: VerificationService);
    create(userId: string, createUserKycDto: CreateUserKycDto): Promise<{
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
    testRoute(): string;
}
