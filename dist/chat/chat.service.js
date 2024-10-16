"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ChatService = class ChatService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveMessage(senderId, receiverId, message) {
        try {
            const chatMessage = await this.prisma.chatMessage.create({
                data: {
                    senderId,
                    receiverId,
                    message,
                },
            });
            return { data: chatMessage, success: true };
        }
        catch (error) {
            console.error('Error saving message:', error);
            throw new common_1.InternalServerErrorException('Failed to save message');
        }
    }
    async getMessages() {
        try {
            const messages = await this.prisma.chatMessage.findMany({
                select: {
                    id: true,
                    senderId: true,
                    receiverId: true,
                    message: true,
                    createdAt: true,
                    isRead: true,
                    isDelivered: true,
                },
            });
            return { data: messages, success: true };
        }
        catch (error) {
            console.error('Error retrieving messages:', error);
            throw new common_1.InternalServerErrorException('Failed to retrieve messages');
        }
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatService);
//# sourceMappingURL=chat.service.js.map