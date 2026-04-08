# API REST con Node.js, Express y SQLite

## Descripción

Este proyecto implementa una API REST que permite gestionar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), utilizando Node.js, Express y una base de datos SQLite.


## Tecnologías utilizadas

- Node.js
- Express
- SQLite3
- Body-parser


## Instalación

1. Inicializar el proyecto:

```bash
npm init -y
Instalar dependencias:
npm install express sqlite3 body-parser
Ejecutar el servidor:
node server.js
Endpoints
Obtener todos los productos
GET /productos
Saludo dinámico
GET /hello/:nombre

Ejemplo:

/hello/Juan → ¡Hola, Juan!
Crear producto
POST /productos

Body:

{
  "nombre": "Producto",
  "precio": 1000
}
Actualizar producto
PUT /productos/:id

Body:

{
  "nombre": "Producto actualizado",
  "precio": 2000
}
Eliminar producto
DELETE /productos/:id
Validación de datos

En las solicitudes POST y PUT:

El campo nombre es obligatorio
El campo precio es obligatorio

Si falta alguno, la API responde con un error 400.

Base de datos

Se utiliza SQLite como base de datos local.

Tabla: productos

id (INTEGER PRIMARY KEY)
nombre (TEXT)
precio (REAL)
Concepto REST
GET → Obtener datos
POST → Crear datos
PUT → Actualizar datos
DELETE → Eliminar datos
Pruebas

Se pueden realizar pruebas con:

Navegador (para GET)
Postman o Thunder Client (para POST, PUT, DELETE)
Autor

Carlos Andrés Gaviria