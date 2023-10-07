import 'dotenv/config';
import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
});

export const config = {
  nodeEnv: env.NODE_ENV,
};
