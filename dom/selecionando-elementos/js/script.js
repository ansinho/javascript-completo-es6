// Retorne no console todas imagens do site
const todasImagens = document.querySelectorAll('img'); //NodeList
console.log(todasImagens);


// Retorne no console somente as imagens uqe começam com imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]'); // 1º tag img, 2º atributo (src), 3º comece com (^=), 4º abre aspas duplas e o destino
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href commeça com #)
const linksInterno = document.querySelectorAll('a[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2'); // ou passando querySelectorAll('.animais-descricao h2')[0];
console.log(h2Animais);

//Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);

