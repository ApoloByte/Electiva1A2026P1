// Seleccionamos los elementos del DOM
        const contenedor = document.getElementById('lista-tareas');
        const boton = document.getElementById('btn-agregar');
        
        // Variable para llevar la cuenta de las tareas
        let contadorTareas = 1;

        // Escuchamos el evento 'click' del botón
        boton.addEventListener('click', function() {
            
            // ii. Verificar si ya existe un <ul> dentro del contenedor
            let ul = contenedor.querySelector('ul');
            
            // Si no existe, lo creamos y lo agregamos al contenedor principal
            if (!ul) {
                ul = document.createElement('ul');
                contenedor.appendChild(ul);
            }

            // i. Crear el nuevo elemento <li> con el texto "Tarea X"
            const nuevoLi = document.createElement('li');
            nuevoLi.textContent = "Tarea " + contadorTareas;
            contadorTareas++; // Aumentamos el contador para el próximo clic

            // iii. Añadir el nuevo <li> al <ul> usando appendChild
            ul.appendChild(nuevoLi);
            
        });