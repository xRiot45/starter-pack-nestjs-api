import { registerAs } from '@nestjs/config';

export default registerAs('queue', () => ({
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10),
    password: process.env.REDIS_PASSWORD,
  },
  defaultQueue: process.env.QUEUE_DEFAULT_NAME || 'default',
  maxRetries: parseInt(process.env.QUEUE_MAX_RETRIES, 10) || 3,
}));
