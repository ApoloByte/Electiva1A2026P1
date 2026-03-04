
        const contenedor = document.getElementById('lista-tareas');
        const boton = document.getElementById('btn-agregar');
        

        let contadorTareas = 1;


        boton.addEventListener('click', function() {
            

            let ul = contenedor.querySelector('ul');
            

            if (!ul) {
                ul = document.createElement('ul');
                contenedor.appendChild(ul);
            }

            const nuevoLi = document.createElement('li');
            nuevoLi.textContent = "Tarea " + contadorTareas;
            contadorTareas++; 


            ul.appendChild(nuevoLi);
            
        });