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
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const mail_service_1 = require("../maileServices/mail.service");
const sms_service_1 = require("../sms/sms.service");
let OtpService = class OtpService {
    constructor(prisma, mailSender, smsSender) {
        this.prisma = prisma;
        this.mailSender = mailSender;
        this.smsSender = smsSender;
    }
    generateRandomCode() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
    async generateAndSaveOtp(otpDto) {
        const { email } = otpDto;
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.ForbiddenException('Credential Incorrect: Email not found');
        }
        const otpCode = this.generateRandomCode();
        await Promise.all([
            this.prisma.user.update({
                where: { email },
                data: { tempToken: otpCode },
            }),
            this.mailSender.sendEmail(email, 'OTP Verification', otpCode),
        ]);
        setTimeout(() => {
            this.clearTempToken(user.email);
        }, 900000);
    }
    async generateAndSaveOtpForPhone(otpDto) {
        const { email, phoneNumber } = otpDto;
        const formattedPhoneNumber = this.formatPhoneNumber(phoneNumber);
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.ForbiddenException('Credential Incorrect: Email not found');
        }
        const otpCode = this.generateRandomCode();
        const updateUserPromise = user.phoneNumber ?
            Promise.resolve() :
            this.prisma.user.update({
                where: { email },
                data: { phoneNumber: formattedPhoneNumber },
            });
        await Promise.all([
            updateUserPromise,
            this.prisma.user.update({
                where: { id: user.id },
                data: { tempToken: otpCode },
            }),
            this.smsSender.sendSms(formattedPhoneNumber, `Your OTP code is ${otpCode}`),
        ]);
        setTimeout(() => {
            this.clearTempToken(user.email);
        }, 900000);
    }
    async clearTempToken(email) {
        try {
            await this.prisma.user.update({
                where: { email },
                data: { tempToken: null },
            });
        }
        catch (error) {
            console.error('Error clearing tempToken:', error);
        }
    }
    formatPhoneNumber(phoneNumber) {
        if (phoneNumber.startsWith('0')) {
            return '234' + phoneNumber.slice(1);
        }
        return phoneNumber;
    }
    async requestOtp(Dto) {
        const { email, phoneNumber, dataVerified } = Dto;
        if (!email && !phoneNumber) {
            throw new common_1.ForbiddenException('Credential Incorrect: Email or phone number not found');
        }
        else if (dataVerified === 'email' && email) {
            await this.generateAndSaveOtp(Dto);
        }
        else if (dataVerified === 'phoneNumber' && phoneNumber) {
            await this.generateAndSaveOtpForPhone(Dto);
        }
        else {
            throw new common_1.ForbiddenException('Credential Incorrect: OTP operation failed');
        }
        return { message: 'Success', status: true };
    }
};
exports.OtpService = OtpService;
exports.OtpService = OtpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService,
        sms_service_1.SmsService])
], OtpService);
//# sourceMappingURL=otp.service.js.map