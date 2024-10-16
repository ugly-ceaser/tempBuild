import { OtpService } from './otp.service';
import { otpDto } from '../dto/userDto';
export declare class OtpController {
    private otpService;
    constructor(otpService: OtpService);
    request(dto: otpDto): Promise<{
        message: string;
        status: boolean;
    }>;
}
