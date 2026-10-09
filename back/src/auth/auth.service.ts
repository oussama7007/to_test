

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationSession } from './registration-session.entity.js'; 
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RegistrationSession)
    private readonly registrationSessionRepository: Repository<RegistrationSession>,
  ) {}
}