import { useState,useEffect } from "react";


    interface Category{
        name: string;
        description: string;
    }
    interface Product{
        name:string;
        description:string;
        image_url:string;
        category:Category;
        quantity:number;
        price:number;
        height:number;
        width:number;
        length:number;
        isEnabled:boolean;
    }
 export const Tienda=()=>{
        const categorias:Category[]=[
        {name:"Aseo",description:"productos de limpieza"},
        {name:"comida",description:"Alimentos"},
        ];
        const [products,setProducts] = useState<Product[]>([
            {name: "jabon",
             description:"antibacterial",
             image_url:"",
             category:categorias[0],
             quantity:10,
             price:1500,
             height:10,
             width:5,
             length:3,
             isEnabled:true,
            },
                {
            name: "Shampoo",
            description: "Cabello seco",
            image_url: "",
            category: categorias[0],
            quantity: 5,
            price: 8000,
            height: 20,
            width: 6,
            length: 4,
            isEnabled: true,
            },
            {
            name: "Arroz",
            description: "1kg",
            image_url: "",
            category: categorias[1],
            quantity: 50,
            price: 3000,
            height: 15,
            width: 10,
            length: 5,
            isEnabled: false,
            },
            {
            name: "Leche",
            description: "Entera",
            image_url: "",
            category: categorias[1],
            quantity: 20,
            price: 4000,
            height: 12,
            width: 5,
            length: 5,
            isEnabled: true,
            },
            {
            name: "Pan",
            description: "Integral",
            image_url: "",
            category: categorias[1],
            quantity: 15,
            price: 2500,
            height: 8,
            width: 6,
            length: 6,
            isEnabled: true,
            },
          ]);
         
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://electiva5-api.apolobyte.top/products");
      const data = await res.json();
      console.log("API 👉", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const loadFromAPI = async () => {
    try {
      const res = await fetch("https://electiva5-api.apolobyte.top/products");
      const data = await res.json();

      const newProducts: Product[] = data.map((item: any) => ({
        name: item.name,
        description: item.description,
        image_url: item.imageUrl || "",
        category: {
          name: "API",
          description: "Desde servidor",
        },
        quantity: 1,
        price: item.price,
        height: 0,
        width: 0,
        length: 0,
        isEnabled: true,
      }));

      setProducts(newProducts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={loadFromAPI}>Cargar productos API</button>

      <ul>
        {products
          .filter((p) => p.isEnabled) 
          .map((product, index) => (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
              <p>Categoría: {product.category.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
 }
