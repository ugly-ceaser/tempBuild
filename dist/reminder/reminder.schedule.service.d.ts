import { PrismaService } from '../prisma/prisma.service';
export declare class ReminderSchedulerService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    start(): void;
}
