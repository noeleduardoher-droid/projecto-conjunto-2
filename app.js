    const portadas = document.querySelectorAll('.book-item img');
    const btnOscuro = document.getElementById('boton-oscuro');
    const panel = document.getElementById('info-panel');
    const panelTitle = document.getElementById('panel-title');
    const panelImg = document.getElementById('panel-img');
    const btnCerrar = document.querySelector('.close-panel-btn');
    const header = document.querySelector('.header')
    const maincontainer = document.querySelector('.main-container')
    const secondpage = document.querySelector('.second-page')
    const startlightbtn = document.querySelector('.visit-link')
    const body = document.querySelector('body')
    
    portadas.forEach(portada => {
        portada.addEventListener('click', () => {
            panelTitle.textContent = portada.alt;
            panelImg.src = portada.src;

            panel.classList.add('active');
        });
    });

    btnCerrar.addEventListener('click', () => {
        panel.classList.remove('active');
    });

    if (btnOscuro) {
        btnOscuro.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            btnOscuro.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
        });
    }
});

function change_page() {
    secondpage.style.display = "flex";
    maincontainer.style.display = "none";
    header.style.display = "none";
    body.style.backgroundColor = "#46b973"
}

startlightbtn.addEventListener('click', (e) => {
    e.preventDefault(); //
    change_page();
});
