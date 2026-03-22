const apiBaseUrl = 'http://localhost:3000';

// ──────────────────────────────────────────────────
// PRODUCTOS
// ──────────────────────────────────────────────────

/**
 * Carga todos los productos desde el backend y los renderiza
 * como tarjetas en el contenedor #products-container.
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
      container.innerHTML = '<p class="empty-msg">No hay productos disponibles.</p>';
      return;
    }

    container.innerHTML = products.map((product) => `
      <article class="product-card">
        <img
          src="${product.image_url || 'https://placehold.co/200x150?text=Sin+imagen'}"
          alt="${product.name}"
          loading="lazy"
        />
        <div class="product-info">
          <span class="product-name">${product.name}</span>
          <span class="product-price">$${Number(product.price).toFixed(2)}</span>
          <button
            class="btn-primary"
            onclick="addToCart(${product.id})"
          >
            + Agregar al carrito
          </button>
        </div>
      </article>
    `).join('');

  } catch (error) {
    console.error('Error al cargar productos:', error);
    container.innerHTML = '<p class="empty-msg">No se pudieron cargar los productos.</p>';
  }
}

// ──────────────────────────────────────────────────
// AGREGAR AL CARRITO
// ──────────────────────────────────────────────────

/**
 * Envía una petición POST al backend para agregar (o actualizar)
 * un producto en el carrito y luego recarga la vista del carrito.
 *
 * @param {number} productId - ID del producto a agregar.
 */
async function addToCart(productId) {
  try {
    const response = await fetch(`${apiBaseUrl}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: 1 }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error HTTP ${response.status}`);
    }

    await loadCart();

  } catch (error) {
    console.error('Error al agregar al carrito:', error);
  }
}

// ──────────────────────────────────────────────────
// CARRITO
// ──────────────────────────────────────────────────

/**
 * Carga el carrito desde el backend y lo renderiza en
 * #cart-container. También muestra el total en #cart-total.
 */
async function loadCart() {
  const container = document.getElementById('cart-container');
  const totalEl = document.getElementById('cart-total');
  const clearBtn = document.getElementById('btn-clear-cart');

  try {
    const response = await fetch(`${apiBaseUrl}/cart`);

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    const { items, total } = await response.json();

    if (items.length === 0) {
      container.innerHTML = '<p class="empty-msg">El carrito está vacío.</p>';
      totalEl.textContent = '';
      clearBtn.style.display = 'none';
      return;
    }

    container.innerHTML = items.map((item) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-sub">
            ${item.quantity} × $${Number(item.price).toFixed(2)}
            = <strong>$${Number(item.subtotal).toFixed(2)}</strong>
          </div>
        </div>
        <button
          class="btn-danger"
          onclick="removeFromCart(${item.id})"
          title="Eliminar del carrito"
        >
          ✕
        </button>
      </div>
    `).join('');

    totalEl.textContent = `Total: $${Number(total).toFixed(2)}`;
    clearBtn.style.display = 'block';

  } catch (error) {
    console.error('Error al cargar el carrito:', error);
    container.innerHTML = '<p class="empty-msg">No se pudo cargar el carrito.</p>';
  }
}

// ──────────────────────────────────────────────────
// ELIMINAR ÍTEM DEL CARRITO
// ──────────────────────────────────────────────────

/**
 * Elimina un ítem del carrito por su ID y recarga la vista.
 *
 * @param {number} cartItemId - ID del ítem en cart_items.
 */
async function removeFromCart(cartItemId) {
  try {
    const response = await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error HTTP ${response.status}`);
    }

    await loadCart();

  } catch (error) {
    console.error('Error al eliminar ítem del carrito:', error);
  }
}

// ──────────────────────────────────────────────────
// VACIAR CARRITO
// ──────────────────────────────────────────────────

/**
 * Vacía por completo el carrito enviando DELETE /cart.
 */
async function clearCart() {
  try {
    const response = await fetch(`${apiBaseUrl}/cart`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}`);
    }

    await loadCart();

  } catch (error) {
    console.error('Error al vaciar el carrito:', error);
  }
}

// ──────────────────────────────────────────────────
// INICIALIZACIÓN
// ──────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Cargar datos iniciales
  loadProducts();
  loadCart();

  // Botón "Vaciar carrito"
  const clearBtn = document.getElementById('btn-clear-cart');
  clearBtn.addEventListener('click', clearCart);
});
