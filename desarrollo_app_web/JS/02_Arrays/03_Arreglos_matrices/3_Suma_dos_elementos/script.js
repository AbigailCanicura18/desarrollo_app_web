console.log("Conexión Establecida correctamente con js!");


function sumaElementos() {
    let matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];


let primerValor = matriz[0][1]; // 20 (fila 0, columna 1)
let segundoValor = matriz[2][2]; // 90 (fila 2, columna 2)


let suma = primerValor + segundoValor;


alert("El resultado de la suma entre los valores " + primerValor + " y " 
    + segundoValor + " es de: " + suma);
}