# Tienda Virtual con Carrito (s5-tienda)

Ejercicio de API REST con Express, base de datos en SQLite y frontend en Vanilla JS.

## Instrucciones de Ejecución

### 1. Backend y Base de Datos
Abre tu terminal, entra a la carpeta `backend` y sigue estos pasos:
1. Instala las dependencias: `npm install`
2. Asegúrate de tener el archivo `.env` configurado con:
   PORT=3000
   DB_PATH=data/tienda.db
3. Levanta el servidor: `node app.js`
*(Nota: La base de datos SQLite y las tablas se crearán automáticamente al ejecutar el servidor por primera vez).*

### 2. Frontend
Con el servidor del backend corriendo de fondo, ve a la carpeta `frontend` y simplemente abre el archivo `index.html` en tu navegador web (o usando Live Server).