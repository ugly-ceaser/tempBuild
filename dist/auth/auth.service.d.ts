import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
import { userRegDto, userLogDto, otpDto, passDto, ResetPasswordDto, ForgotPasswordDto } from "../dto/userDto";
import { ConfigService } from '@nestjs/config';
import { MailService } from '../maileServices/mail.service';
import { OtpService } from "../otp/otp.service";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    private mailSender;
    private otpGen;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, mailSender: MailService, otpGen: OtpService);
    signToken: (userId: string, email: string) => Promise<string>;
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
    login(userLogDto: userLogDto): Promise<{
        data: any;
        success: boolean;
        access_token?: string;
    }>;
    verifyEmail(Dto: otpDto): Promise<{
        data: any;
        success: boolean;
    }>;
    verifyPhone(Dto: otpDto): Promise<{
        data: any;
        success: boolean;
    }>;
    updatePass(userId: string, dto: passDto): Promise<{
        data: any;
        success: boolean;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<void>;
    resetPassword(dto: ResetPasswordDto): Promise<void>;
}
