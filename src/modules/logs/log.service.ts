import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { LogRepository, LogStatus } from './log.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogDto } from './dtos/log.dto';
import { CreateLogDto } from './dtos/createlog.dto';

@Injectable()
export class LogService {

    constructor(@InjectRepository(LogRepository) private readonly logRepository: Repository<LogRepository>) {}

    async getAll() : Promise<LogDto[]>{
        return await this.logRepository.find();
    }

    async getLogsBy(status?: LogStatus): Promise<LogDto[]> {
        if (status) {
            return await this.logRepository.find({
                where: {
                    status: status,
                },
            });
        } else {
            return await this.logRepository.find();
        }
    }

    async create(log:CreateLogDto) : Promise<LogDto>{

        if(!log){
            throw new BadRequestException('Invalid log input');
        }

        this.logRepository.create(log);
        return await this.logRepository.save(log);

    }

    async clear() : Promise<HttpStatus.OK>{

        await this.logRepository.clear();
        return HttpStatus.OK;

    }


}
