import { registerAs } from '@nestjs/config';

export default registerAs('security', () => ({
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: (
      process.env.CORS_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE'
    ).split(','),
    allowedHeaders: (process.env.CORS_ALLOWED_HEADERS || 'content-type').split(
      ',',
    ),
  },
  helmet: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'example.com'],
      },
    },
  },
}));
