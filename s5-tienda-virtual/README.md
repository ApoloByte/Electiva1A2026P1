# Mi Tienda de Garaje

Este proyecto es una aplicación web básica de una tienda online de garaje con carrito de compras.
Está construida con:

* **Backend:** Node.js + Express
* **Base de datos:** SQLite (better-sqlite3)
* **Frontend:** HTML, CSS y JavaScript

---

# Requisitos

Primero que todo necesitamos tener instalado:

* Node.js 
* npm (incluido con Node)


---

# Instalación

## Clonar o descargar el proyecto

```bash
git clone <url-del-repo>
cd nombre-del-proyecto
```

---

## Instalar dependencias del backend

```bash
npm install express cors better-sqlite3
```

---

# Base de Datos

La base de datos se configura automaticamente

Al ejecutar el servidor por primera vez

* Se crea automáticamente el archivo `tienda.db`
* Se crean las tablas:

  * `products`
  * `cart_items`
* Se insertan productos iniciales

---

# Ejecutar el Backend

```bash
node index.js
```
Si se tiene la extencion: 

```bash
nodemon index.js
```

Deberías ver en consola:

```bash
Servidor de la tienda corriendo en http://localhost:3000
```

---

# Ejecutar el Frontend

Hay distintas opciones

## Opción 1

Abrir directamente el archivo:

```bash
index.html
```

## Opción 2

Usar una extensión como Live Server.

---

# Endpoints del Backend

## Productos

* `GET /products` → Obtener todos los productos
* `GET /products/:id` → Obtener producto por ID

---

## Carrito

* `GET /cart` → Obtener carrito
* `POST /cart` → Agregar producto


* `DELETE /cart/:id` → Eliminar producto del carrito

---

# Cómo funciona el proyecto

1. El frontend solicita productos al backend (`/products`)
2. Se renderizan en pantalla
3. Al hacer clic en "Agregar al carrito":
   * Se envía un `POST /cart`
4. El carrito se actualiza dinámicamente
5. Se calcula el total automáticamente

---




