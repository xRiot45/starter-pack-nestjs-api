import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class TransformEnumPipe implements PipeTransform {
  constructor(private readonly enumType: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (this.enumType && Object.values(this.enumType).includes(value)) {
      return value;
    }
    throw new BadRequestException(
      `Validation failed. "${metadata.data}" is not a valid value for the ${this.enumType.name} enum.`,
    );
  }
}
