import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DeviceDto } from './dtos/device.dto';

@ApiTags('🖥️ Devices')
@Controller('device')
export class DeviceController {

    @Get()
    @ApiOperation({ summary: 'Return all Devices' })
    getAll(){

    }

}
