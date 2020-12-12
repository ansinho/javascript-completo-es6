// const carro = {
//     marca: 'Marca',
//     preco: 0
// }

// const honda = carro;
// honda.marca = 'honda',
// honda.preco = 40000


// ################ função construtura ################
// function Carro(attrMarca, attrCor, attrPreco) {
//     this.marca = attrMarca;
//     this.cor = attrCor;
//     this.preco = attrPreco;
// }

// const honda = new Carro('honda', 'preto', 49000);
// const fiat = new Carro('Fiat', 'Branco', 29000);



// function Carro2(marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
// }

// const gol = new Carro2('Gol', 10000);


// function Dom(seletor, classe) {
//     this.element = function() {
//         return document.querySelector(seletor);
//     }
//     this.ativar = function() {
//         this.element().classList.add(classe);
//     }
// }

// const ul = new Dom('ul', 'ativo');
// const li = new Dom('li', 'ativo');
// const lastLi = new Dom('li:last-child', 'teste');


// ######## exercicios ###########
// Transforme o objeto abaixo em uma Constructor Function   
// const pessoa = {
//     nome: 'Nome da Pessoa',
//     idade: 0,
//     andar() {
//         console.log(this.nome + ' andou');
//     }
// }

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        return this.nome + ' andou';
    }
}
// Crie 3 pessoas, Jõao - 20 anos, Maria - 25 anos, Bruno - 15 anos
const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 25);


//Crie uma função construtura para manipular listas de elementos do dom. Deve conter as seguintes
//propriedades e metodos: addClass(classe), adiciona a classe a todos os elementos
//removeClass(classe), remove a classe a todos os elementos

function Dom(seletor, classe) {
    this.elements = document.querySelectorAll(seletor);
    this.addClass = function () {
        this.elements.forEach((element) => {
            element.classList.add(classe);
        });
    }
    this.removeClass = function () {
        this.elements.forEach((element) => {
            element.classList.remove(classe);
        });
    }
}

const li = new Dom('li', 'ativo');

const ul = new Dom('ul', 'ativar-ul');
ul.addClass();