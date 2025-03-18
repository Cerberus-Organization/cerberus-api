import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reflector } from '@nestjs/core';
import { LogRepository, LogStatus } from 'src/modules/logs/log.repository';
import { SetMetadata } from '@nestjs/common';
import { CreateLogDto } from 'src/modules/logs/dtos/createlog.dto';

export const LOG_METADATA_KEY = 'log_metadata';

export const Log = () => SetMetadata(LOG_METADATA_KEY, true);

@Injectable()
export class LogInterceptor implements NestInterceptor {

  constructor(@InjectRepository(LogRepository) private readonly logRepository: Repository<LogRepository>, private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const method = request.method;
    const url = request.url;
    const body = request.body;

    const handler = context.getHandler();
    const isLogged = this.reflector.get<boolean>(LOG_METADATA_KEY, handler);
    if (isLogged) {

      const log = new CreateLogDto();
      log.status = LogStatus.SUCCESS;
      log.information = `Method: ${method}, URL: ${url}, Body: ${JSON.stringify(body)}`;
      log.time = new Date();

      return next.handle().pipe(
        tap(async (responseData) => {
          log.status = response.statusCode === 200 ? LogStatus.SUCCESS : LogStatus.ERROR;
          log.information += `, Response: ${JSON.stringify(responseData)}, Status: ${response.statusCode}`;
          await this.logRepository.save(log);
        }),
      );

    }

    return next.handle();
  }
}