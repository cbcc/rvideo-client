import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'content'
})
export class ContentPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value === null) {
      return '';
    }
    if (value.length <= length) {
      return value;
    }
    return value.slice(0, length - 3) + '...';
  }

}
