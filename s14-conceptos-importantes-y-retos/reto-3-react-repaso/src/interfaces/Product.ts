import type { Category } from './Category';

export interface Product {
  name: string;
  description: string;
  image_url: string; 
  category: Category;
  quantity: number;
  price: number;
  height: number;
  width: number;
  length: number;
  isEnabled: boolean;
}