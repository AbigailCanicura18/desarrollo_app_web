// --- FUNCIÓN PARA LA ALERTA DE CIUDAD ---
function cargarReporte(ciudad) {
    // La directiva del proyecto prohibe el uso de alert().
    // En su lugar, se muestra un mensaje en la consola, que es una práctica común de desarrollo.
    console.log("Cargando reporte del clima para " + ciudad + "...");
}

// --- FUNCIÓN PARA ELIMINAR EL BANNER DE GALLETAS ---
function aceptarGalletas() {
    var banner = document.querySelector("#banner-galletas");
    if (banner) {
        banner.remove();
    }
}

// --- FUNCIÓN PARA CONVERTIR TEMPERATURAS ---
function convertirTemperatura(selectElement) {
    var conversionType = selectElement.value;
    var temperaturas = document.querySelectorAll(".temp");

    for (var i = 0; i < temperaturas.length; i++) {
        var tempSpan = temperaturas[i];
        var tempActual = parseInt(tempSpan.innerText);
        var nuevaTemp;

        // Verifica si la conversión es a Fahrenheit
        if (conversionType === "f") {
            // Convierte el valor actual (asumido como Celsius) a Fahrenheit
            nuevaTemp = Math.round((tempActual * 9/5) + 32);
        } else {
            // Convierte el valor actual (asumido como Fahrenheit) a Celsius
            nuevaTemp = Math.round((tempActual - 32) * 5/9);
        }

        tempSpan.innerText = nuevaTemp;
    }
}