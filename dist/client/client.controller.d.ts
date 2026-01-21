import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    getAllData(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        fecha: Date | null;
        temperatura: import("@prisma/client-runtime-utils").Decimal | null;
        humedad: import("@prisma/client-runtime-utils").Decimal | null;
        luz: number | null;
        vibracion: number | null;
        calidad_aire_ppm: import("@prisma/client-runtime-utils").Decimal | null;
        alcohol_detectado: boolean | null;
    }[]>;
}
