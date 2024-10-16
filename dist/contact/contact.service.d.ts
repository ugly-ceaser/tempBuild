import { PrismaService } from '../prisma/prisma.service';
import { Contact } from '@prisma/client';
import { CreateContactDto } from '../dto/contact/create-contact.dto';
export declare class ContactService {
    private prisma;
    constructor(prisma: PrismaService);
    createContact(data: CreateContactDto): Promise<Contact>;
    getAllContacts(): Promise<Contact[]>;
    getContactById(id: number): Promise<Contact | null>;
    deleteContact(id: number): Promise<Contact>;
}
