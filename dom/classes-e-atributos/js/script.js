// const menu = document.querySelector('.menu')
// console.log(menu.className);
// console.log(menu.classList);

// menu.classList.add('ativo');
// console.log(menu.classList);

// menu.classList.remove('ativo');
// console.log(menu.classList);

// menu.classList.toggle('ativo');
// console.log(menu.classList);

// if(menu.classList.contains('melancia')) {
//     console.log('possui')
// } else {
//     console.log('Não possui')
// }

// menu.classList.replace('ativo', 'banana');
// console.log(menu.classList);




// const animais = document.querySelector('.animais');
// console.log(animais.attributes);


// const img = document.querySelector('img');

// const altImg = img.setAttribute('alt', 'Raposinha Sapeca'); // Seta um atributo

// const srcImg = img.getAttribute('alt'); // Retorna um atributo
// console.log(srcImg);

// // const possuiAlt = img.removeAttribute('alt') // Remove um atrbuto

// const possuiAlt = img.hasAttribute('alt'); // Verificar se o elemento possui um atributo
// console.log(possuiAlt);


// Adiciona a class 'ativo' em todos itens do menu, os links.
const itensMenu = document.querySelectorAll('.menu ul li a');
console.log(itensMenu);

itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

// Remova a class 'ativo' de todos os links, mantendo apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo'); // adiciona ao primeiro elemento



// Verifique se as imagens possuem o atibuto alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const attrAlt = img.hasAttribute('alt');
    console.log(img, attrAlt);
})


// odifique o href do link externo do menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.linkedin.com/in/ansinho/');