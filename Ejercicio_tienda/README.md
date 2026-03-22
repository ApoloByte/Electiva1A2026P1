# Tienda Virtual con Carrito de Compras

Aplicación web básica de tienda virtual con carrito de compras.  
**Stack:** Node.js + Express + better-sqlite3 (backend) · HTML + CSS + Vanilla JS (frontend)

---

## Estructura del proyecto

```
Ejercicio_tienda/
├── backend/
│   ├── app.js          # Servidor Express con todas las rutas REST
│   ├── db.js           # Inicialización de la BD y datos de ejemplo
│   ├── package.json
│   └── .env.example    # Variables de entorno de ejemplo
└── frontend/
    ├── index.html
    ├── styles.css
    └── app.js          # Lógica del frontend (fetch + DOM)
```

---

## Requisitos previos

- **Node.js** ≥ 18 instalado ([descargar](https://nodejs.org/))
- Tener `npm` disponible en la terminal

---

## 1 · Instalar dependencias del backend

```bash
cd backend
npm install
```

> Esto instalará: `express`, `cors`, `better-sqlite3` y `dotenv`.

---

## 2 · Configurar variables de entorno

```bash
# Dentro de la carpeta backend/
copy .env.example .env
```

El archivo `.env` creado ya tiene los valores por defecto:

```
PORT=3000
DB_PATH=./tienda.db
```

Puedes dejarlos tal cual o ajustarlos a tu entorno.

---

## 3 · Levantar el servidor backend

```bash
# Desde la carpeta backend/
npm start
# o bien:
node app.js
```

Deberías ver:

```
Productos de ejemplo insertados correctamente.
Servidor corriendo en http://localhost:3000
```

La base de datos `tienda.db` se crea automáticamente la primera vez en la carpeta `backend/`.

---

## 4 · Abrir el frontend en el navegador

Una vez que el servidor esté corriendo, **abre directamente** el archivo:

```
frontend/index.html
```

Puedes hacerlo de estas formas:

- Doble clic sobre el archivo en el explorador de archivos, **o**
- Con la extensión **Live Server** de VS Code (clic derecho → *Open with Live Server*).

> ⚠️ El frontend consume `http://localhost:3000`, así que el backend **debe estar corriendo** antes de abrir el frontend.

---

## API REST disponible

| Método | Ruta            | Descripción                                      |
|--------|-----------------|--------------------------------------------------|
| GET    | `/products`     | Lista todos los productos                        |
| GET    | `/products/:id` | Devuelve un producto por ID                      |
| GET    | `/cart`         | Lista el carrito con subtotales y total          |
| POST   | `/cart`         | Agrega/actualiza un ítem (`productId`, `quantity`)|
| DELETE | `/cart/:id`     | Elimina un ítem del carrito                      |
| DELETE | `/cart`         | Vacía todo el carrito                            |

### Ejemplo de petición POST /cart

```json
{
  "productId": 2,
  "quantity": 1
}
```

---

## Notas técnicas

- La BD SQLite (`tienda.db`) se crea automáticamente al arrancar el servidor.
- Si el producto ya existe en el carrito, su cantidad **se incrementa** (no se duplica).
- El campo `total` del carrito se **calcula en el backend** mediante SQL.
- El frontend usa `fetch` con `async/await` y **no depende de ningún framework**.
