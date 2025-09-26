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
    // Busca el span que está dentro del botón
    let span = element.querySelector("span");
    let likes = parseInt(span.innerText); // número actual
    likes++; // incrementa
    span.innerText = likes; // actualiza

    // Alerta cada vez que se hace click
    alert("Ninja was liked");
}