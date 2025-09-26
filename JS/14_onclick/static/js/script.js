function login(element) {
    // Cambia entre Login y Logout
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    // Elimina el botón de "Add Definition"
    element.remove();
}

function liked(element) {
    // Obtiene el span dentro del botón
    let span = element.querySelector("span");
    let likes = parseInt(span.innerText);
    likes++;
    span.innerText = likes;

    // Alerta
    alert("Ninja was liked");
}