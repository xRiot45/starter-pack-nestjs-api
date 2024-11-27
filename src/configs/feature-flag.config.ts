import { registerAs } from '@nestjs/config';

export default registerAs('feature-flags', () => ({
  enabled: process.env.FEATURE_FLAGS_ENABLED === 'true',
  store: process.env.FEATURE_FLAGS_STORE || 'memory', // memory, redis, database
}));
