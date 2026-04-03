import { Component, inject, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { DiscountPipe } from '../../pips/discount'
import { DisableAfterClickDirective } from '../../directives/direct1';
import { CoursesServ } from '../../services/courses-serv';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class Courses {
  totalprice: number = 0;
  @Input("setCategoryId") CatId: number = 0;
  @Output() onTotalPriceChange: EventEmitter<number> = new EventEmitter<number>();
  private Courses = inject(CoursesServ); 
  crses: Course[] = this.Courses.getAllCourses();
  filteredCourses: Course[] = this.crses;

  ngOnChanges() {
    if (this.CatId == 0) {
      this.filteredCourses = this.crses;
    } else {
      this.filteredCourses = this.crses.filter(c => c.catId == this.CatId);
    }
  }

  register(course: Course) {
    if (course.seats > 0) {
      course.seats -= 1; 
    }
    this.totalprice += course.price;
    this.onTotalPriceChange.emit(this.totalprice);
  }

  

}