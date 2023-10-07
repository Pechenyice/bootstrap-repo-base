import 'dotenv/config';
import { cleanEnv, str, num, host, port } from 'envalid';

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
  PORT: num({ default: 8000 }),

  REDIS_HOST: host(),
  REDIS_PORT: port(),
  REDIS_USER: str(),
  REDIS_PASSWORD: str(),

  PSQL_NAME: str(),
  PSQL_HOST: host(),
  PSQL_PORT: port(),
  PSQL_USER: str(),
  PSQL_PASSWORD: str(),
});

export const config = {
  nodeEnv: env.NODE_ENV,
  port: env.PORT,

  redis: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    user: env.REDIS_USER,
    password: env.REDIS_PASSWORD,
  },

  psql: {
    name: env.PSQL_NAME,
    host: env.PSQL_HOST,
    port: env.PSQL_PORT,
    user: env.PSQL_USER,
    password: env.PSQL_PASSWORD,
  },
};
