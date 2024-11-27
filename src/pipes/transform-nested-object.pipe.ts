import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class TransformNestedObjectPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'object' && value !== null) {
      return this.transformObject(value);
    }
    return value;
  }

  private transformObject(obj: any): any {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          obj[key] = this.transformObject(obj[key]);
        }
      }
    }
    return obj;
  }
}
