// sale-detail.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleDetail } from '../interfaces/sale-detail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleDetailService {
  private apiUrl = `${environment.apiBaseUrl}/SaleDetail`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<SaleDetail[]> {
    return this.http.get<SaleDetail[]>(this.apiUrl);
  }
}
