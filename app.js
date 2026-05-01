// Esperar a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {

    // 1. EFECTO DE ZOOM EN LAS PORTADAS
    // Seleccionamos todas las imágenes dentro de las secciones de libros
    const portadas = document.querySelectorAll('section img');
    
    portadas.forEach(portada => {
        portada.addEventListener('mouseenter', () => {
            portada.style.transform = 'scale(1.1)';
            portada.style.transition = 'transform 0.3s ease';
            portada.style.cursor = 'pointer';
            portada.style.border = '2px solid #FF00FF'; // Brillo cuando pasas el mouse
        });
        
        portada.addEventListener('mouseleave', () => {
            portada.style.transform = 'scale(1)';
            portada.style.border = 'none';
        });

        // Al hacer clic, muestra un mensaje con el nombre del libro
        portada.addEventListener('click', () => {
            const nombreLibro = portada.alt || "este libro";
            alert("Has seleccionado: " + nombreLibro);
        });
    });

    // 2. IMPLEMENTACIÓN DE MODO OSCURO
    // Para que esto funcione, necesitas un botón con id="boton-oscuro" en tu HTML
    const btnOscuro = document.getElementById('boton-oscuro');
    
    if (btnOscuro) {
        btnOscuro.addEventListener('click', () => {
            // Cambiamos el fondo del body y colores de texto
            document.body.classList.toggle('dark-mode');
            
            // Cambiamos el color del header manualmente si es necesario
            const header = document.querySelector('.header');
            if (document.body.classList.contains('dark-mode')) {
                header.style.backgroundColor = '#1a1a1a';
                btnOscuro.textContent = '☀️ Modo Claro';
            } else {
                header.style.backgroundColor = '#800080'; // Tu color original
                btnOscuro.textContent = '🌙 Modo Oscuro';
            }
        });
    }

    console.log("JavaScript de Fandom-Squad listo y limpio.");
});
