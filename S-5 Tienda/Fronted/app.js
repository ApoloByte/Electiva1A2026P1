const apiBaseUrl = "http://localhost:3000";

async function loadProducts(){

const response = await fetch(`${apiBaseUrl}/products`);

const products = await response.json();

const container = document.getElementById("products-container");

container.innerHTML = "";

products.forEach(product=>{

const div = document.createElement("div");

div.className = "product";

div.innerHTML = `
<h3>${product.name}</h3>
<p>Precio: $${product.price}</p>
<button onclick="addToCart(${product.id})">
Agregar al carrito
</button>
`;

container.appendChild(div);

});

}

async function addToCart(productId){

await fetch(`${apiBaseUrl}/cart`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
productId:productId,
quantity:1
})

});

loadCart();

}

async function loadCart(){

const response = await fetch(`${apiBaseUrl}/cart`);

const data = await response.json();

const container = document.getElementById("cart-container");

const total = document.getElementById("cart-total");

container.innerHTML = "";

data.items.forEach(item=>{

const div = document.createElement("div");

div.innerHTML = `
${item.name} x ${item.quantity} = $${item.subtotal}
<button onclick="removeFromCart(${item.id})">
Eliminar
</button>
`;

container.appendChild(div);

});

total.textContent = "Total: $" + data.total;

}

async function removeFromCart(id){

await fetch(`${apiBaseUrl}/cart/${id}`,{
method:"DELETE"
});

loadCart();

}

loadProducts();
loadCart();