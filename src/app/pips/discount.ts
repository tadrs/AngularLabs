import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(course: Course, discountValue: number = 10): number {
    if (!course || !course.price) return 0;
    const discounted = course.price - (course.price * (discountValue / 100));
    course.price = Math.round(discounted * 100) / 100;

    return course.price;
  }
}
