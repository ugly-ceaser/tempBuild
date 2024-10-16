import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../../prisma/prisma.service";
import { AdminLoginDto, AdminRegisterDto } from "../dto/adminDto";
import { ConfigService } from '@nestjs/config';
export declare class AdminAuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    private signToken;
    login(adminLoginDto: AdminLoginDto): Promise<{
        data: {
            roles: {
                name: string;
                id: string;
            }[];
        } & {
            email: string;
            password: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        access_token: string;
    }>;
    register(adminRegisterDto: AdminRegisterDto): Promise<{
        data: {
            roles: {
                name: string;
                id: string;
            }[];
        } & {
            email: string;
            password: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        access_token: string;
    }>;
    protectedAction(user: any): Promise<boolean>;
}
