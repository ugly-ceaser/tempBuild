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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../maileServices/mail.service");
const otp_service_1 = require("../otp/otp.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config, mailSender, otpGen) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.mailSender = mailSender;
        this.otpGen = otpGen;
        this.signToken = async (userId, email) => {
            const payload = { sub: userId, email };
            const secret = this.config.get('JWT_SECRET');
            try {
                return await this.jwt.signAsync(payload, {
                    expiresIn: '7d',
                    secret: secret,
                });
            }
            catch (error) {
                console.error('Error signing token:', error);
                throw new common_1.InternalServerErrorException('Failed to sign token');
            }
        };
    }
    async register(userRegDto) {
        try {
            console.log('Registering user with data:', userRegDto);
            if (!userRegDto.password) {
                throw new Error('Password is missing');
            }
            const hashedPwd = await argon.hash(userRegDto.password);
            console.log('Hashed Password:', hashedPwd);
            const user = await this.prisma.user.create({
                data: {
                    email: userRegDto.email,
                    password: hashedPwd,
                    isVerified: false,
                },
            });
            const token = await this.signToken(user.id, user.email);
            await this.mailSender.sendEmail(user.email, "Welcome", "434434534");
            return {
                data: user,
                access_token: token,
            };
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
            console.error('Error registering user:', error);
            throw error;
        }
    }
    async login(userLogDto) {
        try {
            const emailOrPhoneNumber = userLogDto.EmailOrPhoneNumber;
            const user = await this.prisma.user.findFirst({
                where: {
                    OR: [
                        { email: emailOrPhoneNumber },
                        { phoneNumber: emailOrPhoneNumber }
                    ]
                }
            });
            if (!user) {
                throw new common_1.ForbiddenException('Credential Incorrect: Email or Phone number not found');
            }
            const pwMatch = await argon.verify(user.password, userLogDto.password);
            if (!pwMatch) {
                throw new common_1.ForbiddenException('Credentials Incorrect: Password not matched');
            }
            const token = await this.signToken(user.id, user.email);
            return {
                data: user,
                success: true,
                access_token: token,
            };
        }
        catch (error) {
            console.error('Error during login:', error);
            throw new common_1.InternalServerErrorException('Login failed');
        }
    }
    async verifyEmail(Dto) {
        try {
            const findUser = await this.prisma.user.findFirst({
                where: { email: Dto.email }
            });
            if (!findUser) {
                throw new common_1.ForbiddenException('Credential Incorrect: Email not found');
            }
            if (findUser.tempToken !== Dto.otp) {
                throw new common_1.ForbiddenException('Credential Incorrect: OTP mismatch');
            }
            const user = await this.prisma.user.update({
                where: { email: findUser.email },
                data: { isEmailVerified: true }
            });
            return { data: user, success: true };
        }
        catch (error) {
            console.error('Error verifying email:', error);
            throw new common_1.InternalServerErrorException('Email verification failed');
        }
    }
    async verifyPhone(Dto) {
        try {
            const findUser = await this.prisma.user.findFirst({
                where: { email: Dto.email }
            });
            if (!findUser) {
                throw new common_1.ForbiddenException('Credential Incorrect: Email not found');
            }
            if (findUser.tempToken !== Dto.otp) {
                throw new common_1.ForbiddenException('Credential Incorrect: OTP mismatch');
            }
            const user = await this.prisma.user.update({
                where: { email: findUser.email },
                data: {
                    isEmailVerified: true,
                    phoneNumber: Dto.phoneNumber,
                    isNumberVerified: true,
                }
            });
            return { data: user, success: true };
        }
        catch (error) {
            console.error('Error verifying phone:', error);
            throw new common_1.InternalServerErrorException('Phone verification failed');
        }
    }
    async updatePass(userId, dto) {
        if (dto.password !== dto.confirm_password) {
            throw new common_1.ForbiddenException('Credential Incorrect: Passwords do not match');
        }
        try {
            const hashedPwd = await argon.hash(dto.password);
            const user = await this.prisma.user.update({
                where: { id: userId },
                data: { password: hashedPwd },
            });
            return {
                data: user,
                success: true,
            };
        }
        catch (error) {
            console.error('Error updating password:', error);
            throw new common_1.InternalServerErrorException('Failed to update password');
        }
    }
    async forgotPassword(dto) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (!user) {
            throw new Error('User not found');
        }
        const token = this.signToken(user.id, user.email);
        const resetLink = `https://your-frontend-url.com/reset-password?token=${token}`;
        await this.mailSender.sendEmail(user.email, "Password Reset", resetLink);
    }
    async resetPassword(dto) {
        const payload = this.jwt.verify(dto.token);
        const user = await this.prisma.user.findUnique({ where: { email: payload.email } });
        if (!user) {
            throw new Error('Invalid token or user not found');
        }
        const hashedPassword = await argon.hash(dto.newPassword);
        await this.prisma.user.update({
            where: { email: user.email },
            data: { password: hashedPassword },
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService,
        mail_service_1.MailService,
        otp_service_1.OtpService])
], AuthService);
//# sourceMappingURL=auth.service.js.map