console.log("Conexión Establecida correctamente con js!");
/* Crea un arreglo con los días de la semana. Luego, al hacer clic en el botón,
muestra con alert() el día martes usando su posición en el arreglo.*/

// Funcion para mostrar diferencias centro y extremos
function diferenciaCentroExtremos() {
    let numeros =  [20, 30, 40, 50, 60];
    let numCentral = numeros[Math.floor(numeros.length / 2)];
    let numExtremos = numeros[0] + numeros[numeros.length - 1]; 
    let diferencia = numCentral - numExtremos;
    alert("La diferencia entre el numero del centro y los de los extremos es de: " + diferencia);
}

