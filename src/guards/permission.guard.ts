import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class PermissionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Logika untuk memeriksa apakah pengguna memiliki izin yang diperlukan
    if (user.permissions.includes('admin')) {
      return true;
    } else {
      return false;
    }
  }
}
