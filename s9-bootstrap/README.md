# Tarea:

**1.** Investigar acerca de las [Custom Properties](https://getbootstrap.com/docs/5.3/customize/css-variables/) de Bootstrap

**2.** Dar un estilo mejor al carousel de Huskies

# Custom Properties en Boostrap
Las Custom Properties (variables CSS) en Bootstrap permiten personalizar estilos de forma dinámica directamente en el navegador, sin necesidad de recompilar Sass. Son fundamentales en la arquitectura moderna del framework, ya que almacenan valores reutilizables como colores, tipografías, tamaños y bordes.

# ¿Por que Bootstrap adopto Custom Properties?

Bootstrap adoptó Custom Properties a partir de la versión 5 como respuesta a la necesidad de personalización dinámica, soporte nativo para temas y mayor flexibilidad sin depender de procesos de compilación. Esto permite ajustar estilos en tiempo real y optimiza el mantenimiento del código.

- Para hacer el framework más flexible sin depender de Sass.
- Para permitir temas dinámicos (oscuro/claro).
- Para reducir el tamaño del CSS compilado.
- Para que las variables se puedan inspeccionar y modificar directamente desde DevTools.

# ¿Como funcionan?
Todas las variables usan el prefijo **--bs-** para evitar conflictos y se aplican mediante la función **var() en CSS:**

```css
.mi-elemento {
  color: var(--bs-primary);
  background-color: var(--bs-body-bg);
  border: 1px solid var(--bs-border-color);
}
```

# Limitaciones de las Custom Properties

- No funcionan dentro de media queries
- No se pueden usar para ciertos cálculos como **@media (max-width: var(--bs-breakpoint))**
- No sustituyen completamente a Sass (por ejemplo, no se pueden anidar reglas)

Aunque las Custom Properties son muy potentes, tienen limitaciones importantes: no pueden usarse dentro de media queries y no permiten cálculos complejos como los de Sass. Por esto, Bootstrap mantiene un modelo híbrido entre Sass y variables CSS.

# Tipos de Variable
**1.** Variables Globales (:root)

Definen el estilo base de toda la aplicación:

- Colores: --bs-primary, --bs-secondary, --bs-success, etc.
- Escala de grises: --bs-gray-100 a --bs-gray-900
- Tipografía: --bs-body-font-family, --bs-body-font-size
- Fondos y texto: --bs-body-bg, --bs-body-color
- Bordes y sombras: --bs-border-radius, --bs-box-shadow

Estas variables garantizan consistencia visual en todo el proyecto.

**2.** Variables de Componentes

Cada componente de Bootstrap tiene variables propias que permiten modificar su apariencia sin afectar otros elementos:

- Botones: --bs-btn-bg, --bs-btn-color
- Navbar: --bs-navbar-color
- Cards: --bs-card-bg
- Modals: --bs-modal-bg

Esto facilita una personalización más específica y controlada.

**3.** Soporte para Modo Oscuro

Bootstrap 5.3 incluye soporte nativo para temas claro y oscuro mediante el atributo: 

```
**data-bs-theme="dark"**
```


# Ventajas
- Personalización en tiempo real: Se pueden cambiar valores directamente en el navegador o con JavaScript.

- Mayor consistencia: Se reutilizan valores definidos, evitando errores y 
duplicación.

- Sin necesidad de Sass: No es obligatorio usar preprocesadores para personalizar Bootstrap.

- Facilidad para temas: Permite implementar modo oscuro/claro fácilmente.

Ejemplo de personalización global:

# Conclusion

Las Custom Properties en Bootstrap hacen que la personalización sea más flexible, rápida y mantenible. Permiten modificar tanto estilos globales como componentes específicos, además de facilitar características modernas como el modo oscuro, todo sin necesidad de recompilar el framework.




