import { registerAs } from '@nestjs/config';

export default registerAs('metric', () => ({
  enabled: process.env.METRIC_ENABLED === 'true',
  port: parseInt(process.env.METRIC_PORT, 10) || 9100,
  path: process.env.METRIC_PATH || '/metrics',
}));
