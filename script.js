function ativar() {
    let menu = document.getElementById('menu');
    menu.style.display = 'block'; // Exibe o menu antes da transição
    setTimeout(() => {
        menu.style.opacity = '1';
    }, 10);
}

function desativar() {
    let menu = document.getElementById('menu');
    menu.style.opacity = '0';
    setTimeout(() => {
        menu.style.display = 'none'; // Esconde após a animação
    }, 300); // Tempo da animação
}

window.addEventListener('resize', function () {
    let menu = document.getElementById('menu');
    if (window.innerWidth > 768) { // Define o tamanho de corte para desktop
        menu.style.display = 'none';
        menu.style.opacity = '0';
    }
});