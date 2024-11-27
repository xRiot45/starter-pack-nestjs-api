import { registerAs } from '@nestjs/config';

export default registerAs('tracing', () => ({
  enabled: process.env.TRACING_ENABLED === 'true',
  serviceName: process.env.TRACING_SERVICE_NAME || 'my-app',
  instrumentations: ['http', 'express', 'fastify', 'mysql', 'redis'],
}));
