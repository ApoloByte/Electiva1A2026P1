const apiBaseUrl = "http://localhost:3000";

// 1. Cargar productos desde el servidor
async function loadProducts() {
    const res = await fetch(`${apiBaseUrl}/products`);
    const products = await res.json();
    
    const container = document.getElementById('products-container');
    container.innerHTML = ""; // Limpiar antes de llenar

    products.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${producto.name}</h3>
            <p class="price">$${producto.price.toLocaleString()}</p>
            <button onclick="addToCart(${producto.id})">Agregar al Carrito</button>
        `;
        container.appendChild(card);
    });
}

// 2. Agregar un producto al carrito
async function addToCart(productId) {
    await fetch(`${apiBaseUrl}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity: 1 })
    });
    loadCart(); // Actualizar la vista del carrito
}

// 3. Cargar y mostrar el carrito
async function loadCart() {
    const res = await fetch(`${apiBaseUrl}/cart`);
    const data = await res.json();
    
    const container = document.getElementById('cart-container');
    const totalSpan = document.getElementById('cart-total');
    
    container.innerHTML = "";
    
    data.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${item.subtotal.toLocaleString()}</span>
            <button class="btn-delete" onclick="removeFromCart(${item.id})">x</button>
        `;
        container.appendChild(itemDiv);
    });
    
    totalSpan.innerText = data.total.toLocaleString();
}

// 4. Eliminar un producto del carrito
async function removeFromCart(cartItemId) {
    await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
        method: 'DELETE'
    });
    loadCart();
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
});