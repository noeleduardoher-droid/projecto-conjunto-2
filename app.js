
document.addEventListener('DOMContentLoaded', () => {

    const scrollBtn = document.querySelector('.arrow-next');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // 2. Función para cambiar el tema (Switch Theme)
    const switchThemeBtn = document.querySelector('.switch-theme-button');
    const header = document.querySelector('.header');

    if (switchThemeBtn && header) {
        switchThemeBtn.addEventListener('click', () => {
            // Cambiamos el fondo del header por una imagen de espacio
            header.style.backgroundImage = "url('https://uploads.disquscdn.com/images/bg_space.png')";
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = 'center';
            
            // Opcional: Cambiar color de texto para que sea legible
            header.style.color = 'white';
            console.log("Tema espacial activado en Fandom-Squad");
        });
    }

    // 3. Optimizador de alturas (Solo si realmente necesitas igualar cajas específicas)
    // Nota: Con el CSS de Flexbox que te pasé antes, esto ya no suele ser necesario.
    const adjustHeights = () => {
        const items = document.querySelectorAll('.book-item');
        if (items.length > 0) {
            let maxHeight = 0;
            items.forEach(item => {
                item.style.height = 'auto'; // Reset
                if (item.offsetHeight > maxHeight) maxHeight = item.offsetHeight;
            });
            items.forEach(item => item.style.height = maxHeight + 'px');
        }
    };

    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    window.addEventListener('resize', adjustHeights);
    adjustHeights();
});
