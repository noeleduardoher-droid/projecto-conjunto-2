// Esperar a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {

    // 1. Efecto de "Zoom" y Sombra en las Portadas
    const libros = document.querySelectorAll('.book-item');
    
    libros.forEach(libro => {
        libro.addEventListener('mouseenter', () => {
            libro.style.transform = 'scale(1.05)';
            libro.style.transition = 'all 0.3s ease';
            libro.style.cursor = 'pointer';
        });
        
        libro.addEventListener('mouseleave', () => {
            libro.style.transform = 'scale(1)';
        });

        // 2. Simular apertura de libro al hacer clic
        libro.addEventListener('click', () => {
            const titulo = libro.querySelector('img').alt;
            alert(`¡Abriendo: ${titulo}! Prepárate para leer.`);
        });
    });

    // 3. Botón de Cambio de Tema (Modo Espacial)
    // Asegúrate de tener un botón con la clase .switch-theme-button en tu HTML
    const themeBtn = document.querySelector('.switch-theme-button');
    const header = document.querySelector('.header');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            header.style.backgroundImage = "url('Textures/background.png')";
            header.style.backgroundSize = 'cover';
            document.body.style.backgroundColor = '#1a1a1a';
            alert('Modo Nocturno activado en Fandom-Squad');
        });
    }

    // 4. Función para la flecha de scroll (Si tienes el botón .arrow-next)
    const arrow = document.querySelector('.arrow-next');
    if (arrow) {
        arrow.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    console.log("JavaScript de Fandom-Squad cargado correctamente.");
});
