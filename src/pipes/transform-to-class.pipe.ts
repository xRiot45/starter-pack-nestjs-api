import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TransformToClassPipe implements PipeTransform {
  constructor(private readonly classType: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    return plainToInstance(this.classType, value, {
      excludeExtraneousValues: true,
    });
  }
}
