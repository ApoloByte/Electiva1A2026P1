const API = "http://localhost:3000";

// Cargar productos
async function loadProducts() { 
    const res = await fetch(`${API}/products`); // 
    const products = await res.json(); 

    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => { //
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Precio: $${p.price}</p>
                <button onclick="addToCart(${p.id})">Agregar</button>
            </div>
        `;
    });
}

// Agregar al carrito
async function addToCart(id) { //
    await fetch(`${API}/cart`, { //
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            productId: id,
            quantity: 1
        })
    });

    loadCart();
}

// Cargar carrito
async function loadCart() {
    const res = await fetch(`${API}/cart`); 
    const data = await res.json(); 

    const container = document.getElementById("cart"); 
    container.innerHTML = "";

    data.items.forEach(item => {
        container.innerHTML += `
            <div>
                ${item.name} x${item.quantity} - $${item.total}
                <button onclick="deleteItem(${item.id})">Eliminar</button>
            </div>
        `;
    });

    document.getElementById("total").textContent = data.total;
}

// Eliminar producto
async function deleteItem(id) {
    await fetch(`${API}/cart/${id}`, {
        method: "DELETE"
    });

    loadCart();
}

// Inicializar
loadProducts();
loadCart();
