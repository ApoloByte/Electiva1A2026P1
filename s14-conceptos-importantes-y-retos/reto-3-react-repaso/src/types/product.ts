// src/types/product.ts

export interface Category {
  name: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  image_url: string; // Nota: uso image_url como pide la imagen de verificación
  category: Category; // Aquí anidamos la interfaz Category
  quantity: number;
  price: number;
  height: number;
  width: number;
  length: number;
  isEnabled: boolean;
}