const apiBaseUrl = "http://localhost:3000";

const productsContainer = document.getElementById("products-container");
const cartContainer = document.getElementById("cart-container");
const cartTotal = document.getElementById("cart-total");

async function loadProducts() {
  const response = await fetch(`${apiBaseUrl}/products`);
  const products = await response.json();

  productsContainer.innerHTML = "";

  for (const product of products) {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button data-product-id="${product.id}">Add to Cart</button>
    `;

    const addButton = productElement.querySelector("button");
    addButton.addEventListener("click", () => addToCart(product.id));

    productsContainer.appendChild(productElement);
  }
}

async function addToCart(productId) {
  await fetch(`${apiBaseUrl}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      quantity: 1,
    }),
  });

  await loadCart();
}

async function loadCart() {
  const response = await fetch(`${apiBaseUrl}/cart`);
  const cartData = await response.json();

  cartContainer.innerHTML = "";

  for (const item of cartData.items) {
    const cartItemElement = document.createElement("div");
    cartItemElement.innerHTML = `
      <p>${item.name}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Subtotal: $${item.subtotal.toFixed(2)}</p>
      <button data-cart-item-id="${item.id}">Delete</button>
    `;

    const deleteButton = cartItemElement.querySelector("button");
    deleteButton.addEventListener("click", () => removeFromCart(item.id));

    cartContainer.appendChild(cartItemElement);
  }

  cartTotal.textContent = `Total: $${cartData.total.toFixed(2)}`;
}

async function removeFromCart(cartItemId) {
  await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
    method: "DELETE",
  });

  await loadCart();
}

loadProducts();
loadCart();
