# Tienda Virtual con Carrito

## Descripción

Este proyecto consiste en el desarrollo de una tienda virtual básica que permite visualizar productos, 
agregarlos a un carrito de compras y calcular el total a pagar.

La aplicación está dividida en:

- **Backend**: API REST construida con Express y SQLite
- **Frontend**: Interfaz en HTML, CSS y JavaScript Vanilla


## Objetivos

- Implementar una base de datos relacional con productos y carrito
- Desarrollar un backend con Express que exponga endpoints REST
- Crear un frontend dinámico que consuma la API
- Integrar completamente frontend y backend


## Estructura del proyecto


tienda/
│
├── backend/
│ ├── app.js
│ ├── db.js
│ ├── database.sqlite
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── index.html
│ ├── styles.css
│ └── app.js
│
└── README.md


## 🗄️ Base de Datos

Se utiliza SQLite mediante `better-sqlite3`.

### Tabla: products

| Campo      | Tipo    | Descripción              |
|------------|--------|--------------------------|
| id         | INTEGER | PK, autoincremental     |
| name       | TEXT    | Nombre del producto     |
| price      | REAL    | Precio                  |
| image_url  | TEXT    | URL de imagen (opcional)|

### Tabla: cart_items

| Campo       | Tipo    | Descripción                  |
|------------|--------|------------------------------|
| id         | INTEGER | PK, autoincremental         |
| product_id | INTEGER | FK a products               |
| quantity   | INTEGER | Cantidad del producto       |

---

## Instalación y ejecución

### 1. Clonar o descargar el proyecto

```bash
git clone <repositorio>
2. Backend

Entrar a la carpeta:

cd backend

Instalar dependencias:

npm install

Ejecutar servidor:

node app.js

El servidor se ejecuta en:

http://localhost:3000
3. Frontend

Abrir el archivo:

frontend/index.html

en el navegador (doble clic o Live Server).

Endpoints de la API
Productos

GET /products
Obtiene todos los productos

GET /products/:id
Obtiene un producto por ID

Carrito

GET /cart
Obtiene todos los productos del carrito y el total

POST /cart
Agrega un producto al carrito

{
  "productId": 1,
  "quantity": 1
}

DELETE /cart/:id
Elimina un producto del carrito

DELETE /cart
Vacía todo el carrito

 Funcionamiento

El frontend realiza peticiones al backend mediante fetch

El backend consulta la base de datos SQLite

Se devuelven los datos en formato JSON

El frontend renderiza dinámicamente productos y carrito

El total se calcula en el backend

-------------------------------------------------------------------
Funcionalidades implementadas

Listado de productos

Agregar productos al carrito

Visualización del carrito

Eliminación de productos

Cálculo de total

Vaciado del carrito
-----------------------------------------------------------------

Consideraciones técnicas

Se utiliza arquitectura cliente-servidor

Se implementa separación de responsabilidades (frontend/backend)

La lógica del negocio se encuentra en el backend

El frontend es dinámico sin uso de frameworks
---------------------------------------------------------------

Mejoras futuras

Implementación de autenticación de usuarios

Persistencia de carrito por usuario

Integración de pasarela de pagos

Mejora en diseño UI/UX

Uso de framework frontend (React o Vue)

Autor
Carlos Gaviria