import { PrismaService } from '../prisma/prisma.service';
import { ChatMessage } from '@prisma/client';
export declare class ChatService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    saveMessage(senderId: string, receiverId: string, message: string): Promise<{
        data: ChatMessage | null;
        success: boolean;
    }>;
    getMessages(): Promise<{
        data: ChatMessage[] | null;
        success: boolean;
    }>;
}
