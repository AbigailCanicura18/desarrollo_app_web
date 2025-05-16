console.log("Conexión Establecida correctamente con js!");
/* Crea una función que sume el segundo y cuarto elemento de un arreglo,
y concatene el resultado con una frase personalizada.
Muestra el mensaje con alert.*/


function mensajeConcatenado() {
    let numeros = [1, 2, 3, 4, 5];
    let suma = numeros[2] + numeros[4];
    let palabras = ["como", "adios", "hola", "estás", "mundo"];    
    let mensaje = (palabras[2] + " " + palabras[4]);
    alert("El mensaje es: "  + mensaje + " y el resultado de la suma de valores de la segunda y cuarta posicion es de: " + suma);
}