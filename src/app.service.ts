import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Data } from './interfaces/Data.interface';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async saveData(data: Data): Promise<void> {
    try {
      const num = await this.prisma.data.count();

      if (num >= 20) {
        const oldestRecords = await this.prisma.data.findMany({
          take: 10,
          orderBy: {
            createdAt: 'asc',
          },
          select: {
            id: true,
          },
        });

        const oldestIds = oldestRecords.map((record) => record.id);

        if (oldestIds.length > 0) {
          await this.prisma.data.deleteMany({
            where: {
              id: {
                in: oldestIds,
              },
            },
          });
          console.log(`Eliminados ${oldestIds.length} registros antiguos.`);
        }
      }

      await this.prisma.data.create({
        data: {
          temperature: data.temperature,
          humidity: data.humidity,
        },
      });
    } catch (error) {
      console.error('Error al guardar en la base de datos:', error);
      throw new InternalServerErrorException('Error al guardar los datos.');
    }
  }
}
