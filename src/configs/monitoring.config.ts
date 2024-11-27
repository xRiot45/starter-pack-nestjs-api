import { registerAs } from '@nestjs/config';

export default registerAs('monitoring', () => ({
  enabled: process.env.MONITORING_ENABLED === 'true',
  provider: process.env.MONITORING_PROVIDER || 'datadog',
  apiKey: process.env.MONITORING_API_KEY,
}));
