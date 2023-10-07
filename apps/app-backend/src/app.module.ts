import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from '@liaoliaots/nestjs-redis';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/config';

import { UserModule } from './modules/user/user.module';
import { HealthcheckModule } from './modules/healthcheck/healthcheck.module';
import { CacheModule } from './modules/cache/Cache.module';

const modules = [CacheModule, HealthcheckModule, UserModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config],
    }),
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        config: {
          host: configService.get('redis.host'),
          port: configService.get('redis.port'),
          username: configService.get('redis.user'),
          password: configService.get('redis.password'),
        },
        readyLog: true,
      }),
    }),

    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
