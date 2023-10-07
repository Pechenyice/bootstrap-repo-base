import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

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
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [],
      useFactory: async () => ({
        autoSchemaFile: 'schema.gql',
        buildSchemaOptions: {
          dateScalarMode: 'isoDate',
        },
        path: '/graphql',
        cors: false,
        playground: false,
        // validationRules: [depthLimit(10)], // https://www.apollographql.com/blog/securing-your-graphql-api-from-malicious-queries-16130a324a6b/
      }),
    }),

    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
