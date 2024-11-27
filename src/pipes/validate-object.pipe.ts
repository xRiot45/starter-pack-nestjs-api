import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidateObjectPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value !== 'object' || value === null) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not an object.`,
      );
    }
    return value;
  }
}
