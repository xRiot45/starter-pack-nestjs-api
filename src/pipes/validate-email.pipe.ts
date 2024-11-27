import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidateEmailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof value !== 'string' || !emailRegex.test(value)) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not a valid email address.`,
      );
    }
    return value;
  }
}
