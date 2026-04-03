import { Component, inject } from '@angular/core';
import { CategoriesServ } from '../../services/categories-serv';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-home',
  imports: [Courses,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  selectedCatId: number = 0;
  totalprice: number = 0;
  private categoriesService = inject(CategoriesServ);
  categories: Category[] = this.categoriesService.getallCategories();

  setTotalPrice(price: number) {
    this.totalprice = price;
  }

  
}
