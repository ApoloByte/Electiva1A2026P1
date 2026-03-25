const apiBaseUrl = "http://localhost:3000";

async function loadProducts() {
    const res = await fetch(`${apiBaseUrl}/products`);
    const products = await res.json();
    const container = document.getElementById('products-container');
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Precio: $${p.price}</p>
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
    container.innerHTML = "";

    data.items.forEach(item => {
        container.innerHTML += `
            <div class="cart-item">
                ${item.name} - Cantidad: ${item.quantity} - Subtotal: $${item.subtotal}
                <button onclick="removeFromCart(${item.id})">Eliminar</button>
            </div>
        `;
    });
    document.getElementById('cart-total').innerText = data.total;
}

async function removeFromCart(cartItemId) {
    await fetch(`${apiBaseUrl}/cart/${cartItemId}`, { method: 'DELETE' });
    loadCart();
}

// Carga inicial
loadProducts();
loadCart();