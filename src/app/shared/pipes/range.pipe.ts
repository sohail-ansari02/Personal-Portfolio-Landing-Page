import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(range: number): number[] {
    return Array.from({ length: range }, (_, i) => i + 1);
  }
}
