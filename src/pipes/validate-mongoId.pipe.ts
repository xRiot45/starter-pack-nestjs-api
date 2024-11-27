import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';

@Injectable()
export class ValidateMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value !== 'string' || !isMongoId(value)) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not a valid MongoDB ObjectId.`,
      );
    }
    return value;
  }
}
