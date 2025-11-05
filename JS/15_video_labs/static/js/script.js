// Función para cambiar el video principal cuando se hace clic en una miniatura
function changeVideo(videoSource, newTitle) {
    const mainVideo = document.getElementById('mainVideo');
    const mainVideoTitle = document.getElementById('main-video-title');
    
    // 1. Cambia la fuente del video
    mainVideo.src = videoSource;
    
    // 2. Cambia el título
    mainVideoTitle.textContent = newTitle;

    // 3. Carga y reproduce el nuevo video
    mainVideo.pause(); 
    mainVideo.load();
    mainVideo.play();
}

// Función que se ejecuta con onmouseover para las miniaturas (vid-s)
function playVideo(element) {
    // 'element' es el objeto <video> que activó el evento
    element.play();
}

// Función que se ejecuta con onmouseout para las miniaturas (vid-s)
function pauseVideo(element) {
    // 'element' es el objeto <video> que activó el evento
    element.pause();
    // Reinicia el video al inicio para la próxima previsualización
    element.currentTime = 0; 
}