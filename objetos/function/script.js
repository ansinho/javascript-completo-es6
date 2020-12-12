// // Function.length: Retorna o total de paramêtros das função.
// // Function.name: Retorna uma string com o nome da função.
// function somar(n1, n2) {
//   return n1 + n2;
// }
// console.log(somar.length);
// console.log(somar.name);

// // Function.call(this, arg1, arg2, ...): Executa a função, sendo possível passarmos
// // uma nova referência ao this da mesma.
// const pessoa = {
//   nome: 'Anderson',
//   sobrenome: 'Barbosa'
// }

// function descricaoPessoa() {
//   console.log(this.nome + ' ' + this.sobrenome);
// }

// descricaoPessoa() // undefined undefined
// descricaoPessoa.call() // undefined undefined
// descricaoPessoa.call(pessoa) // Anderson Barbosa


// function darOi(nome) {
//   console.log('Oi para você ' + nome);
// }

// darOi.call({}, 'Anderson');


// const carros = ['Ford', 'Fiat', 'Honda'];
// const frutas = ['Banana', 'Maçã', 'Pera'];

// carros.forEach.call(frutas, (carro) => { // Estamos substituindo o this de carros para o this de frutas
//   console.log(carro);
// });


// function Dom(selector) {
//   this.element = document.querySelector(selector);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');


// const nomes = ['Luiz', 'Fernando', 'Marcos'];

// Array.prototype.pop.call(nomes);

// const arrayLike = {
//   0: 'Item 1',
//   1: 'Item 2',
//   2: 'Item 2',
//   length: 3,
// }

// console.log(arrayLike);


// const outraLi = document.querySelectorAll('li');
// const arrayLi = Array.from(outraLi);

// const filtro = arrayLi.filter.call(outraLi, (item) => {
//   return item.classList.contains('ativar')
// });

// console.log(filtro);

// // apply(this [arg1, agr2, ....]): Funcioa como o call, a única diferença é que os argumentos
// // da função são passados através de uma array

// const numeros = [3, 4, 6, 77, 76, 12];
// Math.max.apply(null, numeros);
// Math.max.call(null, 3, 4, 5, 6, 7, 20);


// //bind(this, arg1, arg2, ...) Diferente de call e apply, não irá executar a funnçao mas sim retornar a mesma com o novo contexo de this

// const $ = document.querySelectorAll.bind(document);
// console.log($('li'));



// ########### Exercícios ###########

// Retorne a soma total de caracteres dis parágrafos acima utilizando  reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);
console.log(paragrafos);

// Crie uma função que retorne novos elementos html, com os seguintes parâmentros, tag, classes e conteudo
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : '';
  conteudo ? elemento.innerHTML = conteudo : '';
  return elemento;
}

console.log(criarElemento('h1', 'ativo', 'Olá, Mundo!'));


//Crie uma nova função utilizando a anterior como base, essa nova função deverá sempre criar h1 com a classe titulo. 
// porem o conteudo deve continuaar dinamico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo') 
console.log(h1Titulo('Cursos de JS'));