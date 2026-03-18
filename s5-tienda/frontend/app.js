const apiBaseUrl = "http://localhost:3000";

async function loadProducts() {
  const res = await fetch(`${apiBaseUrl}/products`);
  const products = await res.json();
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image_url}" width="100">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Agregar al carrito</button>
    `;
    container.appendChild(div);
  });
}

async function addToCart(productId) {
  await fetch(`${apiBaseUrl}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity: 1 })
  });
  loadCart();
}

async function loadCart() {
  const res = await fetch(`${apiBaseUrl}/cart`);
  const { items, total } = await res.json();
  const container = document.getElementById("cart-container");
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Cantidad: ${item.quantity}</p>
      <p>Subtotal: $${item.subtotal}</p>
      <button onclick="removeFromCart(${item.id})">Eliminar</button>
    `;
    container.appendChild(div);
  });

  document.getElementById("cart-total").textContent = `Total: $${total}`;
}

async function removeFromCart(cartItemId) {
  await fetch(`${apiBaseUrl}/cart/${cartItemId}`, { method: "DELETE" });
  loadCart();
}

// Inicializar
loadProducts();
loadCart();