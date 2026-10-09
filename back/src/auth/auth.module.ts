import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationSession } from './registration-session.entity.js'


@Module({
  imports : [TypeOrmModule.forFeature([RegistrationSession])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
