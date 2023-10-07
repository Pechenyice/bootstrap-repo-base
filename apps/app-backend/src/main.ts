import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  const configService = app.get(ConfigService);

  app.enableCors({
    credentials: true,
    origin: ['http://localhost:8000', 'http://localhost:3001'],
  });

  await app.listen(configService.get('port'));
}

bootstrap();
