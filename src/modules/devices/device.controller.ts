import { Body, Controller, Delete, Get, Head, HttpCode, HttpStatus, Options, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeviceDto } from './dtos/device.dto';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dtos/createdevice.dto';
import { UpdateDeviceDto } from './dtos/updatedevice.dto';
import { Log } from 'src/shared/log.interceptor';

@ApiTags('🖥️ Devices')
@Controller('device')
export class DeviceController {

    constructor(private readonly deviceService:DeviceService) {}

    @Get('getAll')
    @Log()
    @ApiResponse({type: DeviceDto, isArray: true})
    @ApiOperation({ summary: 'Return all Devices' })
    async getAll() : Promise<DeviceDto[]>{
        return this.deviceService.getAll();
    }

    @Get('getById/:id')
    @Log()
    @ApiResponse({type: DeviceDto})
    @ApiOperation({summary: 'Returns a device by ID'})
    @ApiParam({name: 'id', type: Number, description: 'The ID of the device to be searched',})
    async getById(@Param('id') id:number) : Promise<DeviceDto>{
        return await this.deviceService.getById(id);
    }

    @Head('getById/:id')
    @Log()
    @ApiOperation({ summary: 'Check if a device exists by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'The ID of the device to check' })
    async head(@Param('id') id: number): Promise<void> {
        const device = await this.deviceService.getById(id);
        if (!device) {
            throw new Error('Device not found');
        }
    }

    @Post('create')
    @Log()
    @ApiResponse({type: DeviceDto})
    @ApiOperation({summary: 'Creates a device and returns the object'})
    @ApiBody({type: CreateDeviceDto})
    async create(@Body() device:CreateDeviceDto) : Promise<DeviceDto>{
        return await this.deviceService.create(device);
    }

    @Put('update/:id')
    @Log()
    @ApiResponse({type: UpdateDeviceDto})
    @ApiOperation({summary: 'Updates a device. All arguments must be given'})
    @ApiBody({type: UpdateDeviceDto})
    @ApiParam({name: 'id', type: Number, description: 'The ID of the device to be updated',})
    async update(@Param('id') id:number, @Body() device:UpdateDeviceDto) : Promise<UpdateDeviceDto>{
        return await this.deviceService.update(id, device);
    }

    @Patch('patch/:id')
    @Log()
    @ApiResponse({type: DeviceDto})
    @ApiOperation({summary: 'Updates a device. At least one argument must be given'})
    @ApiBody({type: UpdateDeviceDto})
    @ApiParam({name: 'id', type: Number, description: 'The ID of the device to be patched',})
    async patch(@Param('id') id:number, @Body() params:Partial<UpdateDeviceDto>) : Promise<DeviceDto>{
        return await this.deviceService.patch(id, params);
    }

    @Delete('delete/:id')
    @Log()
    @ApiResponse({type: DeviceDto})
    @ApiOperation({summary: 'Delete a device from an id and returns the object'})
    @ApiParam({name: 'id', type: Number, description: 'The ID of the device to be removed',})
    async delete(@Param('id') id:number) : Promise<DeviceDto>{
        return await this.deviceService.delete(id);
    }

    @Options('getById/:id')
    @Log()
    @ApiOperation({ summary: 'Get available HTTP methods for this endpoint' })
    @ApiParam({ name: 'id', type: Number, description: 'The ID of the device for options request' })
    async options(@Param('id') id: number): Promise<HttpStatus.OK> {
        return HttpStatus.OK;
    }

}
