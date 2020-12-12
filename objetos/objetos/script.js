const pessoa = {
  nome: "Anderson"
}
console.log(pessoa.nome);


// Object.create
const carro = {
  marca: 'Honda',
  rodas: 4,
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinhar() {
    return this.marca + ' buzinou';
  }
}

const ferrari = Object.create(carro);
ferrari.marca = 'Ferrari';

// Object.assign()
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  }
}

const moto = {

}

const carro1 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);

// Object.defineProperties: adiciona ao alvo novas propriedades. A diferença aqui é a possibilidadede serem definidas
// as carascterísticas dessas propriedades.
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudançaa de valor
    writable: false, // impede mudança de valor
    enumerable: true, // torna enumeravel
  },
});
moto.rodas = 5;
console.log(moto);


// FALTANDO MAIS CONTEUDO....

// ######### EXERCICIOS #########

// Crie um função que verifique o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado)
}

console.log(verificarDado("oi"));

// Crie umobjeto quadrado com a prorpiedade lados e torne ele imutavel
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
});
console.log(quadrado);

// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333"
}

Object.freeze(configuracao); // congela, n muda nem deleta
console.log(configuracao);

// Liste o nome de todas as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));