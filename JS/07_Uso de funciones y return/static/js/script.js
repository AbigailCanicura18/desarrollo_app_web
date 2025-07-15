console.log("Conectado correctamente con js");


// 🟦 Ejercicio 1: Repetir una palabra N veces
// 📌 Solicita al usuario una palabra y un número usando prompt. Luego, crea una función que reciba ambos valores como parámetros,
//  repita la palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert.

function repitePalabra(palabra, numeroVeces){

    let resultado = "";
    //bucle for
    for (let i = 0; i < numeroVeces; i++){
        resultado += `${palabra} - `
    }
    return resultado.trim(); //trim elimina espacios en los extremos
}
function mostrarPalabra(){
    let input01 =  document.getElementById("input1");
    let palabra = input01.value;
    let numero  = parseInt(prompt("Ingrese cuantas veces se repetira su palabra"));


    let resultadoFinal = repitePalabra(palabra, numero)
    document.getElementById("resultado1").textContent = resultadoFinal;
}


//  ✅ Ejercicio 2: Suma de 5 números
// Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla.
function suma(){

    //bucle while
    let i = 0;
    let suma = 0
    let num = [];
    let n = 0;
    while (i <= 4) {
        let n = parseInt(prompt("Ingrese numeros para la suma porfavor: "));
        num.push(n);
        suma += n;
    i++;
    }   
    document.getElementById("suma").innerHTML = `<p>La suma de los numeros es :</p><br><strong>${suma}</strong> `;


}



// ✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
// Usa un for para mostrar en pantalla solo los números pares del 1 al 20.
function mostrarPar() {
    let listPar = [];
    for (let n = 1; n <= 20; n++) {
        if (n % 2 === 0) {
            listPar.push(n);

        }
    }
    document.getElementById("mostrarPar").innerHTML =
        `<p>Los números pares son: ${listPar.join(", ")}</p>`;
}

// ✅ Ejercicio 4: Contador regresivo con condición
// Pide un número al usuario y, usando un while, cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".
function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese número para la cuenta regresiva:"));
    let resultado = "";
    while (numero >= 0) {
        alert(numero);
        resultado += `<p>${numero}</p>`;
        if (numero === 0) {
            alert("Fin de la cuenta regresiva");
        }
        numero--;
    }
    document.getElementById("contadorRegresivo").innerHTML = resultado;
}


//✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
//Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.

function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese que tabla desea conocer:"));
    let resultado = "";
    for (let n = 1; n <= 10; n++) {
        let mult = numero * n;
        resultado += `<p>${numero} x ${n} = ${mult}</p>`;
        console.log(resultado);
    }
    document.getElementById("tablaMultiplicar").innerHTML = resultado;
}

