export declare class CreateReminderDto {
    userId: string;
    title: string;
    location: string;
    time: Date;
    dueDate: Date;
    note: string;
    appointmentContactNumber: string;
    status: boolean;
}
export declare class UpdateReminderDto {
    location?: string;
    time?: Date;
    dueDate?: Date;
    note?: string;
    appointmentContactNumber?: string;
    status?: boolean;
}
