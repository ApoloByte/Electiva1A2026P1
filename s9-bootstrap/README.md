# Tarea:

1. Investigar acerca de las [Custom Properties](https://getbootstrap.com/docs/5.3/customize/css-variables/) de Bootstrap

* Las **custom properties** o variables CSS son valor específicos definidos en el Bootstrap que se pueden reutilizar en todo el proyecto.
Son "contenedores" de información que guardan colores, tamaños, estilos y más, directamente en el navegador. Antes Bootstrap dependía   de las variables Sass y estás se copilan en el servidor y el navegador solo ve el resultado final y si querias modificar algo debias recodificar directamente el archivo **.scss** en cambio **CSS** permite modificar las variables en tiempo real, le reflejaran directamente. 
* Al poder guardar infomacion tambien se tiene como ventaja la consistencia ya que se usan las variables que tu definas y no tienes que andar recordardo el codigo hexadecimal.
## Ejemplo:

* :root {
    * --bs-primary: #5a6268;       /* Cambia el azul por gris */
    * --bs-primary-rgb: 90, 98, 104; /* Necesario para efectos de transparencia */
    * --bs-body-bg: #f8f9fa;       /* Cambia el fondo de toda la página */
}

* Ahora cualquier componente de Bootstrap que use "primary" cambiará solo 
.btn-primary {
    border-radius: 50px;}
---
2. Dar un estilo mejor al carousel de Huskies