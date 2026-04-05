import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesServ {
  private baseUrl = `${environment.apiUrl}/courses`; 

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  getCoursesByCategoryId(catId: any): Observable<Course[]> {
    const id = Number(catId);   
    if (id === 0 || isNaN(id)) {
      return this.getAllCourses();
    }
    
    return this.http.get<Course[]>(this.baseUrl, {
      params: { catId: id.toString() }
    });
  }

  getCourseById(id: any): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }
}