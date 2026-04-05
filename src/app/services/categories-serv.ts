import { inject, Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesServ {

  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`,{
      headers: {
        token: 'eyJhbGciOi'
      }
    });
  }

  

}
