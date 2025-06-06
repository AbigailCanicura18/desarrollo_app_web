// Ejercicio 1
let compras=[];  // arreglo vacio

function ListasCompras(){
    compras = [];
    compras.push(" Pan "," Leche "," Huevos");
    alert(`Lista de Compras: ${compras.join("-")}`)
}

// Ejercicio 2: Quitar el último

function ListasComprasEliminarULtimo(){
    //Elimina el último elemento
    let basurero = compras.pop();
    alert(`Elemento eliminado: ${basurero}`);
}


// Ejercicio 3: Agregar al inicio
array = [" Rojo", "Azul"];

function agregaColor(){
    let input = prompt("Agrega un color a la consola: ");
    array.unshift(input);
    alert("Los colores actualizados son: " + " " + array.join(" - "));
}


// Ejercicio 4: Quitar el primero
function quitarColor(){
        //Elimina el primer elemento
        let basura = array.shift();
        alert(`Elemento eliminado: ${basura}`);
}


// Ejercicio 5: Combinación de métodos
let numeros = [10, 20, 30];
function agregarNumeroFinal() {
    let entrada = prompt("Agrega el numero 40 a la consola: ");
    numeros.push(entrada);
    alert(`Los numeros actualizados son: ${numeros.join(" - ")}`)
}


function eliminarPrimero() {
    let basurero = numeros.shift();
    alert(`Elemento eliminado: ${basurero}`);
    alert(`Los numeros actualizados son: ${numeros.join(" - ")}`)
}

function agregarAlInicio() {
    let entrada = prompt("Agrega el numero 5: ");
    numeros.unshift(entrada);
    alert("Los numeros actualizados son: " + numeros.join(" "));
}


function eliminarUltimo() {
    let basurero = numeros.pop();
    alert(`Elemento eliminado: ${basurero}`);
    alert(`Los numeros actualizados son: ${numeros.join(" - ")}`)
}

// Ejercicio 6: Agregar elementos en orden inverso
function ordenNumeros() {
    let orden = [];
    orden.push(1); // [1]
    orden.push(2); // [1, 2]
    orden.push(3); // [1, 2, 3]
    alert("El orden es: " + orden);
    
    // Ahora cambiamos el orden usando unshift si se quiere invertir
    let ordenInvertido = [];
    orden.forEach(num => ordenInvertido.unshift(num)); // invierte [3, 2, 1]
    
    alert("Orden inverso: " + ordenInvertido);
}


// Ejercicio 7: Historial de mensajes
function mensajeBorrado() {
    let historial = [];
    historial.push("Hola");
    historial.push("Mundo");
    historial.push("tuki");
    let mensajeEliminado = historial.pop();
    alert("Mensaje eliminado: " + mensajeEliminado);
    alert("Mensaje final: " + historial.join(" "));
}



// Ejercicio 8: Cola de atención
function filaClientes() {
    let cola = [" Cliente1 ", " Cliente2 ", " Cliente3 "];

    let colaInicial = cola.slice();

    cola.shift();               
    cola.push(" Cliente4 ");     

    alert("La fila esta asi: " + colaInicial.join(", "));
    alert("Fila actualizada: " + cola.join(", "));
}


// Ejercicio 9: Reordenar nombres
function ordenNombres() {
    let nombres = [" Pedro ", " Juan ", " Luis "];

    let nombresOriginales = nombres.slice(); 

    nombres.pop();              
    nombres.unshift(" Mateo "); 
    nombres.push(" Ana ");   

    alert("Nombres originales: " + nombresOriginales.join(", "));
    alert("Nombres actualizados: " + nombres.join(", "));
}

// Ejercicio 10: Pilas y colas
function manejarEstructuras() {
    let pila = [];
    pila.push(" 1 ");
    pila.push(" 2 ");
    pila.push(" 3 ");

    let elementoPila1 = pila.pop();
    let elementoPila2 = pila.pop();
    alert("Hemos quitados de la pila a los elementos: " + elementoPila1 + "y" + elementoPila2);


    let colaNueva = [];
    colaNueva.push(" A ");
    colaNueva.push(" B ");
    colaNueva.push(" C ");

    let atendido1 = colaNueva.shift();
    let atendido2 = colaNueva.shift();
    alert("Estamos atendiendo a los elementos: " + atendido1 + "y" + atendido2);
}


// Ejercicio 11: Completar la semana laboral
function semanaLaboral() {
    let dias = [" lunes ", " miércoles ", " jueves "];
    
    alert("Días laborales incompletos: " + dias); 

    dias.splice(1, 0, " martes " ); 
    dias.push(" viernes ");        

    alert("Días laborales completos: " + dias);

}   


// Ejercicio 12: Registro de personas en una sala
function registroPersonas() {
    let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];

    let eliminados = [];
    eliminados.push(personas.shift());
    eliminados.push(personas.pop());   
    eliminados.push(personas.pop());  
    alert("Las personas eliminadas son: " + eliminados.join(", "));


    personas.unshift("Pedro");  
    personas.push("Camila");    
    alert("Las personas agregadas son: Pedro, Camila");

    alert("La lista de personas quedó así: " + personas.join(", "));
}


// Ejercicio 13: Lista de tareas actualizada
function actualizarTareas() {
    let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];
    
    alert("Tareas de la semana pasada: " + tareas.join(", "));

    tareas.splice(2, 4); 
    tareas.push("lavar la ropa");
    tareas.push("organizar escritorio");
    alert("Tareas de esta semana: " + tareas.join(", "));
}


