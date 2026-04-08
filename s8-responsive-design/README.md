# Diseño responsive
[link a notion](/33c04bbd869d8065a8d4ff252f07abe9?pvs=25#33c04bbd869d8037ab9ec96c1e2720d4)

El diseño responsive busca que la página web se adapte a distintos tamaños de pantalla sin perder usabilidad, evitando anchos fijos y aprovechando técnicas como media queries y layouts flexibles.

A continuación se presenta una actividad de consulta que le permitirá aprender sobre el diseño web responsive.

## Entregables:

1. link a documento de Google Docs subido al classroom en donde se presente la investigación realizada y para ello tenga en cuenta las siguientes recomendaciones
    - recuerde incluir una portada, utilice imágenes (el código desarrollado y el resultado con una breve explicación), la herramienta de títulos de Word, la herramienta de generación automática del contenido (si requiere ayuda, pregunte al docente) y referencias cruzadas en las imágenes (que no exista ninguna imagen sin referenciar en el texto)
    - la estructura del documento será algo así por cada concepto:
        - Título del concepto
        - Breve explicación técnica
        - Imágenes de ejemplo(s)
        - Descripción de como funciona lo que realizó
    
    ## Recomendaciones
    
    - Evite copiar el trabajo de los compañeros (se pasará por una automatización basada en git para garantizar que todos hayan realizado el trabajo de manera individual)
    - Procure evitar IA generativa, utilicela para comprender los conceptos pero al final el texto escrito en el documento debe ser de su autoría
    - Si tiene dudas, no dude en preguntar al docente
2. Código subido al github de la clase (en su respectiva rama); para ello, tenga en cuenta lo siguiente:
    - recuerde hacer un `git pull origin dev-victor-pinto` para tener el nombre que se estandarizó para la carpeta
    - revise que se encuentra en su rama utilizando git branch
    - revise que el usuario e email configurado en su git corresponda con sus datos utilizando el comando `git config --global list` a continuación desplácese con las flechas arriba y abajo del teclado
        - Si no corresponde, utilice los siguientes comandos reemplazando lo que está en mayúsculas:
            
            ```bash
            git config --global user.name "NOMBRE_USUARIO"
            git config --global user.email CORREO_ELECTRONICO
            ```
            
    - cree diferentes carpetas para cada tema investigado, ejemplo: `s-x-tema/media-queries`; y dentro de estas carpetas incluya los diferentes archivos: index.html, style.css y script.js que darán forma al ejemplo

**Pregunta problema:** ¿Cómo debe transformarse la estructura de una interfaz principal para funcionar correctamente en escritorio, tableta y móvil?

## **Subtemas a investigar:**

- Diferencia entre diseño fijo y diseño responsive

### Para los temas que siguen, aplique un esfuerzo medio, busque almenos 1 ejemplo además de la lectura sugerida

- Uso de etiquetas semánticas como `header`, `nav` y `main`
- Uso de media queries para cambiar distribución del menú o del encabezado
    
    > un primer acercamiento al tema lo puede encontrar [aquí](http://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries); si desea utilizar el traductor del navegador, procure intercalar entre inglés y español para entender los nombres especialmente dentro de los conceptos que llevan al código, ya que muchas veces su traducción literal carece de sentido en español, ejemplo: media queries = consulta de los medios
    > 
- Uso de Flexbox o Grid para reorganizar el contenido principal
    
    > un primer acercamiento al tema lo puede encontrar [aquí](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#flexbox)
    > 

### Para los temas que siguen, aplique un esfuerzo alto, busque almenos 2 ejemplos además de la lectura sugerida e indague a mayor profundidad las diferentes formas de aplicar el concepto

- CSS grid layout
    
    > * Un primer acercamiento lo puede encontrar [aquí](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#css_grid)
    > * Un acercamiento al tema más completo lo puede encontrar [aquí](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids)
    > 

### Los siguientes temas son importantes pero no requieren que se centre completamente en ellos, por favor aplique un menor esfuerzo aquí

- imágenes y media responsive; [clic aquí](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#responsive_imagesmedia)
- [Tipografía responsive](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#responsive_typography)
- Usando [viewport](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#using_viewport_units_for_responsive_typography) para tipografía responsive

