import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ ConfigModule.forRoot({
      isGlobal: true,

  }),
    TypeOrmModule.forRootAsync(
    {
      imports: [ConfigModule],
      inject: [ConfigService], 
      useFactory: ( configservice: ConfigService ) => ({
          type: 'postgres',
          host : configservice.get<string>('DB_HOST'),
          port : Number(configservice.get<string>('DB_PORT')),
          username: configservice.get<string>('DB_USERNAME'),
          password : configservice.get<string>('DB_PASSWORD'),
          database : configservice.get<string>('DB_NAME'),
          synchronize: false,
          autoLoadEntities: true, 
      })
    }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
