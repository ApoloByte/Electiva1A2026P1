async function fetchUser() {

    const response = await fetch("http://localhost:3000/user");

    const data = await response.json();

    setDataUserElement(data);

}

function setDataUserElement(user){

    const element = document.getElementById("data-user");

    element.textContent = JSON.stringify(user, null, 2);

}