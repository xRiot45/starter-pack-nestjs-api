import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class ValidateUUIDPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value !== 'string' || !isUUID(value)) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not a valid UUID.`,
      );
    }
    return value;
  }
}
