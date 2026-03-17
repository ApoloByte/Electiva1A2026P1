const apiBaseUrl = "http://localhost:3000";

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
});


async function loadProducts() {
    try {
        const response = await fetch(`${apiBaseUrl}/products`);
        const products = await response.json();
        
        const container = document.getElementById('products-container');
        container.innerHTML = ""; 

        products.forEach(product => {
            container.innerHTML += `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>Precio: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Agregar al carrito</button>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}


async function addToCart(productId) {
    try {
        await fetch(`${apiBaseUrl}/cart_items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: productId, quantity: 1 })
        });
        
        loadCart();
    } catch (error) {
        console.error("Error al agregar:", error);
    }
}


async function loadCart() {
    try {
        const response = await fetch(`${apiBaseUrl}/cart_items`);
        const data = await response.json();

        const itemsContainer = document.getElementById('cart-items-list');
        const totalElement = document.getElementById('cart-total');

        if (!itemsContainer || !totalElement) return;

        itemsContainer.innerHTML = "";
        data.items.forEach(item => {
            itemsContainer.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} x ${item.quantity}</span> - 
                    <span>$${item.subtotal}</span>
                    <!-- ESTA LÍNEA ES LA QUE TE FALTABA -->
                    <button onclick="removeFromCart(${item.id})">Eliminar</button>
                </div>`;
        });

        totalElement.innerText = `Total: $${data.total}`;
    } catch (e) { console.error("Error al cargar carrito:", e); }
}

async function removeFromCart(cartItemId) {
    try {
        await fetch(`${apiBaseUrl}/cart_items/${cartItemId}`, {
            method: 'DELETE'
        });
        
        loadCart(); 
    } catch (error) {
        console.error("Error al eliminar:", error);
    }
}

async function clearCart() {
    if (!confirm("¿Estás seguro de que quieres vaciar todo el carrito?")) return;

    try {
        const response = await fetch(`${apiBaseUrl}/cart_items_all`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert("Carrito vaciado");
            loadCart(); 
        }
    } catch (error) {
        console.error("Error al vaciar el carrito:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
});