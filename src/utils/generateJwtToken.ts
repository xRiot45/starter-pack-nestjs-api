import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

export function generateJwtToken(
  configService: ConfigService,
  payload: any,
): string {
  const secret = configService.get<string>('JWT_SECRET');
  const expiresIn = configService.get<string>('JWT_EXPIRES_IN');
  return jwt.sign(payload, secret, { expiresIn });
}
