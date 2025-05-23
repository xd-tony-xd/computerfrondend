import { Routes } from '@angular/router';

import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SaleDetailListComponent } from './components/sale-details/sale-detail-list/sale-detail-list.component';
import { SaleListComponent } from './components/sales/sale-list/sale-list.component';
import { SupplierProductListComponent } from './components/supplier-products/supplier-product-list/supplier-product-list.component';
import { SupplierListComponent } from './components/suppliers/supplier-list/supplier-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

export const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'sale-details', component: SaleDetailListComponent },
  { path: 'sales', component: SaleListComponent },
  { path: 'supplier-products', component: SupplierProductListComponent },
  { path: 'suppliers', component: SupplierListComponent },
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },  // ruta por defecto
];
