console.log("Conectado....");

function mayoriaEdad() {
    let edad = parseInt(prompt("Ingrese Edad: "));
    
    if (edad >= 18) {
        document.getElementById("resultado").innerHTML = `<p>La persona es mayor de Edad: ${edad}</p>`
    } else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML = `<p>La persona es menor de Edad: ${edad}</p>`
    } else {
        document.getElementById("resultado").innerHTML = `<p>El valor <strong>${edad}</strong> es invalido</p> `
    };
};

// ejercicios

function nuevoProducto() {
    let producto = ["pan", "leche", "queso"];
    let nuevoProdu = prompt("Ingrese un nuevo producto");
    if (producto[0] == nuevoProdu) {
        console.log("...")
    }
}

function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
}
}

// ejercicio 1 
function mayoriaEdad() {
    let edad = parseInt(prompt("Ingrese Edad: "));
    
    if (edad >= 18) {
        document.getElementById("resultado").innerHTML = `<p>La persona con la edad ingresada: <br> ${edad} tiene el Acceso permitido</p>`
    } else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML = `<p>La persona con la edad ingresada: <br> ${edad} tiene el Acceso denegado</p>`
    } else {
        document.getElementById("resultado").innerHTML = `<p>El valor <strong>${edad}</strong> es invalido</p>`
    };
};

// ejercicio 2
function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("listaProducto").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("listaProducto").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("listaProducto").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("listaProducto").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
}
};

// ejercicio 3
let tareas = ["jugar","comer","escuchar musica","ver series","dormir","estudiar"];
function ControlTareas() {
    if (tareas.length >= 6) {
        let borrado = tareas.pop()
        document.getElementById("ControlTareas").innerHTML =
        `<p>Se elimino la tarea ${borrado}</p>`;
    } else {
        document.getElementById("ControlTareas").innerHTML =
        `<p>Lista aceptable</p>`;
    }
};

// ejercicio 4
let cola = ["sinNombre", "Pedro ", " Lucía "];
function validarElement() {
    if (cola[0] == "sinNombre" || cola[0] == "") {
        let borrado = cola.shift()
        // document.getElementById("validarElement").innerHTML =
        // `<p>Se elimino el primer dato ${borrado}</p>`;
        alert(`Se elimino el primer dato ${borrado}`)
        document.getElementById("validarElement").innerHTML =
        `<p>Nuevo arreglo ${cola}</p>`;
    } else {
        document.getElementById("validarElement").innerHTML =
        `<p>Cola correcta</p>`;
    }
};

// ejercicio 5
function Saludo() {
    let nombre = prompt("Ingrese su nombre: ")
    if (nombre) {
        let saludos = [];
        saludos.push(`Hola, ${nombre}`);
        document.getElementById("Saludo").innerHTML =
        `<p>${saludos}</p>`;
    } else {
        document.getElementById("Saludo").innerHTML =
        `<p>Nombre no válido</p>`;
    }
};

// ejercicio 6
function Calificar() {
    let nota = parseInt(prompt("Ingrese su nota: "));
    if (nota >= 6) {
        document.getElementById("Calificar").innerHTML =
        `<p>Excelente</p>`;
    } else if (nota >= 4) {
        document.getElementById("Calificar").innerHTML =
        `<p>Aprobado</p>`;
    } else if (nota < 4) {
        document.getElementById("Calificar").innerHTML =
        `<p>Reprobado</p>`;
    } else {
        document.getElementById("Calificar").innerHTML =
        `<p>Valor no válido</p>`;
    }
};

// ejercicio 7
function Registro() {
    let visitas = [];
    let persona = prompt("Ingrese su nombre: ");
    if (persona) {
        visitas.unshift(persona);
        document.getElementById("Registro").innerHTML =
        `<p>Se agrego como <br> visita a ${visitas}</p>`;
    } else {
        document.getElementById("Registro").innerHTML =
        `<p>Error: nombre vacío</p>`;
    }
};

// ejercicio 8 
function stockControl() {
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("Ingrese el producto: ");
    if (stock.includes(productoSolicitado)) {
        document.getElementById("stockControl").innerHTML =
        `<p>Producto disponible</p>`;
    } else {
        stock.push(productoSolicitado);
        document.getElementById("stockControl").innerHTML =
        `<p>Producto agregado al stock</p>`;
    }
};

// ejercicio 9
function invitados() {
    let invitados = ["Ana", "Luis", "Camila"];
    let persona = prompt("Ingrese su nombre: ");
    if (invitados.includes(persona)) {
        document.getElementById("invitados").innerHTML =
        `<p>Bienvenido, ${persona}</p>`;
    } else {
        document.getElementById("invitados").innerHTML =
        `<p>No estás en la lista</p>`;
    };
};

// ejercicio 10
function EvaluarRol() {
    let usuarios = ["Admin", "Editor", "Invitado"];
    let rol = prompt("Ingrese su rol: ");
    if (rol === "Admin") {
        usuarios.unshift(rol);
        document.getElementById("EvaluarRol").innerHTML =
        `<p>Rol prioritario agregado</p>`;
    } else {
        usuarios.push(rol); 
        document.getElementById("EvaluarRol").innerHTML =
        `<p>Rol agregado</p>`;
    }
};




