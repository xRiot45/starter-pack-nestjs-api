import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not a valid date.`,
      );
    }
    return date;
  }
}
