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
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true, // Permite acessar as variáveis globalmente
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
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
