import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesServ {
  private categories:Category[] = [
    { id: 1, name: "Programming" },
    { id: 2, name: "Design" },
    { id: 3, name: "Business" },
    { id: 4, name: "Marketing" }
  ];

  getallCategories(): Category[] {
    return this.categories;
  } 

}
