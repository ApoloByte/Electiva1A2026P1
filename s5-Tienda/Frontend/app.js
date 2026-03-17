const apiBaseUrl = "http://localhost:3000";


// 🔹 Cargar productos
async function loadProducts() {
    const res = await fetch(`${apiBaseUrl}/products`);
    const products = await res.json();

    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Agregar al carrito
            </button>
        `;

        container.appendChild(div);
    });
}


// 🔹 Agregar al carrito
async function addToCart(productId) {
    await fetch(`${apiBaseUrl}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            productId: productId,
            quantity: 1
        })
    });

    loadCart();
}


// 🔹 Cargar carrito
async function loadCart() {
    const res = await fetch(`${apiBaseUrl}/cart`);
    const data = await res.json();

    const container = document.getElementById("cart-container");
    const totalElement = document.getElementById("cart-total");

    container.innerHTML = "";

    data.items.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
            <strong>${item.name}</strong><br>
            Cantidad: ${item.quantity} <br>
            Precio: $${item.price} <br>
            Subtotal: $${item.subtotal} <br>

            <button onclick="removeFromCart(${item.id})">
                Eliminar
            </button>
        `;

        container.appendChild(div);
    });

    totalElement.textContent = `Total: $${data.total}`;
}


// 🔹 Eliminar del carrito
async function removeFromCart(id) {
    await fetch(`${apiBaseUrl}/cart/${id}`, {
        method: "DELETE"
    });

    loadCart();
}


// 🔹 Vaciar carrito
async function clearCart() {
    await fetch(`${apiBaseUrl}/cart`, {
        method: "DELETE"
    });

    loadCart();
}

async function checkout() {

    await fetch(`${apiBaseUrl}/checkout`, {
        method: "POST"
    });

    alert("Compra realizada con éxito 🛒");

    loadCart();
}


// 🔥 Inicialización
loadProducts();
loadCart();