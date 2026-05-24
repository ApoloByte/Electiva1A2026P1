import { useState } from 'react'

export interface Category {
  name: string
  description: string
}

export interface Product {
  name: string
  description: string
  imageUrl: string
  category: Category
  quantity: number
  price: number
  height: number
  width: number
  length: number
  isEnabled: boolean
}

interface RawProduct {
  name: string
  description: string
  image_url: string
  category: Category
  quantity: number
  price: number
  height: number
  width: number
  length: number
  isEnabled: boolean
}

// categorias usadas para asignar a cada producto
const categories: Category[] = [
  { name: 'Higiene Personal', description: 'Productos para el cuidado personal' },
  { name: 'Mascotas', description: 'Productos para el cuidado de mascotas' },
  { name: 'Alimentos', description: 'Productos alimenticios' },
]

// lista inicial con al menos cinco productos
const initialProducts: Product[] = [
  {
    name: 'Jabón de tocador',
    description: 'Aromático y suave',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/handmade-soap.jpg',
    category: categories[0],
    quantity: 80,
    price: 12000,
    height: 3,
    width: 5,
    length: 15,
    isEnabled: true,
  },
  {
    name: 'Comida para perros',
    description: 'Nutritiva y deliciosa',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/dog-food.jpg',
    category: categories[1],
    quantity: 50,
    price: 30000,
    height: 10,
    width: 20,
    length: 30,
    isEnabled: false,
  },
  {
    name: 'Pastel de moras',
    description: 'Dulce y cremoso',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/bakery.jpg',
    category: categories[2],
    quantity: 20,
    price: 15000,
    height: 5,
    width: 20,
    length: 20,
    isEnabled: true,
  },
  {
    name: 'Refresco de cola',
    description: 'Burbujeante y dulce',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/cola-drink.png',
    category: { name: 'Bebidas', description: 'Bebidas y refrescos' },
    quantity: 200,
    price: 2500,
    height: 15,
    width: 7,
    length: 7,
    isEnabled: false,
  },
  {
    name: 'Crema hidratante',
    description: 'Suaviza tu piel',
    imageUrl: 'https://electiva5-api.apolobyte.top/uploads/handmade-soap.jpg',
    category: categories[0],
    quantity: 40,
    price: 18000,
    height: 4,
    width: 6,
    length: 6,
    isEnabled: true,
  },
]

// convierte el producto del servidor al tipo usado en la app
const mapRemoteProduct = (product: RawProduct): Product => ({
  name: product.name,
  description: product.description,
  imageUrl: product.image_url,
  category: product.category,
  quantity: product.quantity,
  price: product.price,
  height: product.height,
  width: product.width,
  length: product.length,
  isEnabled: product.isEnabled,
})

// hook personalizado para leer la lista de productos
export const useProductList = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProductList = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products')
      if (!response.ok) {
        throw new Error('No se pudieron obtener los productos')
      }

      const remoteProducts = (await response.json()) as RawProduct[]
      console.log('productos remotos:', remoteProducts)
      setProducts(remoteProducts.map(mapRemoteProduct))
    } catch (err) {
      console.error(err)
      setError('error al cargar productos remotos')
    } finally {
      setLoading(false)
    }
  }

  return { products, loading, error, fetchProductList }
}
