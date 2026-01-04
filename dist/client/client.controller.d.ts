import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    getAllData(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        temperature: number;
        humidity: number;
        createdAt: Date;
    }[]>;
}
