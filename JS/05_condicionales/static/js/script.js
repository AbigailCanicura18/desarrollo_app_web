//Ejercicio 1
function mayoriaEdad(){

    let edad = parseInt(prompt("Ingrese su edad por favor: "));
    if (edad >= 18){
        document.getElementById("resultado").innerHTML = `<p>Es mayor de edad: ${edad}</p>`;

    }
    else if(edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML = `<p>Es menor de edad: ${edad}</p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>El valor <strong> ${edad}</strong> es invalido.</p>`;
    }
}


// Ejercicio 2
function productos(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo producto por favor:");
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

// Ejercicio 3




