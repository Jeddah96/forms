import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
  transform(value: number): number {
    // const vals = value.toString();
    // const chartVal = vals.charAt(5);
    // const conv = parseFloat(chartVal);
    // if (conv >= 7) {
    //   value.toFixed(2);
    // }
      return Math.floor(value * 100) / 100;
  }
}
