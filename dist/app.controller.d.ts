import { AppService } from './app.service';
import { Data } from './interfaces/Data.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postData(data: Data): string;
}
