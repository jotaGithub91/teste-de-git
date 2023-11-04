function tela() {
    let screen = document.querySelector('.tela');
    let larg = document.querySelector('.larg');
    let alt = document.querySelector('.alt');

    let altura = screen.offsetHeight;
    let comprimento = screen.offsetWidth;

    larg.innerHTML = `Largura: ${comprimento}px`
    alt.innerHTML = `Altura: ${altura}px`
}