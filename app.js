document.addEventListener('DOMContentLoaded', () => {
    const portadas = document.querySelectorAll('.book-item img');
    const btnOscuro = document.getElementById('boton-oscuro');


    portadas.forEach(portada => {
        portada.addEventListener('click', () => {
            const nombreLibro = portada.alt;

            console.log("Seleccionado: " + nombreLibro);
        });
    });


    if (btnOscuro) {
        btnOscuro.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                btnOscuro.textContent = '☀️ Modo Claro';
            } else {
                btnOscuro.textContent = '🌙 Modo Oscuro';
            }
        });
    }
});
