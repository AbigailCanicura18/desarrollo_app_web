// Ejercicio 1
function contadorN() {
    let numero = parseInt(prompt("Ingrese un número:"));
    let resultado = "";
    for (let n = 1; n <= numero; n++) {
        alert("N = " + n);
        resultado += `<p>-->${n}<--</p>`;
    }
    document.getElementById("contadorN").innerHTML = resultado;
}
// Cambio: ahora se muestran todos los números juntos en el HTML, no solo el último.

// Ejercicio 2
function suma() {
    let n = 0;
    let total = 0;
    let listN = [];
    while (n < 5) {
        let numero = parseInt(prompt("Ingrese un número:"));
        if (isNaN(numero)) continue;
        listN.push(numero);
        total += numero;
        n++;
    }
    alert("Lista de números: " + listN.join(" - "));
    document.getElementById("suma").innerHTML =
        `<p>El total de la suma es: ${total}</p>`;
}
// Cambio: validación para evitar NaN si no ingresan número.

// Ejercicio 3
function mostrarPar() {
    let listPar = [];
    for (let n = 1; n <= 20; n++) {
        if (n % 2 === 0) {
            listPar.push(n);
            alert(n + " es par");
        }
    }
    document.getElementById("mostrarPar").innerHTML =
        `<p>Los números pares son: ${listPar.join(", ")}</p>`;
}
// Cambio: eliminé alert innecesario de "no es par" para no saturar al usuario.

// Ejercicio 4
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
// Cambio: guarda todos los pasos en el HTML, y corrige mensaje "número no válido".

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