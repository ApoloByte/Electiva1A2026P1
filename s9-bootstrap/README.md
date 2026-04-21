# Tarea:

1. Investigar acerca de las [Custom Properties](https://getbootstrap.com/docs/5.3/customize/css-variables/) de Bootstrap
Desarrollo:
¿Qué son las Custom Properties?
Las Custom Properties, también conocidas como variables CSS, son mecanismos del lenguaje CSS que permiten definir valores reutilizables dentro de una hoja de estilos, facilitando la organización y mantenimiento del diseño. Estas variables se declaran con el prefijo -- y se utilizan mediante la función var(), lo que permite aplicar un mismo valor (como colores, tamaños o tipografías) en múltiples elementos sin necesidad de repetir código. En frameworks como Bootstrap, las Custom Properties juegan un papel fundamental, ya que permiten personalizar la apariencia de los componentes de forma dinámica y global, incluso sin necesidad de recompilar archivos Sass. Gracias a esto, los desarrolladores pueden crear temas, ajustar estilos rápidamente y mejorar la consistencia visual de sus aplicaciones web.

Variables principales:

1. Colores base

Las variables de colores base en Bootstrap definen una paleta general que sirve como fundamento visual del diseño. Incluyen colores sólidos y escalas de grises que permiten construir interfaces consistentes y armoniosas.

Variables:
--bs-blue, --bs-indigo, --bs-purple, --bs-pink, --bs-red, --bs-orange, --bs-yellow, --bs-green, --bs-teal, --bs-cyan, --bs-black, --bs-white, --bs-gray, --bs-gray-dark, --bs-gray-100 a --bs-gray-900

2. Colores del tema

Estas variables representan los colores principales utilizados en los componentes del sistema, como botones, alertas y enlaces. Permiten definir la identidad visual de la aplicación de manera global.

Variables:
--bs-primary, --bs-secondary, --bs-success, --bs-info, --bs-warning, --bs-danger, --bs-light, --bs-dark
También: --bs-primary-rgb, --bs-secondary-rgb, etc.

3. Tipografía

Las variables tipográficas controlan la apariencia del texto, incluyendo tipo de fuente, tamaño, peso y color, asegurando legibilidad y coherencia en toda la interfaz.

Variables:
--bs-font-sans-serif, --bs-font-monospace, --bs-body-font-family, --bs-body-font-size, --bs-body-font-weight, --bs-body-line-height, --bs-body-color, --bs-body-bg

4. Espaciado y bordes

Estas variables permiten gestionar el espacio entre elementos y la apariencia de los bordes, facilitando la creación de diseños ordenados y visualmente equilibrados.

Variables:
--bs-spacer, --bs-border-width, --bs-border-color, --bs-border-radius, --bs-border-radius-sm, --bs-border-radius-lg, --bs-border-radius-xl, --bs-border-radius-xxl, --bs-border-radius-pill

5. Sombras

Las variables de sombras se utilizan para generar efectos de profundidad y jerarquía visual en los componentes, como tarjetas o modales.

Variables:
--bs-box-shadow, --bs-box-shadow-sm, --bs-box-shadow-lg, --bs-box-shadow-inset

6. Botones

Estas variables controlan la apariencia de los botones, incluyendo colores, espaciado, tipografía y bordes, permitiendo personalizar su diseño de forma global.

Variables:
--bs-btn-padding-x, --bs-btn-padding-y, --bs-btn-font-size, --bs-btn-border-radius, --bs-btn-color, --bs-btn-bg, --bs-btn-border-color

7. Formularios

Las variables de formularios definen el estilo de los campos de entrada, como colores de fondo, bordes y estados de enfoque, mejorando la experiencia del usuario.

Variables:
--bs-form-control-bg, --bs-form-control-color, --bs-form-control-border-color, --bs-form-control-focus-border-color

8. Z-index (capas)

Estas variables controlan la superposición de elementos en la interfaz, determinando qué componentes aparecen encima de otros.

Variables:
--bs-zindex-dropdown, --bs-zindex-sticky, --bs-zindex-fixed, --bs-zindex-modal, --bs-zindex-popover, --bs-zindex-tooltip
9. Breakpoints (responsive)

Las variables de breakpoints permiten adaptar el diseño a diferentes tamaños de pantalla, facilitando la creación de interfaces responsivas.

Variables:
--bs-breakpoint-xs, --bs-breakpoint-sm, --bs-breakpoint-md, --bs-breakpoint-lg, --bs-breakpoint-xl, --bs-breakpoint-xxl
10. Temas / modo oscuro

Estas variables permiten cambiar la apariencia global del sitio mediante temas, como el modo oscuro, modificando colores y fondos dinámamente.

Variables:
--bs-body-bg, --bs-body-color, --bs-emphasis-color, --bs-secondary-bg, --bs-tertiary-bg
2. Dar un estilo mejor al carousel de Huskies