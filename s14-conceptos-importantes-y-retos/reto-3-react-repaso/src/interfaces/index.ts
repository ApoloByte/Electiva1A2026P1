// Paso 2a: Interface Category
export interface Category {
  name: string;
  description: string;
}

// Paso 2b: Interface Product
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