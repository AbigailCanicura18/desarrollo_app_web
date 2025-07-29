// function calcular() {
//     let numero = parseInt(prompt("Ingresa un numero"));
//     let suma = 0;
//     for (let i = 1; i <= numero; i++) {
//         let multiplo = i * 3;
//         if (multiplo % 2 === 0){
//             suma += multiplo;
//         } else {
//             suma -= i;
//         };
//         console.log("i:",i,"multiplo:",multiplo,"suma:",suma);
//     };
//     alert("el resultaddo es: "+suma);
//     return suma;
// };

// let resultado = calcular();
// console.log("Valor de retorno:",resultado);




// function mostrarSecuencia(numeroLimite){
//     let resultado = []
//     for(let i = 1; i <= numeroLimite ; i++)
//     {
//         if (i % 4 === 0)
//         {
//             resultado.push(`${i}*`);
//         } else{
//             resultado.push(i)
//         }   
        
//     }
//     console.log(resultado)
//     return resultado
// }

// function multiplos(){
//     inputLimite = document.getElementById("input2")
//     limite = parseInt(inputLimite.value)

//     let numeros = mostrarSecuencia(limite);

//     if (numeros.length === 0) {
//         document.getElementById("resultado2").innerText = "No se encontraron múltiplos.";
//     } else {
//         document.getElementById("resultado2").innerText = "Números encontrados: " + numeros.join(", ");
//     }

//     inputLimite.value = "";
//     inputLimite.focus();
// }



// function calcularPromedio(){
//     let numero = parseInt(prompt("Ingresa un numero: "));
//     let resultado = 1;
//     for (let i = 1; i<= numero; i++){
//         let multiplicador = i * 2;
//         resultado *= multiplicador
//         console.log("i:", i, "multiplicador:", multiplicador, "resultado:", resultado);
//     }
//     alert("El producto es: " + resultado);
//     return resultado;
// }

// console.log(resultado)
// let valorFinal = calcularPromedio();
// console.log("Valor final:", valorFinal)



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
