import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceRepository } from './device.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRepository])],
  controllers: [DeviceController],
  providers: [DeviceService]
})
export class DevicesModule {}
