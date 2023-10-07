import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { UserRepository } from './user.repo';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.userRepository.user(userWhereUniqueInput);
  }
}
