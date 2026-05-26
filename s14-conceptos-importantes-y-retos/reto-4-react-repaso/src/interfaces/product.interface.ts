export interface Category {
  name: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  quantity: number;
  price: number;
  height: number;
  width: number;
  length: number;
  isEnabled: boolean;
}