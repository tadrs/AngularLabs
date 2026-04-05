import { Component, inject, OnChanges, EventEmitter, Input, Output, signal, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DisableAfterClickDirective } from '../../directives/direct1';
import { CoursesServ } from '../../services/courses-serv';
import { Router, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, NgClass, DisableAfterClickDirective, RouterLink],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class Courses implements OnInit, OnChanges, OnDestroy {
  private rout = inject(Router);
  private Coursesapi = inject(CoursesServ); 
  
  totalprice: number = 0;
  @Input("setCategoryId") CatId: number = 0;
  @Output() onTotalPriceChange: EventEmitter<number> = new EventEmitter<number>();
  
  courses = signal<Course[]>([]);
  filteredCourses = signal<Course[]>([]);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.Coursesapi.getCoursesByCategoryId(this.CatId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.filteredCourses.set(res);
        },
        error: (err) => console.error('Filter Error:', err)
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['CatId']) {
      this.loadData();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  register(course: Course) {
    if (course.seats > 0) {
      course.seats -= 1; 
    }
    this.totalprice += course.price;
    this.onTotalPriceChange.emit(this.totalprice);
  }

  nagivateToDetails(courseId: number) {
    this.rout.navigate(['/course-details', courseId]);
  }
}