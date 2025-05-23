export interface Sale {
    saleId: string;
  customerId: string;
  customer: any | null;
  userId: string;
  user: any | null;
  date: string;
  total: number;
  paymentMethod: string;
  saleDetails: any[] | null;
}


