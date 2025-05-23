import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleService } from '../../../services/sale.service';
import { Sale } from '../../../interfaces/sale';

@Component({
  selector: 'app-sale-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {
  items: Sale[] = [];
  loading = true;

  constructor(private service: SaleService) {}

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
