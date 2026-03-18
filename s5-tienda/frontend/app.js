const apiBaseUrl = "http://localhost:3000";

async function loadProducts() {
    const res = await fetch(`${apiBaseUrl}/products`);
    const products = await res.json();
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    products.forEach(p => {
        // Formatear el precio con puntos de mil (COP)
        const precioFormateado = p.price.toLocaleString('es-CO');
        
        container.innerHTML += `
            <div class="card" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div style="width: 100%; height: 150px; display: flex; justify-content: center; align-items: center; background-color: #f0f0f0; border-radius: 5px; margin-bottom: 10px; overflow: hidden;">
                    <img src="${p.image_url}" alt="${p.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                </div>
                
                <h3 style="margin: 5px 0;">${p.name}</h3>
                <p style="margin: 5px 0;">Precio: $${precioFormateado}</p>
                <button onclick="addToCart(${p.id})">Agregar al carrito</button>
            </div>
        `;
    });
}

async function addToCart(productId) {
    await fetch(`${apiBaseUrl}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity: 1 })
    });
    loadCart();
}

async function loadCart() {
    const res = await fetch(`${apiBaseUrl}/cart`);
    const data = await res.json();
    const container = document.getElementById('cart-container');
    container.innerHTML = '';

    data.items.forEach(item => {
        // Formatear el subtotal del carrito con puntos de mil
        const subtotalFormateado = item.subtotal.toLocaleString('es-CO');

        container.innerHTML += `
            <div class="cart-item">
                <p>${item.name} (x${item.quantity}) - $${subtotalFormateado}</p>
                <button onclick="removeFromCart(${item.id})" class="btn-danger">Eliminar</button>
            </div>
        `;
    });
    
    // Formatear el total general con puntos de mil
    const totalFormateado = data.total.toLocaleString('es-CO');
    document.getElementById('cart-total').innerText = totalFormateado;
}

async function removeFromCart(cartItemId) {
    await fetch(`${apiBaseUrl}/cart/${cartItemId}`, { method: 'DELETE' });
    loadCart();
}

// Función para el endpoint opcional de vaciar carrito
async function emptyCart() {
    await fetch(`${apiBaseUrl}/cart`, { method: 'DELETE' });
    loadCart();
}

// Carga inicial
loadProducts();
loadCart();