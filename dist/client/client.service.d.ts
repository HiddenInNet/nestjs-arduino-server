import { PrismaService } from 'src/prisma.service';
export declare class ClientService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllData(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        temperature: number;
        humidity: number;
        createdAt: Date;
    }[]>;
}
