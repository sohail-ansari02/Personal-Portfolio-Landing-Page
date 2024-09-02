import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
  pure: true
  // default value is true, Pure pipes are only executed when the input value changes,
  // while impure pipes are executed on every change detection cycle,
  // regardless of whether the input value has changed.
})
export class RangePipe implements PipeTransform {
  transform(range: number): number[] {
    return Array.from({ length: range }, (_, i) => i + 1);
  }
}
