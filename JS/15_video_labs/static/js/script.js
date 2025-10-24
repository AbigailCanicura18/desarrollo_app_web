// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('miVideo');

    // Escucha el evento 'mouseover' para reproducir el video
    video.addEventListener('mouseover', () => {
        video.play();
    });

    // Escucha el evento 'mouseout' para pausar el video
    video.addEventListener('mouseout', () => {
        video.pause();
        // Opcional: regresa el video al inicio para que muestre el poster
        video.currentTime = 0;
    });
});