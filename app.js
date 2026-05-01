
document.addEventListener('DOMContentLoaded', () => {

    const portadas = document.querySelectorAll('section img');
    
    portadas.forEach(portada => {
        portada.addEventListener('mouseenter', () => {
            portada.style.transform = 'scale(1.1)';
            portada.style.transition = 'transform 0.3s ease';
            portada.style.cursor = 'pointer';
            portada.style.border = '2px solid #FF00FF';
        });
        
        portada.addEventListener('mouseleave', () => {
            portada.style.transform = 'scale(1)';
            portada.style.border = 'none';
        });

        portada.addEventListener('click', () => {
            const nombreLibro = portada.alt || "este libro";
            alert("Has seleccionado: " + nombreLibro);
        });
    });

    const btnOscuro = document.getElementById('boton-oscuro');
    
    if (btnOscuro) {
        btnOscuro.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            const header = document.querySelector('.header');
            if (document.body.classList.contains('dark-mode')) {
                header.style.backgroundColor = '#1a1a1a';
                btnOscuro.textContent = '☀️ Modo Claro';
            } else {
                header.style.backgroundColor = '#800080';
                btnOscuro.textContent = '🌙 Modo Oscuro';
            }
        });
    }

});
