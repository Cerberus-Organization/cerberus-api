import { Module } from '@nestjs/common';
import { DevicesModule } from './modules/devices/devices.module';
import { ScriptsModule } from './modules/scripts/scripts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceRepository } from './modules/devices/device.repository';
import { ScriptRepository } from './modules/scripts/script.repository';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LogsModule } from './modules/logs/logs.module';
import { LogInterceptor } from './shared/log.interceptor';
import { LogRepository } from './modules/logs/log.repository';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'cerberus',
      password: 'cerberus3306',
      database: 'cerberusdb',
      entities: [DeviceRepository, ScriptRepository, LogRepository],
      synchronize: true
    }),

    TypeOrmModule.forFeature([LogRepository]),

    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'public'),}),

  DevicesModule, ScriptsModule, LogsModule
  ],

  controllers: [],
  providers: [
    {provide: APP_INTERCEPTOR, useClass: LogInterceptor},
  ],
})
export class AppModule {}
