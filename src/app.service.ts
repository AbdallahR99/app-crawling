import { Injectable } from '@nestjs/common';
import { generateData } from './crawler/data-generator';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await generateData();
  }
  async saveData(): Promise<string> {
    return await generateData();
  }
}
