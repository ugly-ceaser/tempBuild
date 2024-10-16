import { AuthService } from "./auth.service";
import { userRegDto, userLogDto, otpDto, passDto, ForgotPasswordDto, ResetPasswordDto } from "../dto/userDto";
export declare class AuthController {
    private authservice;
    constructor(authservice: AuthService);
    login(userLogDto: userLogDto): Promise<{
        data: any;
        success: boolean;
        access_token?: string;
    }>;
    verifyEmial(Dto: otpDto): Promise<{
        data: any;
        success: boolean;
    }>;
    verifyPhoneNumber(Dto: otpDto): Promise<{
        data: any;
        success: boolean;
    }>;
    register(userRegDto: userRegDto): Promise<{
        data: {
            email: string;
            password: string;
            phoneNumber: string | null;
            id: string;
            isVerified: boolean;
            isEmailVerified: boolean | null;
            isNumberVerified: boolean | null;
            country: string | null;
            createdAt: Date;
            updatedAt: Date;
            tempToken: string | null;
        };
        access_token: string;
    }>;
    forgotPassword(dto: passDto, userId: string): Promise<{
        data: any;
        success: boolean;
    }>;
    forgotPassword2(dto: ForgotPasswordDto): Promise<void>;
    resetPassword(dto: ResetPasswordDto): Promise<void>;
}
