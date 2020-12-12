// const array = [
//   'Olá, Mundo!', function (nome) { return nome; }, { idade: 23 }, ['banana', 'manga']
// ];
// console.log(array[3][1]);
// console.log(array[2].idade);

// array[3][2] = 'goiaba'
// console.log(array[3][2]);

// // Array.from() é utilizada para tranformar array-like em array
// const li = document.querySelectorAll('li');
// console.log(li);
// const liArray = Array.from(li);
// console.log(liArray);

// const carros = {
//   0: 'Fiat',
//   1: 'Honda',
//   2: 'Jeep',
//   length: 3
// }

// const carrosArray = Array.from(carros);
// console.log(carrosArray);


// // isArray: verifica se o valor passado é array
// console.log(Array.isArray(li));
// console.log(Array.isArray(liArray));


// // Length
// const frutas = ['banana', 'pera', ['maçã', 'uva']];
// console.log(frutas[2][0].length);


// // sort(): coloca em ordem afalbetica
// const nomes = ['Anderson', 'Raul', 'Yago', 'Neander'];
// nomes.sort()
// console.log(nomes);

// // unshift(): adiciona elemento ao inicio da array e retorna o length da mesma.
// // push(): adiciona elesmentos ao final da array e retorna o length da mesma.
// const marcasDeCarros = ['Ford', 'Kia', 'VW'];

// console.log(marcasDeCarros);
// marcasDeCarros.unshift('Honda', 'Fiat'); // 5
// console.log(marcasDeCarros);

// marcasDeCarros.push('Ferrari'); // 6
// console.log(marcasDeCarros);

// // shift(): remove o primeiro elemento da array e retorna o mesmo
// // pop(): remove o ultimo elemento da array e retorna o mesm.
// marcasDeCarros.shift();
// console.log(marcasDeCarros);

// marcasDeCarros.pop(); // honda
// console.log(marcasDeCarros); // Ferrari

// // Reverse: reverte a ordem do array
// marcasDeCarros.reverse();
// console.log(marcasDeCarros);

// // Splice(index, remove, item1, item2,....): Adiciona valoresa array a partir do index. Remove a quantidade de itens que for passada no segundo parametro
//  const moveis = [ 'mesa', 'cadeira', 'sofá', 'estante'];
//  moveis.splice(1,0, 'armario', 'escrivaninha');
//  console.log(moveis);

//  moveis.splice(3,1, 'raque');
//  console.log(moveis);

//  //copyWithin(alvo, inicio, final): faz um copioa do alvo a partir do item inicio ate o item final
//  console.log(['cabola', 'alho', 'pimenta', 'assafrão', 'paprica'].copyWithin(2, 0, 2));

//  //fill(valor, inicio, final): preenche a array com o valor, do inicio até o fim.
//  console.log(['cabola', 'alho', 'pimenta', 'assafrão', 'paprica'].fill('cebola', 2, 5));


//  // Os métodos de acesso não modificam a array origina, apenas retornam uma array modificada.
//  // Métodos de acesso .concat(): Irá concatenar a array com o valor passado
//  const transporte1 = ['Barco', 'Avião'];
//  const transporte2 = ['Carro', 'Moto'];
//  const transportes = transporte1.concat(transporte2);
//  console.log(transportes);
//  const maisTransportes = [].concat(transporte1, transporte2, 'Van');
//  console.log(maisTransportes);

//  //includes(valor): verifica se a array possui o valor e retorna true ou false.
//  //indexOf(valor): verifica se a array possui o valor e retrna o index do primeiro valor na array.
//  //lastIndexOf(valor): retorna o index do ultimo.
//  linguagens = ['css', 'js', 'python', 'php', 'java', 'ruby', 'js'];
//  console.log(linguagens.includes('java'));
// console.log(linguagens.indexOf('python'));
// console.log(linguagens.indexOf('c#')); // retorna -1 quando não encontra o valor
// console.log(linguagens.lastIndexOf('js'));

// // join(separador): juntatodos os valores da array e retorna uma string.
// let htmlString = '<p>Olá, mundo bom</p>';
//  htmlString = htmlString.split('p');
// htmlString = htmlString.join('span');
//  console.log(htmlString);

//  //slice(inicio, final): retorna os itens da array começando pelo inicio e indo até o valor final
//  // é muito usado para clonar array
//  console.log(linguagens.slice(1, 4));


// ####### Exercicios ########
// remova o primeiro valor de comidas e coloque numa variavel
// remova o ultimo valor de comidas e coloque numa variavel
// adicione 'Arroz' no final do array
// adicione ''Peixe' e 'Batata' no inicio do array
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');
const primeiraValor = comidas.shift();
const ultimaValor = comidas.pop();
console.log(primeiraValor);
console.log(ultimaValor);
console.log(comidas)


// Arrume os estrudantes em ordem alfabetica
// inverta a ordem dos estudantes
// Veifique se joana faz parte dos estudantes
// verifica se Juliana faz parte dos esttantes
const estudantes = ['marcio', 'Branda', 'Joana', 'Klebe', 'Julia'];
estudantes.sort();
console.log(estudantes);
estudantes.reverse();
console.log(estudantes);
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));


//Substitua section po ul e div com li utilizando split e join
let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
              </section>`
html = html.split('section');
html = html.join('ul')
html = html.split('div');
html = html.join('li')
console.log(html);

// remova o ultimo carro, mas antes de remover salve a array original em uma variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosCopia = carros.slice(); // copia da array original
carros.pop(); // removendo o ultimo valor da array
console.log(carrosCopia);
console.log(carros)