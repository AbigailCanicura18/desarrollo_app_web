
function cargarReporte(ciudad) {
    alert("Cargando reporte del clima para " + ciudad + "...");
}


function aceptarGalletas() {
    var banner = document.querySelector("#banner-galletas");
    if (banner) {
        banner.remove();
    }
}


function convertirTemperatura(selectElement) {
    var conversionType = selectElement.value;
    var temperaturas = document.querySelectorAll(".temp");

    for (var i = 0; i < temperaturas.length; i++) {
        var tempSpan = temperaturas[i];
        
    
        var tempActual = parseInt(tempSpan.innerText.replace('°', '')); 
        var nuevaTemp;

        if (conversionType === "f") {
        
            nuevaTemp = Math.round((tempActual * 9/5) + 32);
        } else {
        
            nuevaTemp = Math.round((tempActual - 32) * 5/9);
        }
        

        tempSpan.innerText = nuevaTemp + '°'; 
    }
}