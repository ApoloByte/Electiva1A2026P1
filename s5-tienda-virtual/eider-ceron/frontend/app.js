const apiBaseUrl = "http://localhost:3000";

// ─── Utilidades ──────────────────────────────────────────────────────────────

/**
 * Formatea un número como moneda colombiana (COP).
 * @param {number} value
 * @returns {string}
 */
const formatCurrency = (value) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);

// ─── Productos ────────────────────────────────────────────────────────────────

/**
 * Carga todos los productos desde el API y los renderiza en el contenedor.
 */
async function loadProducts() {
  const container = document.getElementById('products-container');

  try {
    const response = await fetch(`${apiBaseUrl}/products`);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    const products = await response.json();

    if (products.length === 0) {
      container.innerHTML = '<p class="msg-empty">No hay productos disponibles.</p>';
      return;
    }

    container.innerHTML = '';

    products.forEach((product) => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const imageHtml = product.image_url
        ? `<img src="${product.image_url}" alt="${product.name}" loading="lazy" />`
        : `<div style="height:140px;background:#eee;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#aaa;">Sin imagen</div>`;

      card.innerHTML = `
        ${imageHtml}
        <span class="product-name">${product.name}</span>
        <span class="product-price">${formatCurrency(product.price)}</span>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    container.innerHTML = `<p class="msg-error">No se pudieron cargar los productos. Verifica que el servidor esté activo.<br><small>${err.message}</small></p>`;
  }
}

// ─── Carrito ─────────────────────────────────────────────────────────────────

/**
 * Agrega un producto al carrito enviando productId y quantity=1.
 * @param {number} productId
 */
async function addToCart(productId) {
  try {
    const response = await fetch(`${apiBaseUrl}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: 1 }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || `Error HTTP ${response.status}`);
    }

    await loadCart();

  } catch (err) {
    alert(`Error al agregar al carrito: ${err.message}`);
  }
}

/**
 * Carga el carrito desde el API y lo renderiza con subtotales y total.
 */
async function loadCart() {
  const container = document.getElementById('cart-container');
  const totalEl = document.getElementById('cart-total');
  const btnClear = document.getElementById('btn-clear-cart');
  const btnCheckout = document.getElementById('btn-checkout');

  try {
    const response = await fetch(`${apiBaseUrl}/cart`);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    const { items, total } = await response.json();

    if (items.length === 0) {
      container.innerHTML = '<p class="msg-empty">El carrito está vacío.</p>';
      totalEl.textContent = '';
      btnClear.style.display = 'none';
      btnCheckout.style.display = 'none';
      return;
    }

    container.innerHTML = '';

    items.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('cart-item');

      div.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-detail">
            ${item.quantity} × ${formatCurrency(item.price)} = ${formatCurrency(item.subtotal)}
          </div>
        </div>
        <button onclick="removeFromCart(${item.id})">Eliminar</button>
      `;

      container.appendChild(div);
    });

    totalEl.textContent = `Total: ${formatCurrency(total)}`;
    btnClear.style.display = 'block';
    btnCheckout.style.display = 'block';

  } catch (err) {
    container.innerHTML = `<p class="msg-error">No se pudo cargar el carrito.<br><small>${err.message}</small></p>`;
  }
}

/**
 * Elimina un ítem del carrito por su id.
 * @param {number} cartItemId
 */
async function removeFromCart(cartItemId) {
  try {
    const response = await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || `Error HTTP ${response.status}`);
    }

    await loadCart();

  } catch (err) {
    alert(`Error al eliminar el ítem: ${err.message}`);
  }
}

/**
 * Vacía todo el carrito.
 */
async function clearCart() {
  if (!confirm('¿Deseas vaciar todo el carrito?')) return;

  try {
    const response = await fetch(`${apiBaseUrl}/cart`, { method: 'DELETE' });

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    await loadCart();

  } catch (err) {
    alert(`Error al vaciar el carrito: ${err.message}`);
  }
}

/**
 * Simula el proceso de compra vaciando el carrito y mostrando un mensaje.
 */
async function checkout() {
  const total = document.getElementById('cart-total').textContent;
  const confirmed = confirm(`${total}\n\n¿Confirmar la compra?`);

  if (!confirmed) return;

  try {
    await fetch(`${apiBaseUrl}/cart`, { method: 'DELETE' });
    await loadCart();
    alert('✅ ¡Compra realizada con éxito! Gracias por tu pedido.');
  } catch (err) {
    alert(`Error al procesar la compra: ${err.message}`);
  }
}

// ─── Inicialización ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Cargar productos y carrito al iniciar
  loadProducts();
  loadCart();

  // Eventos de botones del carrito
  document.getElementById('btn-clear-cart').addEventListener('click', clearCart);
  document.getElementById('btn-checkout').addEventListener('click', checkout);
});
