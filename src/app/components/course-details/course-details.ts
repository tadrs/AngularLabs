import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { ActivatedRoute } from '@angular/router';
import { CoursesServ } from '../../services/courses-serv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private coursesService = inject(CoursesServ);
  
  id: string = "";
  course: Course | null = null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      
      this.coursesService.getCourseById(+this.id).subscribe({
        next: (data) => {
          this.course = data;
        },
        error: (err) => {
          console.error('Course not found!', err);
        }
      });
    });
  }
}