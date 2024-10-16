export declare class userRegDto {
    email: string;
    password: string;
}
export declare class userLogDto {
    EmailOrPhoneNumber: string;
    password: string;
}
export declare class passDto {
    password: string;
    confirm_password: string;
}
export declare class ForgotPasswordDto {
    email: string;
}
export declare class ResetPasswordDto {
    token: string;
    newPassword: string;
}
export declare class EditAuthtDto {
    email?: string;
    phoneNumber?: string;
}
