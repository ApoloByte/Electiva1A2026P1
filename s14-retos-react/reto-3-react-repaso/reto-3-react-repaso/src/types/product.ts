// 1. Interfaz secundaria para la Categoría
export interface Category {
  id: number;
  name: string;
}

// 2. Interfaz principal para el Producto (Contiene a la interfaz Category)
export interface Product {
  id: number;
  name: string;
  price: number;
  isEnabled: boolean;
  category: Category; // <-- Estructura compleja solicitada
}