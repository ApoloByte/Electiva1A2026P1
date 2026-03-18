Tienda Virtual Semana 5
aplicación web de tienda virtual
Permite visualizar productos, gestionar un carrito de compras y administrar el inventario mediante una API REST USANDO POSTMAN.

Tecnologias utilizadas:

Backend: Node.js, Express.

Base de Datos: better-sqlite3.

Frontend: JavaScript Vanilla y usando camelCase.

Instrucciones de ejecución

1. Preparación de la Base de Datos

Antes de iniciar el servidor, es necesario crear las tablas e insertar los datos iniciales. Si no se ha creado aun.

Abrimos una terminal en la carpeta que estamos trabajando.

Ejecuta el script de inicialización usando node:

node db.js

Esto creará el archivo database.db con las tablas products y cart_items

2. Levantar el Backend

El servidor se encarga de gestionar los productos y el carrito.

Se instala las dependencias si aun no esta hecho:

npm install express cors better-sqlite3 dotenv

Inicia el servidor:

node index.js

El servidor correrá en http://localhost:3000.

3. Levantar el Frontend

Para visualizar la interfaz de usuario:

Localiza el archivo index.html dentro de la carpeta Frontend.

Haz clic derecho sobre index.html y selecciona "Open with Live Server" en VS Code.

4. Puntos de enlace de la API (Endpoints)

Productos:

GET /products: Obtiene la lista de todos los productos.

POST /products: Crea un nuevo producto (usar JSON en Postman).

DELETE /products/:id: Elimina un producto por su ID.

Carrito

GET /cart: Muestra los productos en el carrito y el total calculado.

POST /cart: Agrega un producto al carrito (envía productId y quantity).

DELETE /cart/:id: Elimina un ítem específico del carrito.
