// creacion de arreglos

let array = ["Xbox", "Nintendo"];


//Creacion de funciones
function usarPush(){ 
// agregar al final   
    let entrada = prompt("Agregar una consola: ") 
    array.push(entrada);
    alert("El nuevo arreglo es: " + array.join(" - "))
}
function usarPop(){
//elimina el ultimo elemento
    let basurero = array.pop();

    alert(`Elemento eliminado: ${basurero}`);

}

function usarUnshift(){

//agrega al inicio
    let entrada = prompt("Agregar una consola: ") 
    array.unshift(entrada);
    alert("El nuevo arreglo es: " + array.join(" - "))

}

function usarShift(){

//elimina el primer elemento
    let entrada = prompt("Agregar una consola: ") 
    array.shift(entrada);
    alert("El nuevo arreglo es: " + array.join(" - "))

}

