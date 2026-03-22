# Ejercicio – Tienda virtual con carrito (Express + BD + Vanilla)

## Objetivo

Crear una tienda virtual básica donde se implemente:

- Una base de datos con productos y una tabla para el carrito.
- Un backend en Express que exponga un API REST para productos y carrito.
- Un frontend en HTML, CSS y JavaScript que permita listar productos, agregarlos al carrito y ver el total.

## Requisitos funcionales

- Ver un listado de productos disponibles (nombre, precio, imagen opcional).
- Agregar productos al carrito con una cantidad.
- Ver el carrito con total a pagar y poder eliminar ítems.
- No es necesario implementar pagos reales, solo simulación de compra.

---

## 1. Diseño de la base de datos

Para la base de datos use `better-sqlite3` disponible en Node.

### Tabla `products`

| Columna     | Tipo      | Restricciones              |
|-------------|-----------|----------------------------|
| `id`        | INTEGER   | PK, autoincremental        |
| `name`      | TEXT      | NOT NULL                   |
| `price`     | NUMERIC   | NOT NULL                   |
| `image_url` | TEXT      | Opcional                   |

### Tabla `cart_items`

| Columna      | Tipo    | Restricciones              |
|--------------|---------|----------------------------|
| `id`         | INTEGER | PK, autoincremental        |
| `product_id` | INTEGER | FK → `products.id`         |
| `quantity`   | INTEGER | NOT NULL                   |

> Insertar al menos **5 productos de ejemplo** en la tabla `products`.

---

## 2. Backend con Express

1. Crear carpeta `backend` con proyecto Node (`npm init -y`).
2. Instalar dependencias: `express`, `cors`, `better-sqlite3`, `dotenv`.
3. Crear `db.js` para la creación de la base de datos usando variables de entorno.
4. Crear `app.js` que:
   - Configure `express.json()` y `cors()`.
   - Levante el servidor en el puerto `3000`.

### Rutas de productos

| Método | Ruta             | Descripción                        |
|--------|------------------|------------------------------------|
| GET    | `/products`      | Devuelve todos los productos       |
| GET    | `/products/:id`  | Devuelve un producto por `id`      |

### Rutas del carrito

| Método | Ruta         | Descripción                                                                 |
|--------|--------------|-----------------------------------------------------------------------------|
| GET    | `/cart`      | Devuelve todos los ítems del carrito con datos del producto y total calculado |
| POST   | `/cart`      | Recibe `productId` y `quantity`; agrega o actualiza el ítem en `cart_items` |
| DELETE | `/cart/:id`  | Elimina un ítem del carrito por su `id`                                     |
| DELETE | `/cart`      | *(Opcional)* Vacía todo el carrito                                          |

---

## 3. Frontend con HTML, CSS y JavaScript Vanilla

### Estructura de archivos

```
frontend/
├── index.html
├── styles.css
└── app.js
```

### `index.html`

- Contenedor para la lista de productos:
  ```html
  <section id="products-container"></section>
  ```
- Contenedor para el carrito:
  ```html
  <section id="cart-container"></section>
  ```
- Total del carrito:
  ```html
  <p id="cart-total"></p>
  ```

### `app.js`

```js
const apiBaseUrl = "http://localhost:3000";
```

#### `loadProducts()`
- Hace `GET /products`.
- Crea dinámicamente tarjetas de producto con un botón **"Agregar al carrito"**.

#### `addToCart(productId)`
- Hace `POST /cart` enviando `productId` y `quantity` (inicialmente `1`).
- Luego llama a `loadCart()`.

#### `loadCart()`
- Hace `GET /cart`.
- Pinta los ítems (nombre, cantidad, subtotal) y un botón **"Eliminar"** por ítem.
- Muestra el total calculado.

#### `removeFromCart(cartItemId)`
- Hace `DELETE /cart/:id`.
- Vuelve a llamar `loadCart()`.

### Convenciones

- Nombres de variables y funciones en **camelCase**: `loadProducts`, `addToCart`, `loadCart`.
- Usar `let` y `const`; **evitar `var`**.
- **Sin frameworks de frontend** — solo JavaScript Vanilla.

---

## 4. Entregables

- Script SQL de creación de tablas e inserción de productos.
- Código del backend: `app.js`, `db.js`.
- Código del frontend: `index.html`, `styles.css`, `app.js`.
- `README.md` con instrucciones para levantar la BD, el backend y el frontend.

> **Nota:** no te enfoques en el estilo visual; no es el enfoque por ahora.
