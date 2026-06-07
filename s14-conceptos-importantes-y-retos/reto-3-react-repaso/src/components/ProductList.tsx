import { useState } from "react";

interface Category {
  name: string;
  description: string;
}

interface Product {
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

export const ProductList = () => {

  // categorías
  const categories: Category[] = [
    {
      name: "Aseo",
      description: "Productos de limpieza",
    },
    {
      name: "Alimentos",
      description: "Productos alimenticios",
    },
  ];

  // useState lista de productos
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Jabón",
      description: "Jabón antibacterial",
      image_url:
        "https://images.unsplash.com/photo-1584305574647-acf8069a3d31",
      category: categories[0],
      quantity: 10,
      price: 5000,
      height: 10,
      width: 5,
      length: 3,
      isEnabled: true,
    },
    {
      name: "Shampoo",
      description: "Shampoo para cabello",
      image_url:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
      category: categories[0],
      quantity: 8,
      price: 12000,
      height: 20,
      width: 6,
      length: 4,
      isEnabled: true,
    },
    {
      name: "Leche",
      description: "Leche deslactosada",
      image_url:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b",
      category: categories[1],
      quantity: 12,
      price: 4500,
      height: 15,
      width: 5,
      length: 5,
      isEnabled: true,
    },
    {
      name: "Galletas",
      description: "Galletas de chocolate",
      image_url:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
      category: categories[1],
      quantity: 30,
      price: 3000,
      height: 8,
      width: 8,
      length: 2,
      isEnabled: false,
    },
    {
      name: "Arroz",
      description: "Arroz premium",
      image_url:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      category: categories[1],
      quantity: 20,
      price: 6000,
      height: 18,
      width: 7,
      length: 5,
      isEnabled: true,
    },
  ]);

  // función asíncrona
  const fetchProducts = async () => {

  try {

    const response = await fetch(
      "https://electiva5-api.apolobyte.top/products"
    );

    const data = await response.json();

    console.log(data);

    // actualizar productos completos desde la API
    setProducts(data);

  } catch (error) {

    console.log(error);

  }
};

  return (

  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-violet-200 p-8">

    <h1 className="text-5xl font-extrabold text-center text-violet-800 mb-10">
      📦 Inventario de Productos
    </h1>

    <div className="flex justify-center mb-10">

      <button
        onClick={fetchProducts}
        className="bg-violet-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-violet-800 transition duration-300"
      >
        Actualizar Productos
      </button>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {products.map((product, index) => (

        product.isEnabled && (

          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-violet-300 hover:-translate-y-2 transition duration-300"
          >

            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <div className="flex justify-between items-center mb-3">

                <h2 className="text-2xl font-bold text-violet-700">
                  {product.name}
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Activo
                </span>

              </div>

              <p className="text-gray-600 mb-4">
                {product.description}
              </p>

              <div className="space-y-2 text-gray-700">

                <p>
                  <span className="font-bold">
                    Categoría:
                  </span>{" "}
                  {product.category.name}
                </p>

                <p className="text-lg font-bold text-indigo-600">
                  ${product.price}
                </p>

                <p>
                  <span className="font-bold">
                    Cantidad:
                  </span>{" "}
                  {product.quantity}
                </p>

                <p>
                  <span className="font-bold">
                    Altura:
                  </span>{" "}
                  {product.height}
                </p>

                <p>
                  <span className="font-bold">
                    Ancho:
                  </span>{" "}
                  {product.width}
                </p>

                <p>
                  <span className="font-bold">
                    Largo:
                  </span>{" "}
                  {product.length}
                </p>

              </div>

            </div>

          </div>

        )

      ))}

    </div>

  </div>

);
};
