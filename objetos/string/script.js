// const comida = 'Pizza';
// const agua = new String('Agua');

// console.log(comida.length);
// console.log(comida[0]);

// const frase = 'A melhor pizza da cidade';
// console.log(frase[frase.length - 1]);

// console.log(frase.charAt(20));



// const frase1 = 'A melhor linguagem é';
// const linguagem = 'javascript';

// const fraseFinal = frase1.concat(linguagem)
// console.log(fraseFinal);


// const fruta = 'Banana';

// const listaFrutas = 'Melância, Uva, Laranja, Banana';

// console.log(listaFrutas.includes(fruta));

// console.log(fruta.startsWith('Bana'));
// console.log(fruta.endsWith('na'));


// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0, 3)); // Dep
// console.log(transacao2.slice(0, 3)); // Dep
// console.log(transacao3.slice(0, 3)); // Tax


// console.log(transacao1.slice(12)); // cliente
// console.log(transacao1.slice(-4)); // ente
// console.log(transacao1.slice(3, 6)); // ósi


// const instrumento = 'Guiterra';

// console.log(instrumento.indexOf('r')); // index 4
// console.log(instrumento.lastIndexOf('r')); // retorna o index do ultimo carasctere, caso tenha mais de um caractere igual, guitarra tem dois r, então taretorna o ultimo r



// const preco = 'R$ 99,00';
// console.log(preco.padStart(20, 'k'));
// console.log(preco.padEnd(20, 'k'));

// const listaPrecos = ['R$ 99,99', 'R$ 50,00', 'R$ 100,00'];
// listaPrecos.forEach((item) => {
//     console.log(item.padStart(20, '-'));
// });



// const frase2 = 'Tu';
// console.log(frase2.repeat(5));


// let listaRoupas = 'Ceucas Calcinhas Vestidos Shorts';
// listaRoupas = listaRoupas.replace(/[ ]/g, ', ');
// console.log(listaRoupas);


// const listaArray = listaRoupas.split(', ');
// console.log(listaArray);



// utilizando foreach no array abaixo, some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 49',
    },
];


let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$', '');
    if (item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo;
    } else if (item.descricao.slice(0, 4) === 'Rece') {
        recebimentoTotal += numeroLimpo;
    }
});

console.log(taxaTotal);
console.log(recebimentoTotal);



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';');


// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Contato</span></li>
                <li><span>Produtos</span></li>
            </ul>`;

html = html.split('span').join('a');
console.log(html);

// Retorne o ultimo caractere da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length -1]); // ou slice(-1);


// Retorne o total de taxas
const transacoes2 = ['Taxa do banco', '     TAXA DO PÃO', ' taxa do mercado', 'depósito bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) => {
    const stringMaiusculo = item.toLocaleUpperCase().trim();
    if(stringMaiusculo.includes('TAXA')) {
        console.log(stringMaiusculo);
        taxasTotal++;
    }
});
console.log(taxasTotal);