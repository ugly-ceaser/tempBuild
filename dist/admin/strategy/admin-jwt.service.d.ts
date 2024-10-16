import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { PrismaService } from "../../prisma/prisma.service";
declare const AdminJWTStrategy_base: new (...args: any[]) => Strategy;
export declare class AdminJWTStrategy extends AdminJWTStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        roles: {
            name: string;
            id: string;
        }[];
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
