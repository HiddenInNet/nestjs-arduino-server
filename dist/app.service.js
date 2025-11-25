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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let AppService = class AppService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getHello() {
        return 'Hello World!';
    }
    async saveData(data) {
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
        }
        catch (error) {
            console.error('Error al guardar en la base de datos:', error);
            throw new common_1.InternalServerErrorException('Error al guardar los datos.');
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map