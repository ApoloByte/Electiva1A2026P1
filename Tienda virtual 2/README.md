# 🛒 TechStore — Tienda Virtual

Tienda virtual básica con carrito de compras funcional.  
Stack: **Express + better-sqlite3 + HTML/CSS/JS Vanilla**

---

## 📁 Estructura del proyecto

```
tienda-virtual/
├── backend/
│   ├── app.js          # Servidor Express con todas las rutas
│   ├── db.js           # Configuración de la base de datos SQLite
│   ├── .env            # Variables de entorno
│   └── package.json
└── frontend/
    ├── index.html      # Estructura de la interfaz
    ├── styles.css      # Estilos
    └── app.js          # Lógica del frontend (Vanilla JS)
```

---

## 🗄️ Base de datos

Se usa **better-sqlite3** (SQLite embebido en Node). No requiere instalar ningún servidor de BD.

### Tablas

```sql
-- Productos
CREATE TABLE IF NOT EXISTS products (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  name      TEXT    NOT NULL,
  price     REAL    NOT NULL,
  image_url TEXT
);

-- Ítems del carrito
CREATE TABLE IF NOT EXISTS cart_items (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  quantity   INTEGER NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
```

La base de datos se crea automáticamente al iniciar el backend. Los **7 productos de ejemplo** se insertan solo si la tabla está vacía.

---

## 🚀 Cómo levantar el proyecto

### 1. Backend

```bash
cd backend
npm install
node app.js
```

El servidor queda escuchando en **http://localhost:3000**

> **Variables de entorno** (archivo `.env`):
> ```
> PORT=3000
> DB_PATH=./tienda.db
> ```

### 2. Frontend

Abrir `frontend/index.html` directamente en el navegador.

> **Recomendado:** usar la extensión **Live Server** de VS Code o ejecutar:
> ```bash
> cd frontend
> npx serve .
> ```

---

## 🔌 API REST

### Productos

| Método | Ruta            | Descripción                    |
|--------|-----------------|--------------------------------|
| GET    | `/products`     | Lista todos los productos      |
| GET    | `/products/:id` | Obtiene un producto por id     |

### Carrito

| Método | Ruta         | Descripción                                            |
|--------|--------------|--------------------------------------------------------|
| GET    | `/cart`      | Lista ítems del carrito con total calculado            |
| POST   | `/cart`      | Agrega o actualiza un ítem (`productId`, `quantity`)   |
| DELETE | `/cart/:id`  | Elimina un ítem por su id                              |
| DELETE | `/cart`      | Vacía todo el carrito                                  |

#### Ejemplo — Agregar al carrito

```bash
curl -X POST http://localhost:3000/cart \
  -H "Content-Type: application/json" \
  -d '{"productId": 1, "quantity": 2}'
```

#### Ejemplo — Ver carrito

```bash
curl http://localhost:3000/cart
```

Respuesta:
```json
{
  "items": [
    {
      "id": 1,
      "product_id": 1,
      "quantity": 2,
      "name": "Laptop Gamer Pro",
      "price": 1299.99,
      "image_url": "...",
      "subtotal": 2599.98
    }
  ],
  "total": 2599.98
}
```

---

## ✨ Funcionalidades

- **Ver catálogo** de productos con imagen, nombre y precio
- **Agregar al carrito** — si el producto ya existe, suma la cantidad
- **Ver carrito** con subtotal por ítem y total general
- **Eliminar ítems** del carrito individualmente
- **Vaciar carrito** completamente
- **Simular compra** — limpia el carrito y muestra confirmación

---

## 🛠️ Dependencias del backend

```
express        — servidor HTTP
cors           — habilitar CORS para el frontend
better-sqlite3 — SQLite sincrónico para Node.js
dotenv         — variables de entorno desde .env
```
