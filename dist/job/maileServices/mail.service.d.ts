import { OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
export declare class MailService implements OnModuleInit {
    private readonly config;
    private transporter;
    constructor(config: ConfigService);
    onModuleInit(): void;
    sendEmail(to: string, subject: string, text: string): Promise<void>;
}
