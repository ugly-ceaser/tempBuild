import { ReminderService } from './reminder.service';
import { CreateReminderDto, UpdateReminderDto } from '../dto/reminder';
export declare class ReminderController {
    private readonly reminderService;
    constructor(reminderService: ReminderService);
    create(createReminderDto: CreateReminderDto): Promise<{
        data: {
            userId: string;
            id: number;
            title: string;
            location: string;
            time: Date;
            dueDate: Date;
            note: string;
            appointmentContactNumber: string;
            status: boolean;
        };
        success: boolean;
    }>;
    findAll(userId: string): Promise<{
        data: {
            userId: string;
            id: number;
            title: string;
            location: string;
            time: Date;
            dueDate: Date;
            note: string;
            appointmentContactNumber: string;
            status: boolean;
        }[];
        success: boolean;
    }>;
    findOne(id: number): Promise<{
        data: {
            userId: string;
            id: number;
            title: string;
            location: string;
            time: Date;
            dueDate: Date;
            note: string;
            appointmentContactNumber: string;
            status: boolean;
        };
        success: boolean;
    }>;
    update(id: number, updateReminderDto: UpdateReminderDto): Promise<{
        data: {
            userId: string;
            id: number;
            title: string;
            location: string;
            time: Date;
            dueDate: Date;
            note: string;
            appointmentContactNumber: string;
            status: boolean;
        };
        success: boolean;
    }>;
    remove(id: number): Promise<{
        data: any;
        success: boolean;
    }>;
}
