// const imgs = document.querySelectorAll('img');

// imgs.forEach((img, index, array) => {
//     // console.log(img, index, array);
// });


// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos); // Passado HTMLCollection para um array, assim conseguimos tyrabalhar com foreach
// console.log(titulosArray);

// titulosArray.forEach((titulo) => { 
//     console.log(titulo.innerText);
// });



// Mostre todos paragrafos do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
paragrafos.forEach((paragrafo) => {
    console.log(paragrafo);
});


// Mostre os testes dos paragrafos
paragrafos.forEach((paragrafo) => {
    console.log(paragrafo.innerText);
});
