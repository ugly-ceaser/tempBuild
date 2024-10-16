import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';
declare const JWTStrategy_base: new (...args: any[]) => Strategy;
export declare class JWTStrategy extends JWTStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        email: string;
        phoneNumber: string | null;
        id: string;
        isVerified: boolean;
        isEmailVerified: boolean | null;
        isNumberVerified: boolean | null;
        country: string | null;
        createdAt: Date;
        updatedAt: Date;
        tempToken: string | null;
    }>;
}
export {};
