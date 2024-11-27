import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

// Fungsi UserDecorator untuk mendapatkan data user
export const UserDecorator = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user) {
      return user;
    } else {
      throw new UnauthorizedException('Unauthorized');
    }
  },
);
