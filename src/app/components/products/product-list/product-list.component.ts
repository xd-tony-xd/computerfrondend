import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  items: Product[] = [];
  loading = true;

  constructor(private service: ProductService) {}

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
