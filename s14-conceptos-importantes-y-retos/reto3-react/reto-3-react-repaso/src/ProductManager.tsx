import { useState, useEffect } from 'react'

interface Category {
  name: string
  description: string
}

interface Product {
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

const electronics: Category = { name: 'Electrónica', description: 'Productos electrónicos' }
const food: Category = { name: 'Alimentos', description: 'Productos alimenticios' }

function ProductManager() {
  const [products, setProducts] = useState<Product[]>([
    { name: 'Laptop', description: 'Laptop gamer', image_url: '', category: electronics, quantity: 10, price: 1500, height: 2, width: 35, length: 25, isEnabled: true },
    { name: 'Mouse', description: 'Mouse inalámbrico', image_url: '', category: electronics, quantity: 50, price: 25, height: 4, width: 10, length: 6, isEnabled: true },
    { name: 'Pan', description: 'Pan integral', image_url: '', category: food, quantity: 100, price: 2, height: 10, width: 15, length: 20, isEnabled: false },
    { name: 'Leche', description: 'Leche entera', image_url: '', category: food, quantity: 200, price: 3, height: 20, width: 8, length: 8, isEnabled: true },
    { name: 'Teclado', description: 'Teclado mecánico', image_url: '', category: electronics, quantity: 30, price: 80, height: 3, width: 45, length: 15, isEnabled: true },
  ])

  const fetchProducts = async () => {
    const response = await fetch('https://electiva5-api.apolobyte.top/products')
    const data = await response.json()
    console.log(data)
    setProducts(data)
  }

  return (
    <div>
      <button onClick={fetchProducts}>Cargar productos del API</button>
      {products.map((product, index) => (
        product.isEnabled ? (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>Descripción: {product.description}</p>
            <p>Categoría: {product.category.name}</p>
            <p>Precio: {product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>isEnabled: {product.isEnabled ? 'true' : 'false'}</p>
          </div>
        ) : null
      ))}
    </div>
  )
}

export default ProductManager