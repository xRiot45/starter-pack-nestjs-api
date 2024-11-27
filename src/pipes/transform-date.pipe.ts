import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { isDate } from 'class-validator';

@Injectable()
export class TransformDatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (isDate(value)) {
      return value;
    }
    if (typeof value === 'string' || typeof value === 'number') {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date;
      }
    }
    return value;
  }
}
