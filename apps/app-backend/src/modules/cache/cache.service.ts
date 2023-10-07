import Redis from 'ioredis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';

const TTL = 24 * 60 * 60; // in seconds

@Injectable()
export class CacheService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async get(key: string): Promise<string | null> {
    const value = await this.redis.get(key);

    return value;
  }

  async set(key: string, value: string, customTTL?: number): Promise<void> {
    await this.redis.set(key, value, 'EX', customTTL ? customTTL : TTL);
  }

  async del(key: string): Promise<number | void> {
    const value = await this.redis.del(key);

    return value;
  }
}
