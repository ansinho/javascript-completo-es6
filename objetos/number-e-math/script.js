// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(5 + 4)); // false

// //insIntenger
// console.log(Number.isInteger(20)); // true
// console.log(Number.isInteger(250.50)); // false

// // parseFloat e parseInt
// console.log(Number.parseFloat('30.59')); // Retorna um número a partir de uma string.
// console.log(Number.parseFloat('100 Reais')); // Retornará 100
// // -> Deve-se usar ponto para separar os numeros decimais.
// console.log(Number.parseInt('100.27 reias'));; // Retorna apenas 100, cortando o valor decimal

// // toFixed
// const preco = 10.584;
// console.log(+preco.toFixed(2)); // Ele retorna uma string, então devemos converter se formo tratar

// // toString
// const preco1 = 7.99;
// console.log(preco1.toString()); // Converte um número para string

// // toLocaleString
// const valor = 5.49;
// console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // Reais, retorna string
// console.log(valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // Dollar, retorna string


// //Math: Objeto que possi propriedades e métodos de expressões matemáticas comuns
// console.log(Math.PI); // 3.14
// console.log(Math.E); // 2.718
// console.log(Math.LN10); // 2.303

// console.log(Math.abs(3-10)); // Transforma numero negativo para positivo -7 => 7
// console.log(Math.round(5.6)); // Arredonda para o numero mais proximo => 6
// console.log(Math.ceil(4.49)); // Arredonda para sempre pra cima => 5
// console.log(Math.floor(4.99)); // Arredonda para sempre pra baixo => 4

// console.log(Math.max(5, 3, 10, 15, 8)); // Retorna o maior número => 15
// console.log(Math.min(5, 3, 10, 15, 8)); // Retorna o menor número => 3

// const random = Math.floor(Math.random() * 10); // Retorna número aleatório de 0 a 1. Podemos multiplicar por algum numero que querendo entre 0 e esse numero
// console.log(random);
// console.log(Math.random() * 15); // Entre 0 e 15

// console.log(Math.floor(Math.random() * (30 - 15) + 1) + 15); // Formula para retornar um aleatório entre dois numeros



// ########## EXERCÍCIOS ##########
// Retorne um número aleatório entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);


// Crie uma unção para limpar os preços e retornar os números com centavos arredondados
// depos retorne a soma total
const listaPrecos = [' R$ 59,99', 'R$ 100,222', 'R$ 230', 'r$ 200'];

function limpaPreco(preco) {
  preco = +preco
    .toUpperCase()
    .replace('R$', '')
    .trim()
    .replace(',', '.');
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limpaPreco(preco);
});

console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

limpaPreco(listaPrecos[1]);
