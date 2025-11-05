// Obtiene una referencia al video principal y al título principal
const mainVideo = document.getElementById('mainVideo');
const mainTitle = document.getElementById('texto');

/**
 * Inicia la reproducción de un elemento de video.
 * @param {HTMLVideoElement} videoElement - El elemento de video a reproducir.
 */
function playVideo(videoElement) {
    // La función .play() devuelve una Promise, se usa .catch() para manejar errores
    videoElement.play().catch(error => {
        // Esto previene errores de "NotAllowedError" si el navegador bloquea la reproducción automática
        console.log("Error al intentar reproducir video:", error);
    });
}

/**
 * Pausa la reproducción de un elemento de video y lo restablece al inicio.
 * @param {HTMLVideoElement} videoElement - El elemento de video a pausar.
 */
function pauseVideo(videoElement) {
    videoElement.pause();
    videoElement.currentTime = 0; // Opcional: regresa el video al inicio al salir del mouse
}

/**
 * Cambia el video principal y su título con la información del video pequeño clickeado.
 * @param {HTMLVideoElement} newVideoElement - El elemento de video pequeño que se ha clickeado.
 */
function cambioVideo(newVideoElement) {
    // 1. Detener el video principal actual y pausar
    mainVideo.pause();
    mainVideo.currentTime = 0;

    // 2. Obtener el nuevo src y título
    const newSrc = newVideoElement.src;
    // El título está en el <span> siguiente al <video>
    const newTitle = newVideoElement.nextElementSibling.textContent;

    // 3. Actualizar el video principal y el título
    mainVideo.src = newSrc;
    mainTitle.textContent = newTitle;

    // 4. Iniciar la reproducción del nuevo video principal
    mainVideo.play();
}