console.log("Conectado correctamente con js");


// 🟦 Ejercicio 1: Repetir una palabra N veces
// 📌 Solicita al usuario una palabra y un número usando prompt. Luego, crea una función que reciba ambos valores como parámetros, repita la 
// palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert.

function palabrasHastaN(palabra, veces){
    let resultado = "";
    for (let i = 0; i < veces; i++){
        resultado += `${palabra}, `
    }
    return resultado.trim();
}
function mostrarPalabras(){
    let input1 = document.getElementById("input1");
    let palabra = input1.value;
    let numero = parseInt(prompt("Ingrese cantidad a repartir:"));
    let resultadoFinal = palabrasHastaN(palabra, numero)
    if (isNaN(numero)){
        alert("Ingrese solo números enteros!!.")
    }
    document.getElementById("resultado").textContent = resultadoFinal;
}

// 🟦 Ejercicio 2: Comparar dos números
// 📌 Usa input para pedir dos números. Crea una función con dos parámetros que compare los valores y retorne un mensaje indicando cuál 
// número es mayor, menor o si son iguales. Muestra el mensaje en html.

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
    let input1 = document.getElementById("input2");
    let input2 = document.getElementById("input21");
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let resultado = compararNumeros(num1, num2);
    document.getElementById("resultado").textContent = resultado;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese solo números válidos.");
    }

    input1.value = "";
    input1.focus();
    input2.value = "";
}

// 🟦 Ejercicio 3: Verificar si un número es par o impar
// 📌 Solicita un número usando input. Diseña una función que reciba ese número como 
// parámetro, determine si es par o impar, y retorne un mensaje con el resultado. Muestra ese mensaje al usuario  en html.

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} es un número par.`;
    } else {
        return `${numero} es un número impar.`;
    }
}
function mostrarParImpar() {
    let input = document.getElementById("input3");
    let numero = parseFloat(input.value);
    let resultado = verificarParImpar(numero);
    document.getElementById("resultado").textContent = resultado;
    if (isNaN(numero)) {
        alert("Ingrese un número válido.");
    }
}

// 🟦 Ejercicio 4: Validar si un número es primo
// 📌 Captura un número usando input. Luego, crea una función que reciba ese número como parámetro y 
// retorne un mensaje indicando si el número es primo o no. Muestra el resultado con html  .
function esPrimo(numeroPrimo) {
    if (numeroPrimo <= 1){
        return `El numero ${numeroPrimo} no es primo`
    }
    for (let i = 2; i < numeroPrimo; i++){
        if (numeroPrimo % i === 0)
            return `El numero ${numeroPrimo} no es primo`
    }
    return `El número ${numeroPrimo} es primo`;
}
function verificarNumeroPrimo() {
    let inputPrimo = document.getElementById("numeroPrimo");
    let numeroPrimo = parseInt(inputPrimo.value);
    if(isNaN(numeroPrimo) || numeroPrimo <= 0){
        document.getElementById("resultado").innerText = "Entrada inválida. ingrese un numero o un número mayor a 0.";
        return;
    }
    resultado = esPrimo(numeroPrimo)
    document.getElementById("resultado").innerText = `${resultado}`;
    inputPrimo.value = ""
    inputPrimo.focus()
}


// 🟦 Ejercicio 5: Calcular potencia con bucle
// 📌 Pide al usuario una base y un exponente mediante input. Usa una función que reciba ambos valores como parámetros, 
// calcule la potencia utilizando un bucle, y retorne el resultado. Finalmente, muestra el valor calculado en html.

function CalcularPotencia(numeroBase, potencia){
    let i = 1
    let resultado = 1
    while(i <= potencia){
        resultado *= numeroBase
        i++
    }
    return resultado
}
function PontenciaConBucle(){
    let inputPotencia = document.getElementById("potencia");
    let inputNumero = document.getElementById("numeroBase");
    let potencia = parseInt(inputPotencia.value);
    let numeroBase = parseInt(inputNumero.value);
    if (isNaN(numeroBase) || isNaN(potencia)){
        document.getElementById("resultado").innerText = "Entrada inválida. Ingrese un número.";
        return;
    }
    resultado = CalcularPotencia(numeroBase, potencia);
    document.getElementById("resultado").innerText = `El resultado de la potencia es: ${numeroBase}^${potencia} = ${resultado}`;
    inputPotencia.value = ""
    inputPotencia.focus()
    inputNumero.value = ""
    inputNumero.focus()
}