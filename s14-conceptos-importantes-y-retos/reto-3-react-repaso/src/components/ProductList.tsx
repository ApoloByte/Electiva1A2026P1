import { useEffect, useState } from "react";

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
            image_url: "https://picsum.photos/200",
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
            image_url: "https://picsum.photos/201",
            category: categories[1],
            quantity: 3,
            price: 3000000,
            height: 5,
            width: 30,
            length: 20,
            isEnabled: true
        },

        {
            name: "Pan",
            description: "Pan integral",
            image_url: "https://picsum.photos/202",
            category: categories[2],
            quantity: 15,
            price: 2000,
            height: 2,
            width: 10,
            length: 15,
            isEnabled: false
        },

        {
            name: "Mouse",
            description: "Mouse inalámbrico",
            image_url: "https://picsum.photos/203",
            category: categories[1],
            quantity: 7,
            price: 80000,
            height: 4,
            width: 8,
            length: 12,
            isEnabled: true
        },

        {
            name: "Shampoo",
            description: "Shampoo herbal",
            image_url: "https://picsum.photos/204",
            category: categories[0],
            quantity: 20,
            price: 15000,
            height: 25,
            width: 7,
            length: 7,
            isEnabled: false
        }

    ]);

    const fetchProducts = async () => {

        const response = await fetch(
            "https://electiva5-api.apolobyte.top/products"
        );

        const data = await response.json();

        console.log(data);
        setProducts(data);
    }

    useEffect(() => {

        fetchProducts();

    }, []);

                const handleLoadProducts = () => {
                fetchProducts();
                 }

    return (
        <div>

            <h2>Lista de productos</h2>
            <button onClick={handleLoadProducts}>
                Cargar productos
            </button>

            {
                products.map((product, index) => (

                    product.isEnabled && (

                        <div key={index}>

                            <h3>{product.name}</h3>

                            <img
                                src={product.image_url}
                                alt={product.name}
                                width="200"
                            />

                            <p>{product.description}</p>

                            <p>
                                Categoría:
                                {" "}
                                {product.category.name}
                            </p>

                            <p>Precio: {product.price}</p>

                            <p>Cantidad: {product.quantity}</p>

                        </div>

                    )

                ))
            }

        </div>
    )
}