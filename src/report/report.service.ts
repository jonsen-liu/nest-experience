import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportService {
  getHello(): string {
    return 'Hello World! this is report!';
  }
  getTest(): string {
    return 'test this is report!';
  }
}
