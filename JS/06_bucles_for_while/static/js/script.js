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
    document.getElementById("resultado").innerHTML = `<p>El conteo realizado hasta ${n} fue el siguiente:</p><br><strong>${numeros.join(" - ")}</strong> `;
}


//  ✅ Ejercicio 2: Suma de 5 números
// Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla.
function suma5Numeros(){

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
function MostrarPares(){
 //ciclo for
    for (let i = 1; i <= n; i++){
            numeros.push(i);
        }
        document.getElementById("resultado").innerHTML = `<p>El conteo realizado hasta ${n} fue el siguiente:</p><br><strong>${numeros.join(" - ")}</strong> `;

}











