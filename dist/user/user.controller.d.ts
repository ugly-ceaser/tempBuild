import { CreateUserInfoDto, UpdateUserInfoDto } from '../dto/userDto';
import { UserService } from './user.service';
import { User } from '@prisma/client';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUserInfo(dto: CreateUserInfoDto, user: User): Promise<{
        data: any;
        success: boolean;
    }>;
    getProfile(user: User): Promise<{
        data: any;
        success: boolean;
    }>;
    updateProfile(user: User, dto: UpdateUserInfoDto): Promise<{
        data: any;
        success: boolean;
    }>;
}
