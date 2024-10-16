import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../maileServices/mail.service';
import { SmsService } from '../sms/sms.service';
import { otpDto } from '../dto/userDto';
export declare class OtpService {
    private prisma;
    private mailSender;
    private smsSender;
    constructor(prisma: PrismaService, mailSender: MailService, smsSender: SmsService);
    private generateRandomCode;
    generateAndSaveOtp(otpDto: otpDto): Promise<void>;
    generateAndSaveOtpForPhone(otpDto: otpDto): Promise<void>;
    private clearTempToken;
    private formatPhoneNumber;
    requestOtp(Dto: otpDto): Promise<{
        message: string;
        status: boolean;
    }>;
}
