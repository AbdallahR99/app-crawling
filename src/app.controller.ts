import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { mapOldData } from './core/util/map-data';

@Controller({
  path: '',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.saveData();
    return 'sasa';
  }

  @Get('save-data')
  async saveData(): Promise<string> {
    return await mapOldData();
  }

  // @Get()
  // async saveData(): Promise<string> {
  //   return await this.appService.saveData();
  // }
}
