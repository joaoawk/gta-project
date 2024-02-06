let botao = document.querySelector('.btn-plataforma')

let elementoPlataforma = document.querySelector('.btn-plataforma .plataformas')

botao.addEventListener('click', () => {
    elementoPlataforma.classList.toggle('ativo')
})