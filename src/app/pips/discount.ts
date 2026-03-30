import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountValue: number = 10): number {
    if (!value) {
        return 0;
    }
    return value - (value * (discountValue / 100));
  }
}