import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { LogRepository } from './log.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogInterceptor } from 'src/shared/log.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([LogRepository])],
  controllers: [LogController],
  providers: [LogService, LogInterceptor]
})
export class LogsModule {}
