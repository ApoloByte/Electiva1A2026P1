# Tarea:

1. Investigar acerca de las [Custom Properties](https://getbootstrap.com/docs/5.3/customize/css-variables/) de Bootstrap
2. Dar un estilo mejor al carousel de Huskies


## ¿Qué son las CSS Custom Properties en Bootstrap?
Bootstrap incluye muchas CSS custom properties (variables) en su CSS compilado para personalización en tiempo real, sin necesidad de recompilar Sass. Esto facilita el acceso a valores comúnmente usados como colores del tema, breakpoints y fuentes principales, directamente desde el inspector del navegador, un sandbox o en prototipos.

Variables Raíz (:root)
Estas variables se definen en el archivo _root.scss y están disponibles en cualquier lugar donde se cargue el CSS de Bootstrap. getbootstrap Se dividen en dos grupos:
1. Variables por defecto (modo claro)
Definidas en :root y [data-bs-theme=light], cubren:

Colores base: --bs-blue, --bs-red, --bs-green, etc.
Colores semánticos: --bs-primary, --bs-secondary, --bs-success, --bs-danger, --bs-warning, --bs-info
Variantes de énfasis: --bs-primary-text-emphasis, --bs-primary-bg-subtle, --bs-primary-border-subtle
Tipografía: --bs-body-font-family, --bs-body-font-size, --bs-body-line-height
Colores del cuerpo: --bs-body-color, --bs-body-bg
Bordes: --bs-border-width, --bs-border-color, --bs-border-radius (y variantes sm, lg, xl, xxl, pill)
Sombras: --bs-box-shadow, --bs-box-shadow-sm, --bs-box-shadow-lg
Links: --bs-link-color, --bs-link-hover-color, --bs-link-decoration
Formularios: --bs-form-valid-color, --bs-form-invalid-color

2. Variables del modo oscuro
Estas variables están limitadas al modo oscuro integrado de Bootstrap, bajo el selector [data-bs-theme=dark]. getbootstrap Redefinen los colores del cuerpo, fondo, bordes, links y formularios para adaptarse al tema oscuro.

Variables de Componentes
Bootstrap 5 hace uso creciente de custom properties como variables locales para distintos componentes. Esto reduce el CSS compilado, evita que los estilos se hereden en lugares no deseados (como tablas anidadas), y permite hacer restyling básico de los componentes de Bootstrap después de compilar Sass. getbootstrap
Siempre que sea posible, las variables CSS se asignan al nivel base del componente (por ejemplo, .navbar para la navbar y sus subcomponentes). Esto reduce la confusión sobre dónde y cómo personalizar. getbootstrap

Prefijo personalizable
La mayoría de las variables CSS usan un prefijo para evitar colisiones con el código propio del proyecto. Este prefijo es adicional al -- requerido en toda variable CSS. Se puede personalizar mediante la variable Sass $prefix; por defecto está definida como bs- (con el guión al final). getbootstrap

Variables de Focus (desde v5.3.0)
Bootstrap provee estilos :focus personalizados usando una combinación de variables Sass y CSS que pueden añadirse opcionalmente a componentes y elementos específicos. En Sass se definen valores por defecto que luego se reasignan como variables CSS a nivel :root, incluyendo opciones para desplazamientos en x e y. getbootstrap
Las variables relevantes son:

--bs-focus-ring-width
--bs-focus-ring-opacity
--bs-focus-ring-color


Breakpoints del Grid
Si bien los breakpoints del grid se incluyen como variables CSS (excepto xs), hay que tener en cuenta que las variables CSS no funcionan dentro de media queries. Esto es por diseño en la especificación CSS. Sin embargo, pueden usarse en otras situaciones CSS y en JavaScript.
