import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@nestjs/common';
import { Data } from './interfaces/Data.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postData(@Body() data: Data): string {
    console.log('data: ', data);
    this.appService.saveData(data);
    return null;
  }
}
