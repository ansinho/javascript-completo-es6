// let pessoa = {
//     nome: 'Anderson',
//     idade: 23,
//     possuiFaculdade: true
// }

// console.log(pessoa)


// let quadrado = {
//     lados: 4,
//     area(lado) {
//         return lado * lado;
//     },
//     perimentro(lado) {
//         return this.lados * lado;
//     }
// }

// console.log(quadrado.lados);
// console.log(quadrado.area(5));
// console.log(quadrado.perimentro(5));


// let pi = Math.PI
// console.table(pi)


// let menu = {
//     width: 800,
//     height: 50,
//     backgroundColor: '#84E',
//     metadeHeigth() {
//         return this.height / 2;
//     }
// }

// menu.backgroundColor = '#8Ac'

// menu.color = '#FF00FF';
// console.log(menu.color);

// let bg = menu.backgroundColor;
// console.log(bg);


const pessoa = {
    nome: 'Anderson',
    sobrenome: 'Barbosa',
    idade: 23,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto())


let carro = {
    preco: 10000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000;
console.log(carro.preco);


let homemAVista = true;
let cachorro = {
    raca: 'labrador',
    cor: 'Preto',
    idade: 10,
    latir() {
        if(homemAVista) {
            return 'latindo...';
        } else {
            return 'cachorro de boa..';
        }
    }
}
console.log(cachorro.raca, cachorro.cor, cachorro.idade)
console.log(cachorro.latir());