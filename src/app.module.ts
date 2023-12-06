import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ReportModule } from './report/report.module';
import { LoggerMiddleware } from './common/logger.middleware';

@Module({
  imports: [CatsModule, ReportModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'cats',
      method: RequestMethod.GET,
    });
  }
}
