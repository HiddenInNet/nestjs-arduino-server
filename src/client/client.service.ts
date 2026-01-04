import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  findAllData() {
    return this.prisma.data.findMany();
  }
}
