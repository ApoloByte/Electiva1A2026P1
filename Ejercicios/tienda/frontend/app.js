const apiBaseUrl = "http://localhost:3000";

// CARGAR PRODUCTOS
async function loadProducts() {
    const res = await fetch(`${apiBaseUrl}/products`);
    const products = await res.json();

    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach(p => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${p.name} - $${p.price}</p>
            <button onclick="addToCart(${p.id})">Agregar</button>
        `;

        container.appendChild(div);
    });
}


// AGREGAR AL CARRITO

async function addToCart(productId) {
    await fetch(`${apiBaseUrl}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            productId,
            quantity: 1
        })
    });

    loadCart();
}


// CARGAR CARRITO

async function loadCart() {
    const res = await fetch(`${apiBaseUrl}/cart`);
    const data = await res.json();

    const container = document.getElementById("cart-container");
    container.innerHTML = "";

    data.items.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${item.name} x${item.quantity} = $${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;

        container.appendChild(div);
    });

    document.getElementById("cart-total").textContent =
        "Total: $" + data.total;
}


// ELIMINAR

async function removeFromCart(id) {
    await fetch(`${apiBaseUrl}/cart/${id}`, {
        method: "DELETE"
    });

    loadCart();
}


loadProducts();
loadCart();

// VACIAR CARRITO

async function clearCart() {
    await fetch(`${apiBaseUrl}/cart`, {
        method: "DELETE"
    });

    loadCart();
}