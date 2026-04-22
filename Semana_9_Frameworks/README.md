# Guía Completa de Bootstrap 

Bootstrap es un framework frontend open-source que permite construir interfaces web responsive de forma rápida, usando un sistema de grid, componentes reutilizables y utilidades CSS. Fue creado por Twitter y actualmente es el framework CSS más popular del mundo.

## Tabla de Contenidos

1. [Introducción a Bootstrap](#1-introducción-a-bootstrap)
2. [Requisitos previos](#2-requisitos-previos)
3. [Instalación inicial](#3-instalación-inicial)
4. [Estructura base del documento](#4-estructura-base-del-documento)
5. [Primeros componentes](#5-primeros-componentes)
6. [Sistema responsive](#6-sistema-responsive)
7. [Utilidades](#7-utilidades)
8. [Custom Properties de Bootstrap](#8-custom-properties-de-bootstrap)
9. [Posicionamiento CSS](#9-posicionamiento-css)
10. [Buenas prácticas](#10-buenas-prácticas)
11. [Ejercicio final — Landing Page](#11-ejercicio-final--landing-page)
12. [Estructura del proyecto](#12-estructura-del-proyecto)

## 1. Introducción a Bootstrap

### Qué es Bootstrap

Bootstrap es un framework CSS que incluye estilos predefinidos, un sistema de grid de 12 columnas, componentes de interfaz (navbar, cards, modals, carousel) y utilidades para espaciado, tipografía, colores y más. Funciona con una combinación de clases HTML, CSS y JavaScript.

### Ventajas de usarlo

- Permite construir layouts responsive sin escribir CSS desde cero.
- Garantiza consistencia visual en distintos navegadores.
- Su enfoque mobile-first facilita el diseño para pantallas pequeñas primero.
- Tiene documentación extensa y comunidad muy activa.
- Es altamente personalizable mediante variables CSS (Custom Properties).

### En qué tipo de proyectos conviene usarlo

- Paneles de administración y dashboards.
- Landing pages y portfolios.
- Prototipos y MVPs que necesitan desarrollarse rápidamente.
- Proyectos académicos o de práctica.
- Cualquier proyecto donde la velocidad de desarrollo sea prioritaria sobre un diseño completamente personalizado.

## 2. Requisitos previos

- Conocimientos básicos de HTML y CSS.
- Un editor de código (se recomienda Visual Studio Code).
- Un navegador moderno (Chrome, Firefox, Edge).
- Opcionalmente: Node.js si se desea instalar con npm.

## 3. Instalación inicial

### Uso por CDN

La forma más rápida de incluir Bootstrap sin instalar nada. Se agrega directamente en el HTML:

```html
<!-- CSS en el <head> -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
  crossorigin="anonymous"
/>

<!-- JS bundle antes del </body> -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
  crossorigin="anonymous">
</script>
```

El archivo `bootstrap.bundle.min.js` ya incluye Popper.js, necesario para que funcionen dropdowns, tooltips y modals.

### Uso con npm

Para proyectos con bundlers como Vite o Webpack:

```bash
npm install bootstrap
```

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### Descarga local

Se puede descargar desde [getbootstrap.com](https://getbootstrap.com) y vincular los archivos localmente. Útil cuando no se tiene acceso a internet estable.

### Archivos que incluye Bootstrap

```
bootstrap/
├── css/
│   ├── bootstrap.css           -- versión completa, para desarrollo
│   └── bootstrap.min.css       -- versión minificada, para producción
├── js/
│   ├── bootstrap.bundle.js     -- incluye Popper.js integrado
│   └── bootstrap.bundle.min.js -- versión minificada para producción
```


## 4. Estructura base del documento

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <!-- El viewport es obligatorio para que el sistema responsive funcione -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi proyecto</title>

    <!-- 1. CSS de Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- 2. CSS propio siempre después de Bootstrap para poder sobrescribir estilos -->
    <link rel="stylesheet" href="./style.css">
</head>
<body>

    <!-- Contenido de la página -->

    <!-- 3. JS de Bootstrap al final del body -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

Puntos clave de esta estructura:

- `<!DOCTYPE html>` siempre al inicio del archivo.
- `lang="es"` indica el idioma del contenido, importante para accesibilidad y SEO.
- El `meta charset` evita problemas con caracteres especiales como tildes.
- El `meta viewport` es indispensable para el responsive; sin él Bootstrap no funciona correctamente.
- El CSS propio va después de Bootstrap para poder sobrescribir sin necesidad de `!important`.
- El JS va antes de `</body>` para no bloquear la carga del contenido visible.



## 5. Primeros componentes

### Botones

```html
<!-- Botones sólidos con los colores del tema -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>

<!-- Botones outline (solo borde, sin fondo) -->
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-danger">Outline Danger</button>

<!-- Tamaños disponibles -->
<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-sm">Pequeño</button>

<!-- Ancho completo del contenedor -->
<button class="btn btn-primary w-100">Full width</button>

<!-- Deshabilitado -->
<button class="btn btn-primary" disabled>Deshabilitado</button>
```

### Alertas

```html
<div class="alert alert-primary" role="alert">Mensaje informativo.</div>
<div class="alert alert-success" role="alert">Operación exitosa.</div>
<div class="alert alert-danger" role="alert">Ocurrió un error.</div>
<div class="alert alert-warning" role="alert">Atención, revisa este punto.</div>

<!-- Alerta con botón de cierre (requiere JS de Bootstrap) -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    Mensaje con posibilidad de cerrarse.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
</div>

<!-- Alerta con título y separador -->
<div class="alert alert-success">
    <h4 class="alert-heading">Registro exitoso</h4>
    <p>Tu cuenta fue creada correctamente.</p>
    <hr>
    <p class="mb-0">Revisa tu correo para confirmar.</p>
</div>
```

### Tarjetas o Cards

```html
<!-- Card básica con imagen -->
<div class="card" style="width: 18rem;">
    <img src="imagen.jpg" class="card-img-top" alt="Descripción de la imagen">
    <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Descripción breve del contenido.</p>
        <a href="#" class="btn btn-primary">Ver detalle</a>
    </div>
</div>

<!-- Card con header y footer -->
<div class="card">
    <div class="card-header">Encabezado de la card</div>
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Contenido de la tarjeta.</p>
    </div>
    <div class="card-footer text-muted">Pie de la tarjeta</div>
</div>

<!-- Cards con colores de fondo -->
<div class="card text-bg-primary mb-3">
    <div class="card-body">Card con fondo primary</div>
</div>
<div class="card text-bg-danger mb-3">
    <div class="card-body">Card con fondo danger</div>
</div>
```

### Navbar

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Mi Sitio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navPrincipal" aria-controls="navPrincipal"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navPrincipal">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Acerca</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        Más
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Opción 1</a></li>
                        <li><a class="dropdown-item" href="#">Opción 2</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separado</a></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</nav>
```

### Formularios

```html
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="email" placeholder="nombre@correo.com">
        <div class="form-text">No compartimos tu correo con nadie.</div>
    </div>

    <div class="mb-3">
        <label for="nombre" class="form-label">Nombre completo</label>
        <input type="text" class="form-control" id="nombre">
    </div>

    <div class="mb-3">
        <label for="pais" class="form-label">País</label>
        <select class="form-select" id="pais">
            <option>Colombia</option>
            <option>México</option>
            <option>Argentina</option>
        </select>
    </div>

    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="terminos">
        <label class="form-check-label" for="terminos">
            Acepto los términos y condiciones
        </label>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```


## 6. Sistema responsive

### Concepto de mobile-first

Bootstrap está diseñado mobile-first: los estilos base aplican para pantallas pequeñas, y los breakpoints añaden estilos para pantallas más grandes. Esto significa que se diseña primero para móvil y luego se escala hacia arriba con clases como `col-sm-6` o `d-md-block`.

### Containers

```html
<div class="container">        <!-- ancho máximo fijo según el breakpoint activo -->
<div class="container-fluid">  <!-- siempre ocupa el 100% del ancho -->
<div class="container-md">     <!-- fluido en móvil, fijo desde md hacia arriba -->
```

### Grid system

El grid divide cada fila en 12 columnas. Las columnas siempre van dentro de `row`, y la `row` siempre dentro de un `container`.

```html
<!-- Tres columnas iguales -->
<div class="container">
    <div class="row">
        <div class="col-4">Columna 1</div>
        <div class="col-4">Columna 2</div>
        <div class="col-4">Columna 3</div>
    </div>
</div>

<!-- Columnas de distinto tamaño (8 + 4 = 12) -->
<div class="container">
    <div class="row">
        <div class="col-8">Contenido principal</div>
        <div class="col-4">Sidebar</div>
    </div>
</div>

<!-- Alineación del contenido dentro del grid -->
<div class="row align-items-center justify-content-between">
    <div class="col-4">Izquierda centrada</div>
    <div class="col-4">Derecha centrada</div>
</div>
```

### Breakpoints

| Nombre       | Prefijo    | Ancho mínimo  |
|--------------|------------|---------------|
| Extra small  | (ninguno)  | menos de 576px |
| Small        | `sm`       | 576px         |
| Medium       | `md`       | 768px         |
| Large        | `lg`       | 992px         |
| Extra large  | `xl`       | 1200px        |
| XXL          | `xxl`      | 1400px        |

Ejemplo de columnas responsive:

```html
<!-- Móvil: 1 columna. Tablet: 2 columnas. Desktop: 4 columnas. -->
<div class="container">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">Item 1</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">Item 2</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">Item 3</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">Item 4</div>
    </div>
</div>
```

## 7. Utilidades

### Espaciados (margin y padding)

Sintaxis: `{propiedad}{lado}-{tamaño}`

- Propiedad: `m` para margin, `p` para padding.
- Lado: `t` top, `b` bottom, `s` start (izquierda), `e` end (derecha), `x` horizontal, `y` vertical, sin letra para todos los lados.
- Tamaño: `0`, `1` (0.25rem), `2` (0.5rem), `3` (1rem), `4` (1.5rem), `5` (3rem), `auto`.

```html
<div class="mt-3">margin-top: 1rem</div>
<div class="mb-5">margin-bottom: 3rem</div>
<div class="px-4">padding-left y padding-right: 1.5rem</div>
<div class="py-2">padding-top y padding-bottom: 0.5rem</div>
<div class="m-auto">margin: auto (para centrar horizontalmente)</div>
<div class="p-0">sin padding</div>
<div class="ms-3">margin-left (start): 1rem</div>
<div class="me-3">margin-right (end): 1rem</div>
```

### Colores

```html
<!-- Colores de texto -->
<p class="text-primary">Texto primary</p>
<p class="text-success">Texto success</p>
<p class="text-danger">Texto danger</p>
<p class="text-warning">Texto warning</p>
<p class="text-secondary">Texto secondary</p>
<p class="text-muted">Texto apagado</p>
<p class="text-white bg-dark">Texto blanco</p>

<!-- Colores de fondo -->
<div class="bg-primary text-white p-3">Fondo primary</div>
<div class="bg-success text-white p-3">Fondo success</div>
<div class="bg-danger text-white p-3">Fondo danger</div>
<div class="bg-warning p-3">Fondo warning</div>
<div class="bg-light p-3">Fondo claro</div>
<div class="bg-dark text-white p-3">Fondo oscuro</div>

<!-- Fondos con opacidad (Bootstrap 5.1+) -->
<div class="bg-primary bg-opacity-25 p-3">Fondo primary al 25%</div>
<div class="bg-primary bg-opacity-50 p-3">Fondo primary al 50%</div>
<div class="bg-primary bg-opacity-75 p-3">Fondo primary al 75%</div>
```

Colores disponibles en el tema:

| Nombre      | Clase texto        | Clase fondo      | Valor por defecto |
|-------------|--------------------|------------------|-------------------|
| primary     | `text-primary`     | `bg-primary`     | `#0d6efd`         |
| secondary   | `text-secondary`   | `bg-secondary`   | `#6c757d`         |
| success     | `text-success`     | `bg-success`     | `#198754`         |
| danger      | `text-danger`      | `bg-danger`      | `#dc3545`         |
| warning     | `text-warning`     | `bg-warning`     | `#ffc107`         |
| info        | `text-info`        | `bg-info`        | `#0dcaf0`         |
| light       | `text-light`       | `bg-light`       | `#f8f9fa`         |
| dark        | `text-dark`        | `bg-dark`        | `#212529`         |

### Tipografía

```html
<!-- Encabezados estándar -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<!-- Display: para títulos grandes y de impacto visual -->
<h1 class="display-1">Display 1 — el más grande</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-6">Display 6 — el más pequeño</h1>

<!-- Utilidades de alineación -->
<p class="text-start">Alineado a la izquierda</p>
<p class="text-center">Centrado</p>
<p class="text-end">Alineado a la derecha</p>

<!-- Peso y estilo de fuente -->
<p class="fw-bold">Negrita (700)</p>
<p class="fw-semibold">Seminegrita (600)</p>
<p class="fw-normal">Normal (400)</p>
<p class="fw-light">Ligero (300)</p>
<p class="fst-italic">Cursiva</p>

<!-- Transformación de texto -->
<p class="text-uppercase">Todo en mayúsculas</p>
<p class="text-lowercase">todo en minúsculas</p>
<p class="text-capitalize">Primera letra de cada palabra en mayúscula</p>

<!-- Tamaños de fuente (fs-1 más grande, fs-6 más pequeño) -->
<p class="fs-1">Font size 1</p>
<p class="fs-3">Font size 3</p>
<p class="fs-6">Font size 6</p>

<!-- Párrafo destacado -->
<p class="lead">Párrafo introductorio con tamaño y peso destacado.</p>
```

### Display y Flexbox

```html
<!-- Clases de display -->
<div class="d-none">Oculto siempre</div>
<div class="d-block">Block</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline-block</div>
<div class="d-flex">Flex container</div>
<div class="d-grid">Grid container</div>

<!-- Mostrar u ocultar según breakpoint -->
<div class="d-none d-md-block">Oculto en móvil, visible desde tablet</div>
<div class="d-block d-lg-none">Visible en móvil, oculto desde desktop</div>

<!-- Flexbox: dirección y alineación -->
<div class="d-flex justify-content-start">Alineado al inicio</div>
<div class="d-flex justify-content-center">Centrado horizontalmente</div>
<div class="d-flex justify-content-end">Alineado al final</div>
<div class="d-flex justify-content-between">Separados al máximo</div>
<div class="d-flex justify-content-around">Espaciado uniforme</div>

<div class="d-flex align-items-start">Alineado al tope</div>
<div class="d-flex align-items-center">Centrado verticalmente</div>
<div class="d-flex align-items-end">Alineado al fondo</div>

<!-- Dirección y gap -->
<div class="d-flex flex-column gap-3">Columna con espacio</div>
<div class="d-flex flex-row gap-2">Fila con espacio</div>
```


## 8. Custom Properties de Bootstrap

Bootstrap 5 está construido con CSS Custom Properties (variables CSS nativas), lo que permite personalizar el tema completo sin recompilar Sass ni modificar los archivos del framework.

### Cómo funciona

Bootstrap define sus variables en `:root` y las usa internamente en todos sus componentes. Por ejemplo:

```css
/* Lo que Bootstrap define internamente */
:root {
    --bs-blue:            #0d6efd;
    --bs-primary:         #0d6efd;
    --bs-primary-rgb:     13, 110, 253;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --bs-border-radius:   0.375rem;
    --bs-border-width:    1px;
    --bs-body-bg:         #fff;
    --bs-body-color:      #212529;
    --bs-link-color:      #0d6efd;
}
```

### Cómo personalizar el tema

En el archivo `style.css`, que va siempre después de Bootstrap, se sobrescriben las variables:

```css
/* style.css */
:root {
    /* Cambiar el color primary (siempre incluir también la versión RGB) */
    --bs-primary:         #e63946;
    --bs-primary-rgb:     230, 57, 70;

    /* Cambiar la fuente global */
    --bs-font-sans-serif: 'Montserrat', sans-serif;

    /* Cambiar los colores del body */
    --bs-body-bg:         #1a1a2e;
    --bs-body-color:      #eaeaea;

    /* Cambiar el radio de bordes en todos los componentes */
    --bs-border-radius:   1rem;

    /* Cambiar el color de los enlaces */
    --bs-link-color:      #e63946;
}
```

La versión RGB es importante porque Bootstrap la usa para crear transparencias y variantes con la función `rgba()`. Si solo se cambia `--bs-primary` sin cambiar `--bs-primary-rgb`, algunos efectos no se verán correctamente.

### Variables específicas por componente

Cada componente tiene sus propias variables que permiten personalizarlo de forma aislada:

```css
/* Personalizar solo el carousel */
.carousel {
    --bs-carousel-indicator-width:     40px;
    --bs-carousel-indicator-height:    4px;
    --bs-carousel-indicator-active-bg: #ffffff;
    --bs-carousel-control-icon-width:  2.5rem;
    --bs-carousel-transition-duration: 0.8s;
}

/* Personalizar solo los botones primary */
.btn-primary {
    --bs-btn-bg:           #e63946;
    --bs-btn-border-color: #e63946;
    --bs-btn-hover-bg:     #c1121f;
    --bs-btn-color:        #ffffff;
}

/* Personalizar solo las cards */
.card {
    --bs-card-bg:            #16213e;
    --bs-card-border-color:  rgba(255, 255, 255, 0.1);
    --bs-card-border-radius: 1rem;
    --bs-card-spacer-y:      1.5rem;
    --bs-card-spacer-x:      1.5rem;
}

/* Personalizar solo la navbar */
.navbar {
    --bs-navbar-brand-color:  #ffffff;
    --bs-navbar-color:        rgba(255, 255, 255, 0.75);
    --bs-navbar-hover-color:  #ffffff;
    --bs-navbar-active-color: #ffffff;
}
```

### Variables globales más utilizadas

| Variable                | Qué controla                          |
|-------------------------|---------------------------------------|
| `--bs-primary`          | Color principal del tema              |
| `--bs-primary-rgb`      | Versión RGB del color principal       |
| `--bs-body-bg`          | Color de fondo del body               |
| `--bs-body-color`       | Color de texto general                |
| `--bs-font-sans-serif`  | Fuente principal del documento        |
| `--bs-border-radius`    | Radio de bordes global                |
| `--bs-border-color`     | Color de bordes global                |
| `--bs-link-color`       | Color de los enlaces                  |
| `--bs-box-shadow`       | Sombra estándar de componentes        |

---

## 9. Posicionamiento CSS

La propiedad `position` controla cómo se ubica un elemento en el documento. Bootstrap expone estos valores como clases utilitarias. La documentación oficial está en [MDN Web Docs — position](https://developer.mozilla.org/es/docs/Web/CSS/position).

### Valores disponibles

**`static`** — Valor por defecto de todos los elementos. El elemento sigue el flujo normal del documento. Las propiedades `top`, `bottom`, `left`, `right` y `z-index` no tienen efecto sobre él.

```css
.elemento { position: static; }
```
```html
<div class="position-static">Flujo normal, sin desplazamiento</div>
```

**`relative`** — El elemento sigue en el flujo normal, pero puede desplazarse respecto a su posición original usando `top`, `left`, etc. El espacio original que ocupaba se conserva. También crea un contexto de posicionamiento para sus hijos absolutos.

```css
.elemento {
    position: relative;
    top: 20px;
    left: 10px;
}
```
```html
<div class="position-relative" style="top: 20px; left: 10px;">Desplazado</div>
```

**`absolute`** — El elemento sale del flujo normal. Se posiciona relativo al ancestro posicionado más cercano (cualquiera que no sea `static`). Si no hay ninguno, se posiciona relativo al `<html>`.

```css
.contenedor { position: relative; }
.hijo       { position: absolute; top: 0; right: 0; }
```
```html
<div class="position-relative">
    Contenedor padre
    <span class="position-absolute top-0 end-0">Esquina superior derecha</span>
</div>
```

**`fixed`** — El elemento sale del flujo normal y se fija relativo al viewport (la ventana del navegador). No se mueve cuando el usuario hace scroll. Siempre crea un nuevo contexto de apilamiento.

```css
.boton-flotante {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
}
```
```html
<div class="position-fixed bottom-0 end-0 p-3">Siempre visible</div>
```

**`sticky`** — Híbrido entre `relative` y `fixed`. Se comporta como `relative` hasta que el elemento cruza el umbral definido por `top` al hacer scroll, momento en el que se comporta como `fixed` dentro de su contenedor padre. Requiere definir al menos uno de `top`, `bottom`, `left` o `right` para funcionar.

```css
.cabecera {
    position: sticky;
    top: 0;
    z-index: 100;
}
```
```html
<div class="position-sticky top-0">Se pega al tope al scrollear</div>
```

### Clases de offset en Bootstrap

```
.top-0      .top-50      .top-100
.bottom-0   .bottom-50   .bottom-100
.start-0    .start-50    .start-100
.end-0      .end-50      .end-100
```

### Cuándo usar cada valor

| Valor      | En el flujo | Se mueve con scroll    | Caso de uso típico                          |
|------------|-------------|------------------------|---------------------------------------------|
| `static`   | Sí          | Sí                     | Elementos normales de página                |
| `relative` | Sí          | Sí                     | Contenedor de absolutos, ajustes menores    |
| `absolute` | No          | Relativo al contenedor | Badges, tooltips, overlays sobre contenido  |
| `fixed`    | No          | No, fijo al viewport   | Navbar fija, botón flotante, banners        |
| `sticky`   | Sí (parcial)| Se pega al umbral      | Headers de sección, sidebars, tablas        |

## 10. Buenas prácticas

- Siempre incluir el `meta viewport` en el `<head>`. Sin él, el responsive no funciona.
- El CSS propio siempre después del link de Bootstrap para poder sobrescribir estilos.
- Usar Custom Properties para personalizar el tema. Es más limpio y mantenible que sobrescribir clase por clase.
- No combinar clases de Bootstrap con estilos inline de forma innecesaria. Dificulta el mantenimiento.
- Evitar `!important`. Si se necesita, es señal de un conflicto de especificidad a resolver.
- Respetar la estructura del grid: `container > row > col-*`. Las columnas fuera de una `row` rompen el layout.
- Diseñar mobile-first: primero para móvil, luego escalar con breakpoints.
- Si una combinación de clases se repite muchas veces, crear una clase CSS propia en `style.css`.
- Usar `<button>` para acciones y `<a>` para navegación, independientemente del estilo aplicado.
- Consultar la documentación oficial en [getbootstrap.com](https://getbootstrap.com). Está siempre actualizada y tiene ejemplos interactivos.


## 11. Ejercicio final — Landing Page

Construir una landing page para un producto con los siguientes elementos:

- Navbar responsive con logo y enlaces de navegación.
- Sección hero con título grande, descripción y botón de acción (CTA).
- Sección de características con 3 tarjetas en grid responsive.
- Footer con columnas de enlaces y copyright.

Ver el archivo `index.html` para la implementación completa.

### 5 usos reales de Bootstrap

1. Paneles de administración con tablas, formularios y gráficas.
2. Tiendas online con grids de productos y filtros responsive.
3. Portfolios personales con secciones y galería de proyectos.
4. Landing pages de campañas con CTAs, testimonios y formularios.
5. Aplicaciones de gestión internas (dashboards corporativos y herramientas internas).


## 12. Estructura del proyecto

```
proyecto-bootstrap/
├── index.html       -- Landing page con carousel de Huskies
├── position.html    -- Demo visual de posicionamiento CSS
├── style.css        -- Custom Properties y estilos personalizados
└── README.md        -- Esta guía
```

