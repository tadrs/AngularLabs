import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CategoriesServ } from '../../services/categories-serv';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category';
import { Courses } from '../courses/courses';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Courses, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  selectedCatId: number = 0;
  totalprice: number = 0;
  private categoriesService = inject(CategoriesServ);
  categories = signal<Category[]>([]);
  
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.categoriesService.getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.categories.set(res);
        },
        error: (err) => {
          console.error('Error fetching categories:', err);
        }
      });
  }

  setTotalPrice(price: number) {
    this.totalprice = price;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}