import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierProductService } from '../../../services/supplier-product.service';
import { SupplierProduct } from '../../../interfaces/supplier-product';


@Component({
  selector: 'app-supplier-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-product-list.component.html',
  styleUrls: ['./supplier-product-list.component.scss'],
  providers: [SupplierProductService]
})
export class SupplierProductListComponent implements OnInit {
  items: SupplierProduct[] = [];
  loading = true;

  constructor(private service: SupplierProductService) {}

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
