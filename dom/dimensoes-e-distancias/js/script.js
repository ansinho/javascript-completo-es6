// const listaAnimais = document.querySelector('.animais-lista');
// const height = listaAnimais.scrollHeight;
// console.log(height);

// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

// const h2Rect = document.querySelector('h2');

// const rect = h2Rect.getBoundingClientRect();
// console.log(rect);


// console.log(
//     window.innerWidth,
//     window.outerWidth,
//     window.innerHeight,
//     window.outerHeight,
//     window.pageYOffset
// );


// const small = window.matchMedia('(max-width: 600px)');
// if(small.matches) {
//     console.log('Tela menor que 600px');
// } else {
//     console.log('Tela maior que 600px');
// }

// console.log(small);


// Verifique a distancia da primeira imagem em relação ao top
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);


// Some a largura de todas as imagens
function somarImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });
    console.log(soma);
}

window.onload = () => {
    somarImagens();
}


// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo (48px/48px)
const links = document.querySelectorAll('a');
links.forEach((link) => {
    let verificaLink = link.getBoundingClientRect()
    if (verificaLink.width >= 48 && verificaLink.height >= 48) {
        console.log(link, 'Dentro dos padrões');
    } else {
        console.log(link, 'Fora dos padrões');
    }
});


// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)');
if(small.matches) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}
