import { PrismaService } from './prisma.service';
import { Data } from './interfaces/Data.interface';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    getHello(): string;
    saveData(data: Data): Promise<void>;
}
