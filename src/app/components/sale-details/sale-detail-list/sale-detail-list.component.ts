import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleDetailService } from '../../../services/sale-detail.service';
import { SaleDetail } from '../../../interfaces/sale-detail';


@Component({
  selector: 'app-sale-detail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale-detail-list.component.html',
  styleUrls: ['./sale-detail-list.component.scss'],
  providers: [SaleDetailService]
})
export class SaleDetailListComponent implements OnInit {
  items: SaleDetail[] = [];
  loading = true;

  constructor(private service: SaleDetailService) {}

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
