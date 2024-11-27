import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { isFileType } from 'src/utils/isFileType';

@Injectable()
export class ValidateFileTypePipe implements PipeTransform {
  constructor(private readonly allowedTypes: string[]) {}

  transform(file: any, metadata: ArgumentMetadata) {
    if (!file || !isFileType(file, this.allowedTypes)) {
      throw new BadRequestException(
        `Validation failed. "${metadata.data}" is not a valid file type. Allowed types: ${this.allowedTypes.join(', ')}`,
      );
    }
    return file;
  }
}
