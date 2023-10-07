import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

import { UserService } from './user.service';
import { UserRepository } from './user.repo';

@Module({
  providers: [UserService, UserRepository, PrismaService],
  exports: [UserService],
})
export class UserModule {}
