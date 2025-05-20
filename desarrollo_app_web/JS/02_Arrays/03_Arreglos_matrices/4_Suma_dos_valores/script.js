console.log("Conexión Establecida correctamente con js!");


function SumaMatrizes() {
let datos = [
    [1, 2, 3, 4],
    [5, 6, [7, 8, [9, 10]]]
];


let primerValor = datos[0][2]; // 3

let segundoValor = datos[1][2][2][1]; // 10


let suma = primerValor + segundoValor;


alert("El resultado de la suma entre los valores " + primerValor + 
    " y " + segundoValor + " es de: " + suma);
}