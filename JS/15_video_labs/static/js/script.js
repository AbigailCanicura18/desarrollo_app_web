// Función para reproducir el video cuando el mouse está encima
function playVideo(element) {
    element.play();
}

// Función para pausar el video cuando el mouse se va
function pauseVideo(element) {
    element.pause();
}

// Función para cambiar el video principal y su título
function changeVideo(videoSrc, newTitle) {
    // Seleccionar el reproductor de video principal
    var mainVideo = document.getElementById("mainVideo");
    
    // Seleccionar el elemento h1 del título del video principal
    var mainVideoTitle = document.getElementById("main-video-title");

    // Cambiar la fuente (src) del video principal
    mainVideo.src = videoSrc;
    
    // Cambiar el texto del título
    mainVideoTitle.innerText = newTitle;

    // Cargar y reproducir el nuevo video
    mainVideo.load();
    mainVideo.play();
}