
function ejecutarConteo(limite) {
    let cantidad = 0;
    
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
        cantidad++;
        }
    }
    return cantidad;
}

function contarPares() {
    let inputElemento = document.getElementById("input1");
    let numeroIngresado = parseInt(inputElemento.value);

    let resultado = ejecutarConteo(numeroIngresado);
    let mensaje = `Hay ${resultado} números pares entre 1 y ${numeroIngresado}.`;
    document.getElementById("resultado1").textContent = mensaje;

    alert(mensaje);
    console.log(mensaje);


    inputElemento.value = "";
}
