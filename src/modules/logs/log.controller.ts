import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { LogDto } from './dtos/log.dto';
import { LogService } from './log.service';
import { CreateLogDto } from './dtos/createlog.dto';
import { LogStatus } from './log.repository';

@ApiTags('📃 Logs')
@Controller('log')
export class LogController {

    constructor(private readonly logService: LogService) {}

    @Get('getAll')
    @ApiOperation({ summary: 'Retrieve all logs' })
    @ApiResponse({ status: 200, description: 'List of all logs', type: [LogDto] })
    async getAll(): Promise<LogDto[]> {
        return await this.logService.getAll();
    }

    @Get('getLogsBy')
    @ApiOperation({ summary: 'Retrieve logs filtered by status' })
    @ApiQuery({name: 'status', enum: LogStatus, required: true, description: 'Filter logs by status'})
    @ApiResponse({ status: 200, description: 'List of filtered logs', type: [LogDto] })
    async getLogsBy(@Query('status') status?: LogStatus): Promise<LogDto[]> {
        return await this.logService.getLogsBy(status);
    }

    @Post('create')
    @ApiOperation({ summary: 'Create a new log' })
    @ApiResponse({ status: 201, description: 'Log successfully created', type: LogDto })
    async create(@Body() log: CreateLogDto): Promise<LogDto> {
        return await this.logService.create(log);
    }

    @Delete('delete')
    @ApiOperation({ summary: 'Delete all logs' })
    @ApiResponse({ status: 200, description: 'Logs successfully deleted' })
    async clear(): Promise<HttpStatus> {
        await this.logService.clear();
        return HttpStatus.OK;
    }
}
