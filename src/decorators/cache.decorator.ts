import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

export const Cache = (key: string, ttl: number) => {
  return applyDecorators(
    UseInterceptors(CacheInterceptor),
    CacheKey(key),
    CacheTTL(ttl),
  );
};
