# Tarea:

1. Investigar acerca de las [Custom Properties](https://getbootstrap.com/docs/5.3/customize/css-variables/) de Bootstrap
2. Dar un estilo mejor al carousel de Huskies


Consulta:

Las Custom Properties de Bootstrap (también conocidas como variables CSS) son una parte fundamental de su arquitectura moderna. A diferencia de las variables de Sass, estas viven en el navegador, lo que permite modificarlas en tiempo real sin necesidad de recompilar el código fuente.

1. Niveles de Aplicación
Bootstrap organiza sus variables CSS en tres niveles principales:

Variables de Raíz (:root): Son globales y definen los colores principales, fuentes y configuraciones generales del framework.

Variables de Componente: Muchos componentes (como .btn, .card o .navbar) tienen sus propias variables internas que heredan de la raíz pero pueden ser sobrescritas localmente.

Variables de Utilidad: Se utilizan para estados específicos, como colores de fondo o bordes.

2. Sintaxis y Uso
Todas las variables de Bootstrap comienzan con el prefijo --bs-. Para usarlas en tu propio CSS, utilizas la función var():

CSS
.mi-elemento {
  color: var(--bs-primary);
  background-color: var(--bs-tertiary-bg);
  border: 1px solid var(--bs-border-color);
}

3. Ventajas de usar Custom Properties
Manipulación con JavaScript: Puedes cambiar un color o un espaciado dinámicamente mediante element.style.setProperty('--bs-primary', 'red').

Temas (Modo Oscuro/Claro): Bootstrap 5.3+ depende totalmente de estas variables para el soporte nativo de modo oscuro. Cambiar el atributo data-bs-theme="dark" simplemente redefine los valores de las variables de color.

Personalización sin Sass: Si no quieres configurar un entorno de compilación, puedes simplemente añadir un bloque de estilos en tu HTML para cambiar el aspecto:

CSS
:root {
  --bs-primary: #ff5733; /* Cambia el color primario globalmente */
  --bs-body-font-family: 'Inter', sans-serif;
}
