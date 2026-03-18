const apiBaseUrl = "http://localhost:3000";

//Función para cargar productos desde el Backend
async function loadProducts() {
    try {
        const response = await fetch(`${apiBaseUrl}/products`); //pide todos los productos al backend
        const products = await response.json();          //
        
        const container = document.getElementById('products-container');
        container.innerHTML = ''; // Limpiamos antes de cargar

        products.forEach(product => {
            // Creamos el HTML de la tarjeta para cada producto
            const card = document.createElement('div');
            card.className = 'product-card';



            // Permite mostrar la imagen en cada tarjeta
            card.innerHTML = `
                <img src="${product.image_url}" alt="${product.name}" style="width:100%; border-radius:8px; margin-bottom:10px; height:150px; object-fit:cover;">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>`;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

//Función para agregar un producto al carrito
async function addToCart(productId) {
    try {
        await fetch(`${apiBaseUrl}/cart`, {
            method: 'POST',     //envía el producto al backend
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: productId, quantity: 1 })
        });
        // Después de agregar, refrescamos la vista del carrito
        loadCart();
    } catch (error) {
        console.error("Error al agregar al carrito:", error);
    }
}

//Función para cargar y mostrar el carrito
async function loadCart() {
    try {
        const response = await fetch(`${apiBaseUrl}/cart`);  //obtiene el carrito
        const data = await response.json(); // Data contiene { items, total }
        
        const container = document.getElementById('cart-container');
        const totalElement = document.getElementById('cart-total');
        
        container.innerHTML = ''; // Limpiamos
        

        //muestra los porductos
        data.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <span>$${item.subtotal}</span>
                <button class="delete-btn" onclick="removeFromCart(${item.id})">X</button>`;
            container.appendChild(div);
        });

        totalElement.innerText = `$${data.total.toFixed(2)}`;
    } catch (error) {
        console.error("Error cargando carrito:", error);
    }
}

//Función para eliminar un ítem del carrito
async function removeFromCart(cartItemId) {
    try {
        await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {   
            method: 'DELETE'   //elimina el objeto por id
        });
        loadCart(); // Refrescamos
    } catch (error) {
        console.error("Error al eliminar del carrito:", error);
    }
}

// Inicializar la página cargando todo
loadProducts();
loadCart();