"use strict";

// url base del backend
const apiBaseUrl = "http://localhost:3000";

// referencias a los elementos del dom
const productsContainer = document.getElementById("products-container");
const cartContainer     = document.getElementById("cart-container");
const cartTotalEl       = document.getElementById("cart-total");
const btnVaciar         = document.getElementById("btn-vaciar");
const btnComprar        = document.getElementById("btn-comprar");


// carga y muestra todos los productos disponibles
async function loadProducts() {
  const res      = await fetch(`${apiBaseUrl}/products`);
  const products = await res.json();

  productsContainer.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");
    card.className = "product-card";

    // muestra imagen si el producto tiene url, si no muestra un texto
    const imgHtml = product.image_url
      ? `<img src="${product.image_url}" alt="${product.name}">`
      : `<p>sin imagen</p>`;

    card.innerHTML = `
      ${imgHtml}
      <p class="nombre">${product.name}</p>
      <p class="precio">$${product.price.toFixed(2)}</p>
      <button>Agregar al carrito</button>
    `;

    // al hacer clic en el boton se agrega el producto al carrito
    card.querySelector("button").addEventListener("click", () => {
      addToCart(product.id);
    });

    productsContainer.appendChild(card);
  }
}


// agrega un producto al carrito con cantidad 1
async function addToCart(productId) {
  await fetch(`${apiBaseUrl}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity: 1 }),
  });

  // actualiza la vista del carrito despues de agregar
  loadCart();
}


// carga y muestra los items actuales del carrito
async function loadCart() {
  const res  = await fetch(`${apiBaseUrl}/cart`);
  const data = await res.json(); // { items, total }

  cartContainer.innerHTML = "";

  // muestra mensaje si el carrito esta vacio
  if (data.items.length === 0) {
    cartContainer.innerHTML = `<p class="carrito-vacio">el carrito esta vacio</p>`;
    cartTotalEl.textContent = "Total: $0.00";
    return;
  }

  // crea un elemento por cada item del carrito
  for (const item of data.items) {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.name}</span>
      <span>x${item.quantity}</span>
      <span>$${item.subtotal.toFixed(2)}</span>
      <button>Eliminar</button>
    `;

    // al hacer clic en eliminar se quita el item del carrito
    div.querySelector("button").addEventListener("click", () => {
      removeFromCart(item.id);
    });

    cartContainer.appendChild(div);
  }

  // muestra el total calculado por el backend
  cartTotalEl.textContent = `Total: $${data.total.toFixed(2)}`;
}


// elimina un item del carrito por su id
async function removeFromCart(cartItemId) {
  await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
    method: "DELETE",
  });

  // recarga el carrito para reflejar el cambio
  loadCart();
}


// vacia todo el carrito
async function clearCart() {
  await fetch(`${apiBaseUrl}/cart`, { method: "DELETE" });
  loadCart();
}


// simula el proceso de compra vaciando el carrito
async function checkout() {
  await clearCart();
  alert("compra realizada con exito , el carrito esta vacio");
}


// eventos de los botones de accion
btnVaciar.addEventListener("click", clearCart);
btnComprar.addEventListener("click", checkout);


// carga inicial al abrir la pagina
loadProducts();
loadCart();