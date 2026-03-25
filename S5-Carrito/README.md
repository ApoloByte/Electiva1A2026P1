# tienda virtual

tienda virtual basica con carrito usando express, better-sqlite3 y javascript vanilla.

## estructura

```
tienda-virtual/
├── backend/
│   ├── db.js          -- configuracion de la base de datos y seed
│   ├── index.js       -- servidor express y rutas api
│   ├── .env.example   -- variables de entorno de ejemplo
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── schema.sql         -- script sql de referencia
```

## levantar el backend

```bash

cd backend
npm init -y
npm install express cors better-sqlite3 dotenv


cp .env.example .env
npm start
# -> servidor corriendo en http://localhost:3000
```

la base de datos se crea automaticamente en backend/tienda.db al primer inicio.

## levantar el frontend

abrir frontend/index.html directamente en el navegador.

## rutas del api

| metodo | ruta          | descripcion                               |
|--------|---------------|-------------------------------------------|
| GET    | /products     | todos los productos                       |
| GET    | /products/:id | un producto por id                        |
| GET    | /cart         | items del carrito con subtotales y total  |
| POST   | /cart         | agregar item { productId, quantity }      |
| DELETE | /cart/:id     | eliminar un item del carrito              |
| DELETE | /cart         | vaciar todo el carrito                    |

## variables de entorno

| variable | valor por defecto | descripcion                       |
|----------|-------------------|-----------------------------------|
| PORT     | 3000              | puerto del servidor               |
| DB_PATH  | ./tienda.db       | ruta del archivo de base de datos |