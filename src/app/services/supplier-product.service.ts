// supplier-product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierProduct } from '../interfaces/supplier-product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierProductService {
  private apiUrl = `${environment.apiBaseUrl}/SupplierProduct`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<SupplierProduct[]> {
    return this.http.get<SupplierProduct[]>(this.apiUrl);
  }
}
