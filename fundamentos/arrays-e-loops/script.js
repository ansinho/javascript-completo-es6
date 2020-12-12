// let videoGames = ['nintendo 64', 'x-box', 'ps4', '3-ds', 'psvita'];
// console.log(videoGames);
// videoGames.pop();
// console.log(videoGames);
// videoGames.push('ps vita');
// console.log(videoGames);
// console.log(videoGames.length); 

// for (let i = 0; i < videoGames.length; i++) {
//     console.log(videoGames[i])
//     if (videoGames[i] === 'ps4') {
//         break;
//     }
// }

// videoGames.forEach((item, index) => {
//     console.log(item, index)
// })



let copas = [1959, 1962, 1970, 1994, 2002];
copas.forEach((copa) => {
    console.log(`O Brasil ganhou a copa de ${copa}`);
})


let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (let fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if(frutas[fruta] === 'Pera') {
        break;
    }
}


let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta)