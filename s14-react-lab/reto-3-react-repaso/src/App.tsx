import { useEffect, useState } from 'react'
import ProductTitle from './components/ProductTitle'
import type { Category, Product } from './types/Product'
import { mapApiProductToProduct, type ProductApiResponse } from './types/Product'

const categories: Category[] = [
  { name: 'Higiene Personal', description: 'Productos para el cuidado personal' },
  { name: 'Mascotas', description: 'Productos para el cuidado de mascotas' },
  { name: 'Alimentos', description: 'Productos alimenticios' },
  { name: 'Bebidas', description: 'Bebidas y refrescos' },
  { name: 'Limpieza', description: 'Productos de limpieza del hogar' },
]

const initialProducts: Product[] = [
  {
    name: 'Jabón',
    description: 'Jabón antibacterial',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/handmade-soap.jpg',
    category: categories[0],
    quantity: 50,
    price: 5000,
    height: 3,
    width: 5,
    length: 10,
    isEnabled: true,
  },
  {
    name: 'Croquetas',
    description: 'Comida para perro adulto',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/dog-food.jpg',
    category: categories[1],
    quantity: 30,
    price: 25000,
    height: 10,
    width: 15,
    length: 25,
    isEnabled: false,
  },
  {
    name: 'Pastel',
    description: 'Pastel de vainilla',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/bakery.jpg',
    category: categories[2],
    quantity: 10,
    price: 12000,
    height: 8,
    width: 20,
    length: 20,
    isEnabled: true,
  },
  {
    name: 'Gaseosa',
    description: 'Refresco de cola 350ml',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/cola-drink.png',
    category: categories[3],
    quantity: 100,
    price: 3000,
    height: 12,
    width: 6,
    length: 6,
    isEnabled: false,
  },
  {
    name: 'Detergente',
    description: 'Detergente líquido multiusos',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/handmade-soap.jpg',
    category: categories[4],
    quantity: 40,
    price: 8000,
    height: 20,
    width: 8,
    length: 8,
    isEnabled: true,
  },
]

const PRODUCTS_API_URL = 'https://electiva5-api.apolobyte.top/products'

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const fetchProducts = async () => {
    const response = await fetch(PRODUCTS_API_URL)
    const data: ProductApiResponse[] = await response.json()
    console.log('Productos desde API:', data)
    return data
  }

  const updateProductsFromApi = async () => {
    const data = await fetchProducts()
    setProducts(data.map(mapApiProductToProduct))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <ProductTitle />

      <button type="button" onClick={updateProductsFromApi}>
        Actualizar productos desde API
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) =>
          product.isEnabled ? (
            <li key={product.name} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <p>
                <strong>Nombre:</strong> {product.name}
              </p>
              <p>
                <strong>Descripción:</strong> {product.description}
              </p>
              <p>
                <strong>Categoría:</strong> {product.category.name} —{' '}
                {product.category.description}
              </p>
              <p>
                <strong>Cantidad:</strong> {product.quantity}
              </p>
              <p>
                <strong>Precio:</strong> ${product.price.toLocaleString('es-CO')}
              </p>
              <p>
                <strong>Dimensiones:</strong> {product.height} x {product.width} x{' '}
                {product.length} cm
              </p>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  )
}

export default App
