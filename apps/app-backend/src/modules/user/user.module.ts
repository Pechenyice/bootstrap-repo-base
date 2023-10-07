import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

import { UserService } from './user.service';
import { UserRepository } from './user.repo';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserService, UserResolver, UserRepository, PrismaService],
  exports: [UserService],
})
export class UserModule {}
