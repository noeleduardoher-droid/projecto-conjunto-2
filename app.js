

document.addEventListener('DOMContentLoaded', () => {
    
    const portadas = document.querySelectorAll('.book-item img');
    const btnOscuro = document.getElementById('boton-oscuro');
    const panel = document.getElementById('info-panel');
    const panelTitle = document.getElementById('panel-title');
    const panelImg = document.getElementById('panel-img');
    const btnCerrar = document.querySelector('.close-panel-btn');
    
    const header = document.querySelector('.header');
    const maincontainer = document.querySelector('.main-container');
    const secondpage = document.querySelector('.second-page');
    const startlightbtn = document.querySelector('.visit-link');
    const body = document.querySelector('body');

    portadas.forEach(portada => {
        portada.addEventListener('click', () => {
            if (panelTitle && panelImg) {
                panelTitle.textContent = portada.alt;
                panelImg.src = portada.src;
            }
            panel.classList.add('active');
        });
    });

    if (btnCerrar) {
        btnCerrar.addEventListener('click', () => {
            panel.classList.remove('active');
        });
    }

    function change_page() {
        maincontainer.style.opacity = '0';
        maincontainer.style.transition = 'opacity 0.5s ease';
        header.style.transition = 'transform 0.5s ease';
        header.style.transform = 'translateY(-100%)';

        setTimeout(() => {
            maincontainer.style.display = "none";
            header.style.display = "none";
            

            secondpage.style.display = "flex";
            secondpage.style.opacity = '0';
            

            setTimeout(() => {
                secondpage.style.transition = 'opacity 0.5s ease';
                secondpage.style.opacity = '1';
                body.style.backgroundColor = "#46b973";
            }, 50);
            
            window.scrollTo(0, 0);
        }, 500);
    }

    if (startlightbtn) {
        startlightbtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            change_page();
        });
    }

    if (localStorage.getItem('fandom-theme') === 'dark') {
        body.classList.add('dark-mode');
        if (btnOscuro) btnOscuro.textContent = '☀️ Modo Claro';
    }

    if (btnOscuro) {
        btnOscuro.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            const isDark = body.classList.contains('dark-mode');
            btnOscuro.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
            
            localStorage.setItem('fandom-theme', isDark ? 'dark' : 'light');
        });
    }

    console.log("🚀 Motor Fandom-Squad: Verificado y Sincronizado.");
});
