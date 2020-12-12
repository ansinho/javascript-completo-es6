// // forEach(itemAtual, index, array)
// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((carro, index, array) => {
//   console.log(array[index] = 'Carro ' + carro);
// });

// const li = document.querySelectorAll('li');
// li.forEach((item, index) => {
//   item.classList.add('ativo' + index);
// });

// // map(callback(itemAtual, index, array)) Funciona da mesma forma do forEach, porém ao invez
// //de retornar undefined, retorna uma nova array com vaores atualizados de acordo com cada retorno
// const novaArray = carros.map((carro, index, array) => {
//   return carro.toUpperCase();
// });

// console.log(novaArray);


// const numeros = [2, 13, 76, 98];
// const numerosX2 = numeros.map(n => n * 2);
// console.log(numerosX2);

// const aulas = [
//   {
//     nome: 'HTML1',
//     min: 15
//   },
//   {
//     nome: 'HTML2',
//     min: 10
//   },
//   {
//     nome: 'CSS',
//     min: 15
//   },
//   {
//     nome: 'Javascript',
//     min: 20
//   }
// ];

// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas);


// //Reduce(callback(acumulador, valorAtual, index, array, valorInicial))
// const aulas2 = [10, 20, 30];
// const total1 = aulas2.reduce((acumulador, atual) => {
//   return acumulador + atual;
// });

// const total2 = aulas2.reduce((acumulador, atual,) => {
//   return acumulador + atual;
// }, 100);

// console.log(total1);
// console.log(total2);


// const numeroMaior = [3, 5, 7, 30, 2, 5];

// const maiorNumero = numeroMaior.reduce((anterior, atual) => {
//   if (anterior > atual) {
//     return anterior;
//   } else {
//     return atual;
//   }
// });

// console.log(maiorNumero);


// const aulasRemotas = [
//   {
//     nome: 'HTML1',
//     min: 15
//   },
//   {
//     nome: 'HTML2',
//     min: 10
//   },
//   {
//     nome: 'CSS',
//     min: 15
//   },
//   {
//     nome: 'Javascript',
//     min: 20
//   }
// ];

// const listaAulas = aulasRemotas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   return acumulador;
// }, {});

// console.log(listaAulas);


// // some(): se pelo menos um return da interação for thuthy, ele retorna true
// const roupas = ['short', 'calça', 'camisa'];
// const temCalca = roupas.some((fruta) => {
//   return fruta === 'calça';
// });

// console.log(temCalca);

// function maiorQue100(numero) {
//   return numero > 100;
// }

// const numeros5 = [0, 10, 34, 459, 2];
// const temMaior = numeros5.some(maiorQue100);
// console.log(temMaior);

// // every(): se todos os returns das interações forem truthy, o métodos irá retornar true. Se pelo menos um fot salsy, ele ira retornar false.
// const series = ['The boys', 'The office', ''];
// const arraySeries = series.every((serie) => {
//   console.log(serie);
//   return serie;
// });
// console.log(arraySeries);

// const numerosEvery = [3, 4, 6, 3, 29];
// const maiorQue3 = numerosEvery.every((numero) => {
//   return numero > 3;
// });

// console.log(maiorQue3);


// //find():  retorna o valor atual da primeira interação que retornar um valor truthy.
// // findIndex() retorna o index do valor na array;

// const alunos = ['Anderson', 'Raul', 'Yan', 'Neander'];
// const buscaAluno = alunos.findIndex((aluno) => {
//   return aluno === 'Yan';
// })

// console.log(buscaAluno);


// // filter() retorna uma array com a lista de valores que durante a sua interação retornaram um valor truthy
// const professores = ['Leomar', 'João P', 'Evangelista', 'Hedson'];
// const arrayProfessores = professores.filter((professor) => {
//   return professor;
// });

// console.log(arrayProfessores);


// const numerosPares = [4, 6, 10, 114];
// const buscaNumerosPares = numerosPares.filter((numero) => {
//   return numero > 6;
// });

// console.log(buscaNumerosPares);


// ########## Exercícios ########## 
/*
 Selecionecada curso e retorne uma array com objetos contendo o título,
 descrição, aulas e horas de cada curso
 */
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos); // passando o array-like para um array

const objetoCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
});

console.log(objetoCurso);


// Retorne uma lista com os números maiores que 100
const numeros = [10, 45, 599, 30, 247, 29, 200];
const numerosMaioresQue100 = numeros.filter((numero) => {
  return numero > 100;
});

console.log(numerosMaioresQue100);


// Verifique se Baixo faz parte da ista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Teclado', 'bateria'];
const temBaixo = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
});

console.log(temBaixo);

// Retorne o valor total das compras

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,99'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  }
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');

  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);

