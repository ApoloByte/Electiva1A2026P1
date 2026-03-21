# Tienda Virtual — Express + better-sqlite3 + Vanilla JS

Proyecto de tienda virtual básica con backend REST en Express y frontend en HTML/CSS/JS puro.

## Estructura del proyecto

```
tienda-virtual/
├── backend/
│   ├── routes/
│   │   ├── products.js     # Rutas GET /products y GET /products/:id
│   │   └── cart.js         # Rutas GET/POST/DELETE /cart
│   ├── app.js              # Entry point del servidor Express
│   ├── db.js               # Inicialización de la BD y seed de datos
│   ├── .env                # Variables de entorno
│   └── package.json
├── frontend/
│   ├── index.html          # Estructura de la página
│   ├── styles.css          # Estilos básicos
│   └── app.js              # Lógica de interfaz (fetch, render)
├── schema.sql              # Script SQL de tablas e inserción de ejemplo
└── README.md
```

## Requisitos previos

- Node.js 18 o superior
- npm

## 1. Configurar y levantar el backend

```bash
# Entrar a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# (Opcional) Revisar o editar variables de entorno
cat .env
# PORT=3000
# DB_PATH=./tienda.db

# Iniciar el servidor
npm start
```

Al iniciar, el servidor:
1. Crea automáticamente el archivo `tienda.db` (SQLite).
2. Crea las tablas `products` y `cart_items` si no existen.
3. Inserta 6 productos de ejemplo si la tabla `products` está vacía.
4. Queda escuchando en `http://localhost:3000`.

### Endpoints disponibles

| Método | Ruta            | Descripción                                      |
|--------|-----------------|--------------------------------------------------|
| GET    | /products       | Lista todos los productos                        |
| GET    | /products/:id   | Obtiene un producto por id                       |
| GET    | /cart           | Lista ítems del carrito con subtotales y total   |
| POST   | /cart           | Agrega o actualiza un ítem `{ productId, quantity }` |
| DELETE | /cart/:id       | Elimina un ítem del carrito por su id            |
| DELETE | /cart           | Vacía todo el carrito                            |

## 2. Abrir el frontend

No requiere servidor adicional. Simplemente abre el archivo en el navegador:

```bash
# Desde la carpeta raíz del proyecto
open frontend/index.html
# o en Linux:
xdg-open frontend/index.html
```

> **Nota:** Si el navegador bloquea las peticiones por CORS al abrir el HTML como `file://`, puedes servir el frontend con cualquier servidor estático, por ejemplo:
>
> ```bash
> cd frontend
> npx serve .
> # Luego abre http://localhost:3000 (o el puerto que indique)
> ```

## 3. Usar el script SQL manualmente (opcional)

Si prefieres inicializar la base de datos fuera de Node:

```bash
sqlite3 backend/tienda.db < schema.sql
```

## Decisiones de diseño

- **better-sqlite3**: API síncrona que simplifica el código del backend (no requiere async/await para las consultas).
- **FK + ON DELETE CASCADE**: Si se elimina un producto, sus ítems en el carrito se eliminan automáticamente.
- **Upsert en el carrito**: Si el mismo producto se agrega dos veces, se suma la cantidad en lugar de crear un duplicado.
- **Total calculado en el backend**: El `GET /cart` devuelve el total calculado, no se delega al frontend.
