import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidateArrayPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!Array.isArray(value)) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not an array.`,
      );
    }
    return value;
  }
}
