import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseBooleanPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = value === 'true';
    if (typeof val !== 'boolean') {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not a boolean.`,
      );
    }
    return val;
  }
}
