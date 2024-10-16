import { ConfigService } from '@nestjs/config';
export declare class SmsService {
    private readonly configService;
    private readonly client;
    private readonly from;
    constructor(configService: ConfigService);
    sendSms(receiver: string, message: string): Promise<void>;
}
