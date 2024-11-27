import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ACCESS_TOKEN_SECRET } from 'src/configs/environment.config';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    let decodedToken: any;
    try {
      decodedToken = this.jwtService.verify(token, {
        secret: ACCESS_TOKEN_SECRET,
      });
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }

    if (roles.includes(decodedToken.role.role_name)) {
      return true;
    } else {
      throw new ForbiddenException('Forbidden access');
    }
  }
}
