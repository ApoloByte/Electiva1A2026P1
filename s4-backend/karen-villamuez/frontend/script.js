function setDataUserElement(user) {
    let dataUser = document.getElementById("data-user");
    if (dataUser) {
        dataUser.textContent = JSON.stringify(user, null, 2);
    }
    let imagen = document.getElementById("ejemplo");
    if (imagen) {
        user.forEach(product => {
            imagen.innerHTML = imagen.innerHTML + `<img src='${product.image_url}'alt='Imagen del producto'>`;
            imagen.innerHTML = imagen.innerHTML + `<div>${product.name}</div>`;
        });
}
}




async function fetchUser() {
    try {
        const respuesta = await fetch("https://electiva5-api.apolobyte.top/products");
        const data = await respuesta.json();
        setDataUserElement(data);
        console.log("data", data);
    } catch (error) {
        console.error("Error al obtener data:", error);
    }
}
fetchUser();