async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        document.getElementById("data-user").textContent = JSON.stringify(data, null, 2);
    } catch(error) {
        console.error("Error:", error);
    }
}

fetchProducts();