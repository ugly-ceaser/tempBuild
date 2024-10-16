import { ContactService } from './contact.service';
import { CreateContactDto } from '../dto/contact/create-contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    createContact(createContactDto: CreateContactDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        message: string;
        firstName: string;
        lastName: string;
    }>;
    getAllContacts(): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        message: string;
        firstName: string;
        lastName: string;
    }[]>;
    getContactById(id: string): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        message: string;
        firstName: string;
        lastName: string;
    }>;
    deleteContact(id: string): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        message: string;
        firstName: string;
        lastName: string;
    }>;
}
