const apiBaseUrl = "http://localhost:3000";

async function loadProducts() {
    const res = await fetch(`${apiBaseUrl}/products`);
    const products = await res.json();
    const container = document.getElementById("products-container");
    container.innerHTML = "";
    products.forEach(product => {

        const div = document.createElement("div");

        div.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">
        Agregar al carrito
        </button>
        `;

        container.appendChild(div);

    });

}

async function addToCart(productId) {

    await fetch(`${apiBaseUrl}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            productId: productId,
            quantity: 1
        })
    });

    loadCart();

}

async function loadCart() {

    const res = await fetch(`${apiBaseUrl}/cart`);
    const data = await res.json();

    const container = document.getElementById("cart-container");
    const totalElement = document.getElementById("cart-total");

    container.innerHTML = "";

    data.items.forEach(item => {

        const div = document.createElement("div");

        div.innerHTML = `
        ${item.name} - ${item.quantity} x $${item.price}
        = $${item.subtotal}
        <button onclick="removeFromCart(${item.id})">
        Eliminar
        </button>
        `;

        container.appendChild(div);

    });

    totalElement.textContent = `Total: $${data.total}`;

}

async function removeFromCart(id) {

    await fetch(`${apiBaseUrl}/cart/${id}`, {
        method: "DELETE"
    });

    loadCart();

}

loadProducts();
loadCart();