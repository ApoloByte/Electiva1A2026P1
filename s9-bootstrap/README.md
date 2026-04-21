# Tarea:

1. Investigar acerca de las [Custom Properties](https://getbootstrap.com/docs/5.3/customize/css-variables/) de Bootstrap
2. Dar un estilo mejor al carousel de Huskies

# Custom Properties en Boostrap
Bootstrap utiliza las Custom Properties (también conocidas como variables CSS) para permitir una personalización profunda y dinámica sin necesidad de recompilar Sass. Estas variables se dividen principalmente en dos niveles: Globales (en el :root) y de Componente.

### 1. Variables Globales
Estas variables definen la base visual del diseño y están disponibles en todo el proyecto de forma predeterminada. Algunos ejemplos son:
- **Colores de Marca:** `--bs-primary`, `--bs-secondary`, `--bs-success`, `--bs-info`, `--bs-warning`, `--bs-danger`.
- **Escala de Grises:** Desde `--bs-gray-100` hasta `--bs-gray-900`.
- **Tipografía:** `--bs-font-sans-serif`, `--bs-body-font-size`, `--bs-body-line-height`.
- **Bordes:** `--bs-border-width`, `--bs-border-style`, `--bs-border-color`, `--bs-border-radius`.

### 2. Variables de Componente
A partir de la versión 5, cada componente tiene sus propias variables locales. Esto permite modificar un elemento específico sin afectar al resto del sitio. Algunos ejemplos son:

- **Buttons:** `--bs-btn-bg`, `--bs-btn-color`, `--bs-btn-border-radius`. 
- **Navbar:**  `--bs-navbar-color`, `--bs-navbar-hover-color`.
- **Cards:**  `--bs-card-bg`, `--bs-card-border-width`, `--bs-card-spacer-y`.
- **Modals:** `--bs-modal-width`, `--bs-modal-bg`, `--bs-modal-transition`. 

## Prefijo
Bootstrap utiliza el prefijo --bs- para evitar conflictos con otras librerías. La sintaxis general sigue este patrón: **--bs-{nombre-del-componente}-{propiedad}**.

## Varibales para el Modo Oscuro
En las versiones más recientes, Bootstrap incluye variables que cambian de valor automáticamente según el tema activo (**data-bs-theme="dark"** o **"light"**). Algunos ejemplos son:
- `--bs-body-bg` Controla el color de fondo general.
- `--bs-body-color` Controla el color del texto principal.
- `--bs-tertiary-bg` Ideal para fondos de tarjetas o elementos secundarios.