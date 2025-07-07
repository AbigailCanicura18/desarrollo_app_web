console.log("Conectado correctamente con js");


// ✅ Ejercicio 1: Contador del 1 al N
// Pide al usuario un número con prompt() y usa un for para mostrar los números del 1 hasta ese número.
function contarHastaN(){

    let n = parseInt(prompt("Ingresa la cantidad de veces que desear contar: "));

    let numeros = [];

    //bucle for

    for (let i = 1; i <= n; i++){
        numeros.push(i);
    }
    document.getElementById("resultado").innerHTML = `<div class = "resultado1"><p>El conteo realizado fue hasta el: ${n} </p><br><strong>${numeros.join(" - ")}</strong></div> `;
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
    document.getElementById("resultado").innerHTML = `<p>La suma de los numeros es :</p><br><strong>${suma}</strong> `;
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


// Ejercicio 5
function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese el número de la tabla:"));
    let resultado = "";
    for (let n = 1; n <= 10; n++) {
        let mult = numero * n;
        alert(`${numero} x ${n} = ${mult}`);
        resultado += `<p>${numero} x ${n} = ${mult}</p>`;
    }
    document.getElementById("tablaMultiplicar").innerHTML = resultado;
}
// Cambio: ahora también muestra la tabla en pantalla.

// Ejercicio 6
function sumarHasta() {
    let listNumeros = [];
    let total = 0;
    while (true) {
        let n = parseInt(prompt("Ingresa un número (0 para terminar):"));
        if (n === 0) break;
        if (isNaN(n)) continue;
        listNumeros.push(n);
        total += n;
    }
    document.getElementById("sumarHasta").innerHTML =
        `<p>El total de la suma es: ${total}</p>`;
}
// Cambio: validación de entrada numérica.

// Ejercicio 7
function mostrarLetras() {
    let palabra = prompt("Ingrese una palabra:");
    let resultado = "";
    if (palabra) {
        for (let i = 0; i < palabra.length; i++) {
            alert(`Letra ${i + 1}: ${palabra[i]}`);
            resultado += `<p>${palabra[i]}</p>`;
        }
    }
    document.getElementById("mostrarLetras").innerHTML = resultado;
}
// Cambio: ahora imprime letras en el HTML también y muestra letra y número.

//Ejercicio 8

function validarContrasena() {
    let contrasena = prompt("Ingrese la contraseña:");
    while (contrasena !== "admin123") {
        contrasena = prompt("Contraseña incorrecta. Intente nuevamente:");
    }
    alert("Acceso concedido");
    document.getElementById("ej8").innerHTML = "<p>Acceso concedido</p>";
}

// Ejercicio 9

function promedioNotas() {
    let cantidad = parseInt(prompt("¿Cuántas notas ingresará?"));
    let notas = [];
    let suma = 0;

    for (let i = 0; i < cantidad; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
        notas.push(nota);
        suma += nota;
    }

    let promedio = suma / cantidad;
    alert("El promedio es: " + promedio);
    document.getElementById("ej9").innerHTML =
        `<p>Notas: ${notas.join(" - ")}</p><p>Promedio: ${promedio}</p>`;
}



//Ejercicio 10

function contarMayoresEdad() {
    let cantidad = parseInt(prompt("¿Cuántas personas va a ingresar?"));
    let edades = [];
    let mayores = 0;

    for (let i = 0; i < cantidad; i++) {
        let edad = parseInt(prompt("Edad de la persona " + (i + 1) + ":"));
        edades.push(edad);
        if (edad >= 18) {
            mayores++;
        }
    }

    alert("Cantidad de mayores de edad: " + mayores);
    document.getElementById("ej10").innerHTML =
        `<p>Edades: ${edades.join(" - ")}</p><p>Mayores de edad: ${mayores}</p>`;
}
