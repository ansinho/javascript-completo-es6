// const img = document.querySelector('img');

// function callback(event) {
//     console.log(event)
// }
// img.addEventListener('click', callback);


// const imagensLista = document.querySelector('.animais-lista');


// function callbackLista(event) {
//     console.log(event);
// }

// imagensLista.addEventListener('click', callbackLista);


// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//     event.preventDefault()
//     console.log(this.getAttribute('href'));
// }

// linkExterno.addEventListener('click', handleLinkExterno);


// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//     console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);


// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

// function handleKeyboard(event) {
//     if(event.key === 'f') {
//         document.body.classList.toggle('fullscreen')
//     }
// }

// window.addEventListener('keydown', handleKeyboard);



// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//     const src = event.currentTarget.getAttribute('src');
//     console.log(src);
// }

// imgs.forEach((img) => {
//     img.addEventListener('click', handleImg);
// })


// Selecione os links interno, e ao clicar em deles, adicione a class ativo e remova dos demais se houver
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();

    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });

    this.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});


//Selecione todos os elementos do site a partir do body, ao clicar mostre exatamente quais estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    this.remove();
}

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento);
// });



// ao clicar na tecla T aumente todos os textos do site

function handleKeyBoard(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}

const teclaT = window.addEventListener('keydown', handleKeyBoard)