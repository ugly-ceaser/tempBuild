"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
const config_1 = require("@nestjs/config");
let AdminAuthService = class AdminAuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.signToken = async (adminId, email) => {
            const payload = { sub: adminId, email };
            const secret = this.config.get('ADMIN_JWT_SECRET');
            return await this.jwt.signAsync(payload, {
                expiresIn: '7d',
                secret: secret,
            });
        };
    }
    async login(adminLoginDto) {
        const { email, password } = adminLoginDto;
        const admin = await this.prisma.admin.findUnique({
            where: { email },
            include: { roles: true },
        });
        if (!admin) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        const pwMatch = await argon.verify(admin.password, password);
        if (!pwMatch) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        const token = await this.signToken(admin.id, admin.email);
        return {
            data: admin,
            access_token: token,
        };
    }
    async register(adminRegisterDto) {
        const { email, password, roles } = adminRegisterDto;
        const hashedPwd = await argon.hash(password);
        try {
            const roleRecords = await this.prisma.role.findMany({
                where: { name: { in: roles } },
            });
            const admin = await this.prisma.admin.create({
                data: {
                    email,
                    password: hashedPwd,
                    roles: {
                        connect: roleRecords.map(role => ({ id: role.id })),
                    },
                },
                include: { roles: true },
            });
            const token = await this.signToken(admin.id, admin.email);
            return {
                data: admin,
                access_token: token,
            };
        }
        catch (error) {
            throw new common_1.ForbiddenException('Credentials taken');
        }
    }
    async protectedAction(user) {
        return true;
    }
};
exports.AdminAuthService = AdminAuthService;
exports.AdminAuthService = AdminAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AdminAuthService);
//# sourceMappingURL=admin-auth.service.js.map