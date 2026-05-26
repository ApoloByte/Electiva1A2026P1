import { useState, useEffect } from 'react'

interface Category {
  name: string;
  description: string;
}

interface Products {
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

export const ProductosApp = () => {
  const categorias: Category[] = [
    { name: 'Aseo', description: 'Productos de limpieza general' },
    { name: 'Hogar', description: 'Elementos para la casa' }
  ];

  const [products, setProducts] = useState<Products[]>([
    {
      name: 'Jabón',
      description: 'Jabón antibacterial para manos',
      image_url: '',
      category: categorias[0],
      quantity: 10,
      price: 3500,
      height: 10,
      width: 5,
      length: 3,
      isEnabled: true
    },
    {
      name: 'Esponja',
      description: 'Esponja para lavar platos',
      image_url: '',
      category: categorias[0],
      quantity: 25,
      price: 1500,
      height: 8,
      width: 6,
      length: 2,
      isEnabled: true
    },
    {
      name: 'Escoba',
      description: 'Escoba de cerdas suaves',
      image_url: '',
      category: categorias[0],
      quantity: 5,
      price: 8000,
      height: 120,
      width: 30,
      length: 5,
      isEnabled: false,
    },
    {
      name: 'Trapero',
      description: 'Trapero de algodón absorbente',
      image_url: '',
      category: categorias[0],
      quantity: 8,
      price: 7000,
      height: 130,
      width: 15,
      length: 5,
      isEnabled: true
    },
    {
      name: 'Ambientador',
      description: 'Ambientador spray olor lavanda',
      image_url: '',
      category: categorias[1],
      quantity: 12,
      price: 9500,
      height: 20,
      width: 6,
      length: 6,
      isEnabled: true
    }
  ]);

  const fetchModifiedProducts = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products');
      const data: Products[] = await response.json();

      console.log('Datos obtenidos de la API:', data);

      setProducts(data);
    } catch (error) {
      console.error('Error al obtener los productos de la API:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Lista de Productos Disponibles</h1>

      <button
        onClick={fetchModifiedProducts}
        style={{ padding: '10px 15px', marginBottom: '20px', cursor: 'pointer' }}
      >
        Cargar y Actualizar Productos desde API
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

        {products.map((producto, index) => (
          producto.isEnabled ? (
            <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
              <h2>{producto.name}</h2>
              <p><strong>Descripción:</strong> {producto.description}</p>
              <p><strong>Categoría:</strong> {producto.category.name} ({producto.category.description})</p>
              <p><strong>Precio:</strong> ${producto.price}</p>
              <p><strong>Cantidad en Stock:</strong> {producto.quantity}</p>
              <p><strong>Dimensiones:</strong> {producto.height}x{producto.width}x{producto.length} cm</p>
              {producto.image_url && (
                <img src={producto.image_url} alt={producto.name} style={{ maxWidth: '150px', display: 'block', marginTop: '10px' }} />
              )}
            </div>
          ) : null
        ))}
      </div>
    </div>
  )
}