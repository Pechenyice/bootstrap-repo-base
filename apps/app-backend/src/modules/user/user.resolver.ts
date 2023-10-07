import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from './dto/user';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async findUserById(@Args('id') id: string) {
    const data = await this.userService.findUser({ id });

    if (!data?.id) {
      throw new Error('User not found');
    }

    return data;
  }
}
