import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseFloatPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseFloat(value);
    if (isNaN(val)) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not a float.`,
      );
    }
    return val;
  }
}
