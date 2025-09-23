// se crea una funcion que iterara un ciclo para buscar los numeros pares
function ejecutarConteo(limite) {  // recibe el parametro limite de otra funcion
    let cantidad = 0;
    
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
        cantidad++;
        }
    }
    return cantidad;  // retorna la variable que almacena la cantidad de pares encontrados
}

function contarPares() {
    let inputElemento = document.getElementById("input1"); // busca en el html, la etiqueta que tenga el id input1
    let numeroIngresado = parseInt(inputElemento.value); // convierte el valor del inputElemento en un entero

    let resultado = ejecutarConteo(numeroIngresado);
    let mensaje = `Hay ${resultado} números pares entre 1 y ${numeroIngresado}.`;
    document.getElementById("resultado1").textContent = mensaje;  // muestra un mensaje para el usuario indicando la cantidad de pares

    alert(mensaje);
    console.log(mensaje);


    inputElemento.value = ""; // limpia el input para que ingrese algo nuevo la cantidad de veces que le usuario desee
}
