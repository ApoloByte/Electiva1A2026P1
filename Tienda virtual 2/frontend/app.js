const apiBaseUrl = 'http://localhost:3000';

//  Referencias al DOM 
const productsContainer = document.getElementById('products-container');
const cartContainer     = document.getElementById('cart-container');
const cartTotal         = document.getElementById('cart-total');
const cartCount         = document.getElementById('cart-count');
const cartSection       = document.getElementById('cart-section');
const productsSection   = document.getElementById('products-section');
const toggleCartBtn     = document.getElementById('toggle-cart-btn');
const clearCartBtn      = document.getElementById('clear-cart-btn');
const checkoutBtn       = document.getElementById('checkout-btn');
const checkoutModal     = document.getElementById('checkout-modal');
const closeModalBtn     = document.getElementById('close-modal-btn');

//  Estado de la vista 
let showingCart = false;

//  loadProducts 
async function loadProducts() {
  try {
    const response = await fetch(`${apiBaseUrl}/products`);
    if (!response.ok) throw new Error('No se pudo obtener los productos');

    const products = await response.json();

    productsContainer.innerHTML = '';

    if (products.length === 0) {
      productsContainer.innerHTML = '<p class="empty-msg">No hay productos disponibles.</p>';
      return;
    }

    for (const product of products) {
      const card = createProductCard(product);
      productsContainer.appendChild(card);
    }
  } catch (err) {
    productsContainer.innerHTML = `<p class="empty-msg">Error al cargar productos: ${err.message}</p>`;
  }
}

//  createProductCard 
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const imgSrc = product.image_url || 'https://via.placeholder.com/400x160?text=Sin+imagen';

  card.innerHTML = `
    <img src="${imgSrc}" alt="${product.name}" loading="lazy" />
    <div class="product-info">
      <p class="product-name">${product.name}</p>
      <p class="product-price">$${product.price.toFixed(2)}</p>
      <button class="btn-add" data-id="${product.id}">+ Agregar al carrito</button>
    </div>
  `;

  card.querySelector('.btn-add').addEventListener('click', () => {
    addToCart(product.id);
  });

  return card;
}

//  addToCart 
async function addToCart(productId) {
  try {
    const response = await fetch(`${apiBaseUrl}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: 1 }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Error al agregar al carrito');
    }

    await loadCart();

    // Si no se estaba viendo el carrito, feedback visual en el botón del header
    flashCartButton();
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
}

//  loadCart 
async function loadCart() {
  try {
    const response = await fetch(`${apiBaseUrl}/cart`);
    if (!response.ok) throw new Error('No se pudo obtener el carrito');

    const { items, total } = await response.json();

    // Actualizar contador del header
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Renderizar ítems
    cartContainer.innerHTML = '';

    if (items.length === 0) {
      cartContainer.innerHTML = '<p class="empty-msg" style="padding:1.2rem">El carrito está vacío.</p>';
      cartTotal.textContent = '';
      return;
    }

    for (const item of items) {
      const row = createCartItem(item);
      cartContainer.appendChild(row);
    }

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  } catch (err) {
    cartContainer.innerHTML = `<p class="empty-msg">Error al cargar el carrito: ${err.message}</p>`;
  }
}

//  createCartItem 
function createCartItem(item) {
  const row = document.createElement('div');
  row.className = 'cart-item';

  const imgSrc = item.image_url || 'https://via.placeholder.com/60?text=?';

  row.innerHTML = `
    <img src="${imgSrc}" alt="${item.name}" loading="lazy" />
    <div class="cart-item-info">
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-qty">Cantidad: ${item.quantity} × $${item.price.toFixed(2)}</span>
    </div>
    <span class="cart-item-subtotal">$${item.subtotal.toFixed(2)}</span>
    <button class="btn-remove" data-cart-id="${item.id}">Eliminar</button>
  `;

  row.querySelector('.btn-remove').addEventListener('click', () => {
    removeFromCart(item.id);
  });

  return row;
}

//  removeFromCart 
async function removeFromCart(cartItemId) {
  try {
    const response = await fetch(`${apiBaseUrl}/cart/${cartItemId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Error al eliminar del carrito');
    }

    await loadCart();
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
}

//  clearCart 
async function clearCart() {
  try {
    const response = await fetch(`${apiBaseUrl}/cart`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Error al vaciar el carrito');
    await loadCart();
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
}

//  Feedback visual del botón de carrito 
function flashCartButton() {
  toggleCartBtn.style.background = '#16a34a';
  setTimeout(() => {
    toggleCartBtn.style.background = '';
  }, 600);
}

//  Toggle vista carrito / productos 
toggleCartBtn.addEventListener('click', () => {
  showingCart = !showingCart;

  if (showingCart) {
    cartSection.classList.remove('hidden');
    productsSection.classList.add('hidden');
    toggleCartBtn.textContent = `Ver productos`;
    loadCart();
  } else {
    cartSection.classList.add('hidden');
    productsSection.classList.remove('hidden');
    toggleCartBtn.innerHTML = `Ver carrito (<span id="cart-count">${cartCount.textContent}</span>)`;
    // Re-asignar referencia al span del contador
    const newSpan = toggleCartBtn.querySelector('#cart-count');
    if (newSpan) newSpan.textContent = cartCount.textContent;
  }
});

//  Vaciar carrito 
clearCartBtn.addEventListener('click', () => {
  if (confirm('¿Seguro que deseas vaciar todo el carrito?')) {
    clearCart();
  }
});

//  Simular compra 
checkoutBtn.addEventListener('click', async () => {
  // Verificar que el carrito no esté vacío
  const response = await fetch(`${apiBaseUrl}/cart`);
  const { items } = await response.json();

  if (items.length === 0) {
    alert('Tu carrito está vacío. Agrega productos antes de comprar.');
    return;
  }

  // Vaciar carrito y mostrar modal
  await clearCart();
  checkoutModal.classList.remove('hidden');
});

//  Cerrar modal 
closeModalBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  // Volver a productos
  showingCart = false;
  cartSection.classList.add('hidden');
  productsSection.classList.remove('hidden');
  toggleCartBtn.innerHTML = `Ver carrito (<span id="cart-count">0</span>)`;
});

//  Inicialización 
(async () => {
  await loadProducts();
  await loadCart(); // Para inicializar el contador del header
})();
