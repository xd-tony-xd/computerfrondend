  import { Component, OnInit } from '@angular/core';
  import { CategoryService } from '../../../services/category.service';
  import { Category } from '../../../interfaces/category';
import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-category-list',
    standalone: true, 
    imports: [CommonModule],
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
  })
  export class CategoryListComponent implements OnInit {
    items: Category[] = [];
    loading = true;

    constructor(private service: CategoryService) {}

    ngOnInit(): void {
      this.service.getAll().subscribe({
        next: data => {
          this.items = data;
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }
