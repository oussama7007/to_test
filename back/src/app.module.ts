import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProfileController } from './profile/profile.controller.js';
import { ProfileService } from './profile/profile.service.js';
import { ProfileModule } from './profile/profile.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [ProfileModule, AuthModule],
  controllers: [AppController, ProfileController],
  providers: [AppService, ProfileService],
})
export class AppModule {}
