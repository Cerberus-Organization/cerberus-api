import { Module } from '@nestjs/common';
import { DevicesModule } from './devices/devices.module';
import { ScriptsModule } from './scripts/scripts.module';

@Module({
  imports: [DevicesModule, ScriptsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
