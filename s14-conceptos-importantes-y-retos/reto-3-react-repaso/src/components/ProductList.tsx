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

    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-100 p-8">

      {/* título */}
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">
        Lista de Productos
      </h1>

      {/* botón */}
      <div className="flex justify-center mb-10">

        <button
          onClick={fetchProducts}
          className="bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-600 transition"
        >
          Actualizar productos
        </button>

      </div>

      {/* map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product, index) => (

          // validación isEnabled
          product.isEnabled && (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
            >

              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-orange-600 mb-2">
                  {product.name}
                </h2>

                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                <div className="space-y-2 text-gray-700">

                  <p>
                    <span className="font-semibold">
                      Categoría:
                    </span>{" "}
                    {product.category.name}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Precio:
                    </span>{" "}
                    ${product.price}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Cantidad:
                    </span>{" "}
                    {product.quantity}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Altura:
                    </span>{" "}
                    {product.height}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Ancho:
                    </span>{" "}
                    {product.width}
                  </p>

                  <p>
                    <span className="font-semibold">
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