import { Module } from '@nestjs/common';
import { DevicesModule } from './devices/devices.module';
import { ScriptsModule } from './scripts/scripts.module';
import { DeviceController } from './devices/device.controller';
import { ScriptController } from './scripts/script.controller';

@Module({
  imports: [DevicesModule, ScriptsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
