import { Module } from '@nestjs/common';
import { DevicesModule } from './devices/devices.module';
import { ScriptsModule } from './scripts/scripts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceRepository } from './devices/device.repository';
import { ScriptRepository } from './scripts/script.repository';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost',
    port: 3306,
    username: 'cerberus',
    password: 'cerberus3306',
    database: 'cerberusdb',
    entities: [DeviceRepository, ScriptRepository],
    synchronize: true,
  }),
  DevicesModule, ScriptsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
