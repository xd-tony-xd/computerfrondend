export interface Supplier {
    supplierId: string;
  name: string;
  taxId: string;
  phone: string;
  address: string;
  supplierProducts: any[] | null;
}
