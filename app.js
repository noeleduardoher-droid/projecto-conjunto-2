document.addEventListener('DOMContentLoaded', () => {
    
    const portadas = document.querySelectorAll('.book-item img');
    const panel = document.getElementById('info-panel');
    const panelTitle = document.getElementById('panel-title');
    const panelImg = document.getElementById('panel-img');
    const btnCerrar = document.querySelector('.close-panel-btn');
    const btnOscuro = document.getElementById('boton-oscuro');
    
    const header = document.querySelector('.header');
    const mainContainer = document.querySelector('.main-container');
    const secondPage = document.querySelector('.second-page');
    const visitLink = document.querySelector('.visit-link');
    const body = document.querySelector('body');

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabIndicator = document.querySelector('.tab-indicator');
    const tabPanels = document.querySelectorAll('.tab-content');

    const startReadingBtn = document.querySelector('.read-now-btn');
    const readerView = document.getElementById('reader-view');
    const readerContent = document.getElementById('reader-content');
    const bgTools = document.querySelectorAll('.bg-tool');
    const closeReader = document.getElementById('close-reader');

    portadas.forEach(img => {
        img.addEventListener('click', () => {
            const parent = img.closest('.book-item');
            if (panelTitle && panelImg) {
                panelTitle.textContent = parent.dataset.title || img.alt;
                panelImg.src = img.src;
            }
            panel.classList.add('active');
            
            if(tabButtons.length > 0) {
                setTimeout(() => updateTab(tabButtons[0]), 50);
            }
        });
    });

    if (btnCerrar) {
        btnCerrar.addEventListener('click', () => panel.classList.remove('active'));
    }

    function updateTab(btn) {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) targetPanel.classList.add('active');

        if (tabIndicator) {
            tabIndicator.style.width = `${btn.offsetWidth}px`;
            tabIndicator.style.left = `${btn.offsetLeft}px`;
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => updateTab(btn));
    });

    if (visitLink) {
        visitLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            mainContainer.style.opacity = '0';
            mainContainer.style.transition = 'opacity 0.5s ease';
            header.style.transition = 'transform 0.5s ease';
            header.style.transform = 'translateY(-100%)';

            setTimeout(() => {
                mainContainer.style.display = "none";
                header.style.display = "none";
                
                secondPage.style.display = "flex";
                secondPage.style.opacity = '0';
                
                setTimeout(() => {
                    secondPage.style.transition = 'opacity 0.5s ease';
                    secondPage.style.opacity = '1';
                    body.style.backgroundColor = "#183459";
                }, 50);
                
                window.scrollTo(0, 0);
            }, 500);
        });
    }

    if (startReadingBtn) {
        startReadingBtn.addEventListener('click', () => {
            panel.classList.remove('active');
            mainContainer.classList.add('hidden');
            secondPage.classList.add('hidden');
            if (readerView) readerView.style.display = 'block';
            window.scrollTo(0, 0);
        });
    }

    bgTools.forEach(tool => {
        tool.addEventListener('click', () => {
            if (readerContent) {
                readerContent.classList.remove('white-theme', 'sepia-theme', 'dark-theme');
                
                if(tool.classList.contains('white')) readerContent.classList.add('white-theme');
                if(tool.classList.contains('sepia')) readerContent.classList.add('sepia-theme');
                if(tool.classList.contains('dark')) readerContent.classList.add('dark-theme');
            }
        });
    });

    if (closeReader) {
        closeReader.addEventListener('click', () => {
            if (readerView) readerView.style.display = 'none';
            mainContainer.classList.remove('hidden');
            header.style.display = 'flex';
            header.style.transform = 'translateY(0)';
            window.scrollTo(0, 0);
        });
    }

    const savedTheme = localStorage.getItem('fandom-theme');
    if (savedTheme === 'dark') {
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

    window.addEventListener('resize', () => {
        const activeBtn = document.querySelector('.tab-btn.active');
        if (activeBtn) updateTab(activeBtn);
    });

    console.log("🚀 Motor Fandom-Squad: ¡Pasos 1-5 Completados y Sincronizados!");
});
