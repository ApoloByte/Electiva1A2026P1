const apiBaseUrl = "http://localhost:3000";

// 1. Cargar productos al iniciar
async function loadProducts() {
    try {
        const res = await fetch(`${apiBaseUrl}/products`);
        const products = await res.json();
        const container = document.getElementById("products-container");
        
        container.innerHTML = ""; // Limpiar
        products.forEach(p => {
            container.innerHTML += `
                <div class="product-card">
                    <img src="${p.image_url}" alt="${p.name}" width="100">
                    <h3>${p.name}</h3>
                    <p>Precio: $${p.price}</p>
                    <button onclick="addToCart(${p.id})">Agregar al carrito</button>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

// 2. Agregar al carrito
async function addToCart(productId) {
    try {
        await fetch(`${apiBaseUrl}/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity: 1 })
        });
        loadCart(); // Recargar el carrito para ver el cambio
    } catch (error) {
        console.error("Error agregando al carrito:", error);
    }
}

// 3. Cargar el carrito y calcular total
async function loadCart() {
    try {
        const res = await fetch(`${apiBaseUrl}/cart`);
        const data = await res.json(); // Trae { items, total }
        
        const container = document.getElementById("cart-container");
        const totalElement = document.getElementById("cart-total");
        
        container.innerHTML = "";
        data.items.forEach(item => {
            container.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} x${item.quantity}</span>
                    <span>Subtotal: $${item.subtotal}</span>
                    <button onclick="removeFromCart(${item.id})">Eliminar</button>
                </div>
            `;
        });
        
        totalElement.textContent = data.total;
    } catch (error) {
        console.error("Error cargando el carrito:", error);
    }
}

// 4. Eliminar ítem del carrito
async function removeFromCart(cartItemId) {
    try {
        await fetch(`${apiBaseUrl}/cart/${cartItemId}`, { method: 'DELETE' });
        loadCart();
    } catch (error) {
        console.error("Error eliminando ítem:", error);
    }
}

// 5. Vaciar carrito (Opcional)
async function clearCart() {
    try {
        await fetch(`${apiBaseUrl}/cart`, { method: 'DELETE' });
        loadCart();
    } catch (error) {
        console.error("Error vaciando carrito:", error);
    }
}

// Inicializar la tienda
loadProducts();
loadCart();