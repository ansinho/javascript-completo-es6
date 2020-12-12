// const menu = document.querySelector('.menu'); 
// console.log(menu.innerHTML);
// console.log(menu.outerHTML);

// menu.innerHTML = '<p>Olá, anderson Barbosa</p>'
// // menu.innerText = '<p>Olá, anderson Barbosa</p>' // Renderiza as tags tbm.


// const lista = document.querySelector('.animais-lista');     //previousElementSibling.previousElementSibling -> pai do elemento, pai do pai do element
// console.log(lista.previousElementSibling);                 //previousElementSibling -> elemento anterior
// console.log(lista.children[0]);                           //nextElementSibling -> proximo elemento
// console.log(lista.children[ -- lista.children.length]);   

// console.log(lista.querySelector('li:last-child'));       


// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// lista.appendChild(titulo);

// const animais = document.querySelector('.animais');
// const copy = document.querySelector('.coppy');
// const copyParagrafo = document.querySelector('.coppy p');

// copy.insertBefore(animais, copyParagrafo);


// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// copy.appendChild(novoH1);


// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true);

// faq.appendChild(cloneH1);


// duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.coppy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);


// selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = document.querySelector('dt');
const proximoDd = primeiroDt.nextElementSibling;
console.log(proximoDd);


// Substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;