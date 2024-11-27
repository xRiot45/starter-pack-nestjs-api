import { registerAs } from '@nestjs/config';

export default registerAs('caching', () => ({
  ttl: parseInt(process.env.CACHE_TTL, 10) || 3600, // Cache time to live in seconds
  max: parseInt(process.env.CACHE_MAX, 10) || 1000, // Maximum number of items in cache
  store: process.env.CACHE_STORE || 'memory', // Cache store (memory, redis, etc.)
}));
