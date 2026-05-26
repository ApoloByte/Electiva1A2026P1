import { useState } from "react";

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
}

const ProductList = () => {

  const categories: Category[] = [
    {
      name: "Aseo",
      description: "Productos de limpieza"
    },
    {
      name: "Tecnología",
      description: "Productos tecnológicos"
    },
    {
      name: "Comida",
      description: "Productos alimenticios"
    }
  ];

  const [products, setProducts] = useState<Product[]>([
    {
      name: "Jabón",
      description: "Jabón antibacterial",
      imageUrl: "https://via.placeholder.com/150",
      category: categories[0],
      quantity: 10,
      price: 5000,
      height: 10,
      width: 5,
      length: 3,
      isEnabled: true
    },
    {
      name: "Laptop",
      description: "Laptop gamer",
      imageUrl: "https://via.placeholder.com/150",
      category: categories[1],
      quantity: 5,
      price: 3500000,
      height: 4,
      width: 35,
      length: 25,
      isEnabled: true
    },
    {
      name: "Pan",
      description: "Pan integral",
      imageUrl: "https://via.placeholder.com/150",
      category: categories[2],
      quantity: 20,
      price: 2000,
      height: 2,
      width: 8,
      length: 12,
      isEnabled: false
    },
    {
      name: "Celular",
      description: "Smartphone Android",
      imageUrl: "https://via.placeholder.com/150",
      category: categories[1],
      quantity: 7,
      price: 1200000,
      height: 1,
      width: 8,
      length: 16,
      isEnabled: true
    },
    {
      name: "Detergente",
      description: "Detergente líquido",
      imageUrl: "https://via.placeholder.com/150",
      category: categories[0],
      quantity: 12,
      price: 15000,
      height: 25,
      width: 10,
      length: 8,
      isEnabled: false
    }
  ]);

  const fetchProducts = async (): Promise<void> => {

    try {

      const response = await fetch(
        "https://electiva5-api.apolobyte.top/products"
      );

      const data = await response.json();

      console.log(data);

      const formattedProducts: Product[] = data.map(
        (product: Product) => ({
          ...product
        })
      );

      setProducts(formattedProducts);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div>

      <h1>Lista de Productos</h1>

      <button onClick={() => void fetchProducts()}>
        Cargar productos API
      </button>

      {
        products.map((product, index) => (

          product.isEnabled && (

            <div key={index}>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <p>Categoría: {product.category.name}</p>

              <p>Cantidad: {product.quantity}</p>

              <p>Precio: ${product.price}</p>

              <p>Color: {product.category.description}</p>

              <img
                src={product.imageUrl}
                alt={product.name}
                width="150"
              />

              <hr />

            </div>
          )
        ))
      }

    </div>
  );
};

export default ProductList;