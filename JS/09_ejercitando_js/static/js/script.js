function calcular() {
    let numero = parseInt(prompt("Ingresa un numero"));
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        let multiplo = i * 3;
        if (multiplo % 2 === 0){
            suma += multiplo;
        } else {
            suma -= i;
        };
        console.log("i:",i,"multiplo:",multiplo,"suma:",suma);
    };
    alert("el resultaddo es: "+suma);
    return suma;
};

let resultado = calcular();
console.log("Valor de retorno:",resultado);




function mostrarSecuencia(numeroLimite){
    let resultado = []
    for(let i = 1; i <= numeroLimite ; i++)
    {
        if (i % 4 === 0)
        {
            resultado.push(`${i}*`);
        } else{
            resultado.push(i)
        }   
        
    }
    console.log(resultado)
    return resultado
}

function multiplos(){
    inputLimite = document.getElementById("input2")
    limite = parseInt(inputLimite.value)

    let numeros = mostrarSecuencia(limite);

    if (numeros.length === 0) {
        document.getElementById("resultado2").innerText = "No se encontraron múltiplos.";
    } else {
        document.getElementById("resultado2").innerText = "Números encontrados: " + numeros.join(", ");
    }

    inputLimite.value = "";
    inputLimite.focus();
}



function calcularPromedio(){
    let numero = parseInt(prompt("Ingresa un numero: "));
    let resultado = 1;
    for (let i = 1; i<= numero; i++){
        let multiplicador = i * 2;
        resultado *= multiplicador
        console.log("i:", i, "multiplicador:", multiplicador, "resultado:", resultado);
    }
    alert("El producto es: " + resultado);
    return resultado;
}

console.log(resultado)
let valorFinal = calcularPromedio();
console.log("Valor final:", valorFinal)




















































// 🟦 Ejercicio 1: Repetir una palabra N veces
// 📌 Solicita al usuario una palabra y un número usando prompt. Luego, crea una función que reciba ambos valores como parámetros,
//  repita la palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert. 
function repitePalabra(palabra, numeroVeces){

    let resultado = "";
    //bucle for
    for (let i = 0; i < numeroVeces; i++){
        resultado += `${palabra} - `
    }
    return resultado.trim(); //trim elimina espacios en los extremos
}
function mostrarPalabra(){
    let input01 =  document.getElementById("input1");
    let palabra = input01.value;
    let numero  = parseInt(prompt("Ingrese cuantas veces se repetira su palabra"));


    let resultadoFinal = repitePalabra(palabra, numero)
    document.getElementById("resultado1").textContent = resultadoFinal;
}


