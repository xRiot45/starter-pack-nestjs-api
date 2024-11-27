import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

export function verifyJwtToken(
  configService: ConfigService,
  token: string,
): any {
  const secret = configService.get<string>('JWT_SECRET');
  return jwt.verify(token, secret);
}
