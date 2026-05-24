import React, { useEffect, useState } from 'react';

interface Category {
  name: string;
  description: string;
}

interface Product {
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
  age?: number;
  color?: string;
}

const categories: Category[] = [
  { name: 'Hogar', description: 'Productos para el hogar' },
  { name: 'Cuidado', description: 'Cuidado personal' },
  { name: 'Alimentos', description: 'Comestibles y snacks' },
];

const initialProducts: Product[] = [
  {
    name: 'Jabón antibacterial',
    description: 'Jabón líquido antibacterial 500ml',
    imageUrl: '',
    category: categories[1],
    quantity: 10,
    price: 5.99,
    height: 10,
    width: 5,
    length: 4,
    isEnabled: true,
  },
  {
    name: 'Lavaplatos',
    description: 'Detergente para platos 1L',
    imageUrl: '',
    category: categories[0],
    quantity: 6,
    price: 3.5,
    height: 12,
    width: 6,
    length: 5,
    isEnabled: true,
  },
  {
    name: 'Galletas',
    description: 'Galletas integrales 200g',
    imageUrl: '',
    category: categories[2],
    quantity: 20,
    price: 2.25,
    height: 3,
    width: 10,
    length: 15,
    isEnabled: false,
  },
  {
    name: 'Cepillo dental',
    description: 'Cepillo suave con diseño ergonómico',
    imageUrl: '',
    category: categories[1],
    quantity: 12,
    price: 1.5,
    height: 18,
    width: 2,
    length: 3,
    isEnabled: true,
  },
  {
    name: 'Toallas de cocina',
    description: 'Paquete de 3 toallas absorbentes',
    imageUrl: '',
    category: categories[0],
    quantity: 8,
    price: 4.0,
    height: 1,
    width: 30,
    length: 40,
    isEnabled: true,
  },
];

export const ProductsManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const fetchProductsFromApi = async (): Promise<unknown> => {
    try {
      const res = await fetch('https://electiva5-api.apolobyte.top/products');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('fetchProductsFromApi error:', err);
      return null;
    }
  };

  const updateProductsFromApi = async () => {
    const data = await fetchProductsFromApi();
    if (!data || !Array.isArray(data)) return;

    const fallbackColors = ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Negro'];

    setProducts((prev) =>
      prev.map((p, i) => {
        const remote = data[i] as Record<string, unknown> | undefined;
        if (!remote) return p;
        const newName = typeof remote.name === 'string' ? remote.name : p.name;
        const newAge =
          typeof remote.age === 'number'
            ? remote.age
            : Math.floor(Math.random() * 100);
        const newColor =
          typeof remote.color === 'string'
            ? (remote.color as string)
            : fallbackColors[i % fallbackColors.length];
        return {
          ...p,
          name: newName,
          age: newAge,
          color: newColor,
        };
      })
    );
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await fetchProductsFromApi();
      if (mounted && data) {
        setProducts(data as Product[]);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>

      <div className="mb-4">
        <button
          className="px-3 py-2 bg-blue-600 text-white rounded"
          onClick={updateProductsFromApi}
        >
          Actualizar productos desde API
        </button>
      </div>

      <ul className="space-y-4">
        {products
          .filter((p) => p.isEnabled)
          .map((p, idx) => (
            <li key={`${p.name}-${idx}`} className="border p-4 rounded">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-sm text-gray-700">{p.description}</p>
              <p className="text-sm">Categoría: {p.category.name}</p>
              <p className="text-sm">Precio: ${p.price}</p>
              <p className="text-sm">Cantidad: {p.quantity}</p>
              {p.age !== undefined && <p className="text-sm">Edad: {p.age}</p>}
              {p.color && <p className="text-sm">Color: {p.color}</p>}
            </li>
          ))}
      </ul>
    </section>
  );
};
