import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { ConfigService } from '@nestjs/config';
import { CacheService } from './modules/cache/cache.service';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly appService: AppService,
    private readonly userService: UserService,
    private readonly cacheService: CacheService,
  ) {}

  @Get('test/user')
  async testFindUser() {
    if (this.configService.get('nodeEnv') !== 'development') {
      return 'Access denied';
    }

    await this.cacheService.set('test', '123');

    const data = await this.userService.findUser({ id: '123' });

    return data ?? 'User not found';
  }
}
