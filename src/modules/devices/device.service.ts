import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DeviceDto } from './dtos/device.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceRepository } from './device.repository';
import { CreateDeviceDto } from './dtos/createdevice.dto';
import { UpdateDeviceDto } from './dtos/updatedevice.dto';

@Injectable()
export class DeviceService {

    constructor(@InjectRepository(DeviceRepository) private readonly deviceRepository: Repository<DeviceRepository>) {}

    async getAll() : Promise<DeviceDto[]>{
        return await this.deviceRepository.find();
    }

    async getById(id:number) : Promise<DeviceDto>{
        const device = await this.deviceRepository.findOneBy({id: id});

        if(!device){
            throw new NotFoundException('Device not found');
        }

        return device;

    }

    async create(device:CreateDeviceDto) : Promise<DeviceDto>{

        if(!device){
            throw new BadRequestException('Invalid device entry')
        }

        this.deviceRepository.create(device);
        return await this.deviceRepository.save(device);

    }

    async update(id: number, device: UpdateDeviceDto): Promise<UpdateDeviceDto> {
        const existingDevice = await this.deviceRepository.findOne({ where: { id } });
    
        if (!existingDevice) {
            throw new NotFoundException('Device not found');
        }
    
        await this.deviceRepository.update(id, device);
    
        return device;
    }

    async patch(id:number, params:Partial<UpdateDeviceDto>,) : Promise<DeviceDto>{
        const existingDevice = await this.deviceRepository.findOne({ where: { id } });
    
        if (!existingDevice) {
            throw new NotFoundException('Device not found');
        }

        Object.assign(existingDevice, params);
    
        await this.deviceRepository.update(id, existingDevice);
    
        return existingDevice;
    }

    async delete(id: number): Promise<DeviceDto> {
        const device = await this.deviceRepository.findOne({ where: { id } });
    
        if (!device) {
            throw new Error('Device not found');
        }
    
        await this.deviceRepository.remove(device);
        
        return device;
    }

}
