const apiBaseUrl = 'http://localhost:3000';

// Cargar productos
async function loadProducts() {
  const res = await fetch(`${apiBaseUrl}/products`);
  const products = await res.json();

  const container = document.getElementById('products-container');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.image_url || 'https://via.placeholder.com/150'}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Precio: $${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    `;

    container.appendChild(card);
  });
}

// Agregar al carrito
async function addToCart(productId) {
  await fetch(`${apiBaseUrl}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity: 1 })
  });
  loadCart();
}

// Cargar carrito
async function loadCart() {
  const res = await fetch(`${apiBaseUrl}/cart`);
  const data = await res.json();

  const container = document.getElementById('cart-container');
  container.innerHTML = '';

  data.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Cantidad: ${item.quantity}</p>
      <p>Subtotal: $${item.subtotal.toLocaleString()}</p>
      <button onclick="removeFromCart(${item.id})">Eliminar</button>
    `;
    container.appendChild(div);
  });

  document.getElementById('cart-total').textContent = data.total.toLocaleString();
}

// Eliminar del carrito
async function removeFromCart(cartItemId) {
  await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
    method: 'DELETE'
  });
  loadCart();
}

// Inicialización
loadProducts();
loadCart();