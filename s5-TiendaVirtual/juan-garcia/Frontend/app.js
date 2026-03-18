const apiBaseUrl = "http://localhost:3000";

// --- 1. Cargar productos desde el servidor ---
const loadProducts = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/products`);
        const products = await response.json();
        
        const productsContainer = document.getElementById('productsContainer');
        productsContainer.innerHTML = ''; 

        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            // Aquí agregamos la etiqueta <img> usando el image_url de la base de datos
            card.innerHTML = `
                <img src="${product.image_url}" alt="${product.name}" style="width:100%; height:150px; object-fit:cover; border-radius:4px;">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Agregar al carrito</button>
            `;
            productsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
};
// --- 2. Agregar un producto al carrito ---
const addToCart = async (productId) => {
    try {
        const response = await fetch(`${apiBaseUrl}/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity: 1 })
        });

        if (response.ok) {
            loadCart(); // Refrescar el carrito después de agregar
        }
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
    }
};

// --- 3. Cargar y mostrar los ítems del carrito ---
const loadCart = async () => {
    try {
        const response = await fetch(`${apiBaseUrl}/cart`);
        const data = await response.json(); // Trae { items, total_general }
        
        const cartContainer = document.getElementById('cartContainer');
        const totalDisplay = document.getElementById('totalDisplay');
        
        cartContainer.innerHTML = ''; 

        data.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>
                    <strong>${item.name}</strong> x${item.quantity} 
                    - Subtotal: $${item.total_item.toFixed(2)}
                </p>
                <button onclick="removeFromCart(${item.id})">Eliminar</button>
            `;
            cartContainer.appendChild(itemElement);
        });

        totalDisplay.innerText = `Total: $${data.total_general.toFixed(2)}`;
    } catch (error) {
        console.error('Error al cargar el carrito:', error);
    }
};

// --- 4. Eliminar un ítem específico del carrito ---
const removeFromCart = async (cartItemId) => {
    try {
        const response = await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadCart();
        }
    } catch (error) {
        console.error('Error al eliminar del carrito:', error);
    }
};

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
});