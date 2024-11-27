import { applyDecorators, SetMetadata, UseInterceptors } from '@nestjs/common';
import { ClassSerializerInterceptor } from '@nestjs/common';

export const Serialize = (...groups: string[]) => {
  return applyDecorators(
    UseInterceptors(ClassSerializerInterceptor),
    SetMetadata('serialization:groups', groups),
  );
};
