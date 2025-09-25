function example(elemento) {
    console.log("elemento clickeado", elemento);
}

function turnOff(element) {
    if (element.innerText == "Off"){
        element.innerText = "On"
    }else{
        element.innerText = "Off"
    };
}

function remove(element) {
    element.remove();
}