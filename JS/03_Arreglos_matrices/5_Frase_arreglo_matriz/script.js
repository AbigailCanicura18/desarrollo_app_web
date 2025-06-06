console.log("Conexión Establecida correctamente con js!");


function fraseArregloMatriz() {
let animal = ["El perro", "El gato"];

let acciones = [
    ["ladra", "corre"],
    ["duerme", "salta"]
];


let animalSeleccionado = animal[0];       // "El perro"
let accionCorrespondiente = acciones[0][0]; // "ladra"


let frase = animalSeleccionado + " " + accionCorrespondiente;


alert(frase);
    
}