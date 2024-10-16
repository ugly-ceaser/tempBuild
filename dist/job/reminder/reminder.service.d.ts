import { PrismaService } from '../prisma/prisma.service';
import { CreateReminderDto, UpdateReminderDto } from '../dto/reminder';
import { NotificationService } from '../notification/notification.service';
export declare class ReminderService {
    private readonly prisma;
    private readonly notification;
    constructor(prisma: PrismaService, notification: NotificationService);
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
    findOne(reminderId: number): Promise<{
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
    update(reminderId: number, updateReminderDto: UpdateReminderDto): Promise<{
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
    remove(reminderId: number): Promise<{
        data: any;
        success: boolean;
    }>;
    checkRemindersDueToday(userId: string): Promise<{
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
}
