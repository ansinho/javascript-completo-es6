// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// const anderson = new Pessoa('Anderson B. David', 23);

// Pessoa.prototype.peso = 0;

// Pessoa.prototype.andar = function() {
//     return this.nome + ' Andou'
// }

// // console.log(Pessoa.prototype);
// // console.log(anderson.prototype);

// const pais = 'Brasil';
// const cidade = new String('Rio');

// const animais = ['Gato', 'Cachorro', 'Sapo'];


// const lista = document.querySelectorAll('li');

// const listaArray = Array.from(lista);


// Crie uma função construtura de Pessoas, deve contar nome, sobrenome e idade
// Crie um método no protótipo que retonr o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.retornaNome = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const anderson = new Pessoa('Anderson', 'Barbosa', 23);
anderson.retornaNome();


// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
Object.getOwnPropertyNames(Node.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document);


// Liste os construtores dos dados abaixo
const li = document.querySelectorAll('li');

// li; HTMLLIElement
// li.click; Function
// li.innerText; String
// li.value; Number
// li.hidden; Boolean
// li.offsetLeft; Number
// li.click(); undefined


// Qual o constructor do dado abaixo:
li.hidden.constructor.name;