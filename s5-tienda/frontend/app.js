const apiBaseUrl = "http://localhost:3000";

async function loadProducts() {
    try {
        const res = await fetch(`${apiBaseUrl}/products`);
        const products = await res.json();

        const container = document.getElementById('products-container');
        if (!container) return;
        container.innerHTML = '';
        const controls = document.createElement('div');
        controls.className = 'cart-controls';

        const emptyBtn = document.createElement('button');
        emptyBtn.textContent = 'Vaciar carrito';
        emptyBtn.addEventListener('click', emptyCart);

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Comprar';
        buyBtn.addEventListener('click', checkout);

        controls.appendChild(emptyBtn);
        controls.appendChild(buyBtn);
        container.appendChild(controls);

        products.forEach((p) => {
            const id = p.id;
            const name = p.nombre ?? p.name ?? 'Sin nombre';
            const price = Number(p.precio ?? p.price ?? 0).toFixed(2);

            const card = document.createElement('div');
            card.className = 'product-card';

            const title = document.createElement('h3');
            title.textContent = name;

            const priceEl = document.createElement('p');
            priceEl.textContent = `Precio: $${price}`;

            const btn = document.createElement('button');
            btn.textContent = 'Agregar al carrito';
            btn.addEventListener('click', () => addToCart(id));

            card.appendChild(title);
            card.appendChild(priceEl);
            card.appendChild(btn);

            container.appendChild(card);
        });
    } catch (err) {
        console.error('Error cargando productos:', err);
    }
}

async function addToCart(productId) {
    try {
        await fetch(`${apiBaseUrl}/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity: 1 }),
        });
        await loadCart();
    } catch (err) {
        console.error('Error agregando al carrito:', err);
    }
}

async function loadCart() {
    try {
        const res = await fetch(`${apiBaseUrl}/cart`);
        const data = await res.json();

        const container = document.getElementById('cart-container');
        const totalEl = document.getElementById('cart-total');
        if (!container || !totalEl) return;

        container.innerHTML = '';

        const items = data.items ?? [];
        items.forEach((it) => {
            const id = it.id;
            const name = it.nombre ?? it.name ?? '';
            const qty = it.quantity ?? it.cantidad ?? 0;
            const subtotal = Number(it.subtotal ?? (it.precio ?? it.price) * qty ?? 0).toFixed(2);

            const row = document.createElement('div');
            row.className = 'cart-item';

            const info = document.createElement('span');
            info.textContent = `${name} — Cantidad: ${qty} — Subtotal: $${subtotal}`;

            const del = document.createElement('button');
            del.textContent = 'Eliminar';
            del.addEventListener('click', () => removeFromCart(id));

            row.appendChild(info);
            row.appendChild(del);
            container.appendChild(row);
        });

        totalEl.textContent = `Total: $${Number(data.total ?? 0).toFixed(2)}`;
    } catch (err) {
        console.error('Error cargando carrito:', err);
    }
}

async function removeFromCart(cartItemId) {
    try {
        await fetch(`${apiBaseUrl}/cart/${cartItemId}`, { method: 'DELETE' });
        await loadCart();
    } catch (err) {
        console.error('Error eliminando item del carrito:', err);
    }
}

async function emptyCart() {
    try {
        await fetch(`${apiBaseUrl}/cart`, { method: 'DELETE' });
        await loadCart();
    } catch (err) {
        console.error('Error vaciando carrito:', err);
    }
}

async function checkout() {
    try {
        const res = await fetch(`${apiBaseUrl}/cart`);
        const data = await res.json();
        const total = Number(data.total ?? 0).toFixed(2);
        if (Number(total) <= 0) {
            alert('El carrito está vacío.');
            return;
        }

        const confirmed = confirm(`Confirmar compra por $${total}?`);
        if (!confirmed) return;
        // Pago: vaciar carrito y mostrar confirmación
        await fetch(`${apiBaseUrl}/cart`, { method: 'DELETE' });
        await loadCart();
        alert(`Compra realizada. Total pagado: $${total}`);
    } catch (err) {
        console.error('Error en la compra:', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
});
