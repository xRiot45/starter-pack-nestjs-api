import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

export const Throttle = (limit: number, ttl: number) => {
  return applyDecorators(
    SetMetadata('throttle', { limit, ttl }),
    UseGuards(ThrottlerGuard),
  );
};
