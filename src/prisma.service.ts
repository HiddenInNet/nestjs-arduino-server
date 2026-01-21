import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 1. Creamos el pool de conexiones de Postgres manualmente
    const pool = new Pool({
      connectionString:
        'postgresql://postgres:root@100.111.111.46:5432/proyecto_iot?schema=public',
    });

    // 2. Creamos el adaptador que Prisma v7 necesita
    const adapter = new PrismaPg(pool);

    // 3. Se lo pasamos al constructor de la clase padre
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
