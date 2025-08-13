document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer para animar las tarjetas al hacer scroll
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% de la tarjeta debe ser visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: deja de observar el elemento una vez que es visible
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

});


// --- CÓDIGO DEL CARRUSEL DE IMÁGENES ---

// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecciona solo los elementos del carrusel de la sección #prototipo
    const sliderContainer = document.querySelector('#prototipo .slider-container');
    
    // Si no existe el carrusel en la página, no hagas nada
    if (!sliderContainer) return;

    const slider = sliderContainer.querySelector('.slider');
    const slides = sliderContainer.querySelectorAll('.slider img');
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');
    const dotsContainer = sliderContainer.querySelector('.dots-container');

    let currentIndex = 0;
    let autoPlayInterval;

    // Crear los puntos de navegación
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    // Función para ir a una diapositiva específica
    function goToSlide(index) {
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar el punto activo
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Funciones para ir a la siguiente y anterior
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    // Asignar eventos a los botones
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    // Función para iniciar el auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // 5000ms = 5 segundos
    }

    // Función para reiniciar el auto-play (cuando el usuario interactúa)
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }
    
    // Pausar al pasar el mouse sobre el carrusel
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    sliderContainer.addEventListener('mouseleave', startAutoPlay);

    // Iniciar todo
    goToSlide(0);
    startAutoPlay();
});