export interface Product {
    productId: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
    categoryId: string;
    category: any | null;
    supplierProducts: any[] | null;
    saleDetails: any[] | null;
}
