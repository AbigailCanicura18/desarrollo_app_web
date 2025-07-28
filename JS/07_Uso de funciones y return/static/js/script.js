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


// 🟦 Ejercicio 2: Comparar dos números
// 📌 Usa input para pedir dos números. 
// Crea una función con dos parámetros que compare los valores y retorne un mensaje indicando cuál número es mayor, menor o si son iguales. Muestra el mensaje en html.
function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        return `${num1} es menor que ${num2}`;
    } else {
        return `${num1} es igual a ${num2}`;
    }
}
function mostrarComparacion() {
    let input1 = document.getElementById("numComp1");
    let input2 = document.getElementById("numComp2");
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let resultado = compararNumeros(num1, num2);
    document.getElementById("resultado2").textContent = resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese solo números.");
    }
    input1.value = "";
    input1.focus();
    input2.value = "";
}



// 🟦 Ejercicio 3: Verificar si un número es par o impar
// 📌 Solicita un número usando input.
//  Diseña una función que reciba ese número como parámetro, determine si es par o impar, y retorne un mensaje con el resultado. Muestra ese mensaje al usuario  en html.
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



let resultado = contarVocales("javascript");
alert(resultado);

console.log(resultado)






// 🟦 Ejercicio 4: Validar si un número es primo
// 📌 Captura un número usando input. 
// Luego, crea una función que reciba ese número como parámetro y retorne un mensaje indicando si el número es primo o no. Muestra el resultado con 
// html  .

// 🟦 Ejercicio 5: Calcular potencia con bucle
// 📌 Pide al usuario una base y un exponente mediante input. 
// Usa una función que reciba ambos valores como parámetros, calcule la potencia utilizando un bucle, y retorne el resultado. Finalmente, muestra el valor calculado en html.