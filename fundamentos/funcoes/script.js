// function ladoQuadrado(lado) {
//     return lado * lado;
// }

// console.log(ladoQuadrado(5));


// function imc(peso, altura) {
//     const imc = peso / (altura * altura);
//     return imc;
// }

// console.log(imc(56, 1.73));


// function corFavorita(cor) {
//     if (cor === "azul") {
//         return "Você gosta do céu!";
//     } else if (cor === "verde") {
//         return "Você gost da floresta!";
//     } else {
//         return "Você não gosta das cores!";
//     }
// }

// console.log(corFavorita())

// function mostraConsole() {
//     console.log('Clicando!');
// }

// addEventListener('click', mostraConsole);



// function terceiraIdade(idade) {
//     if (typeof idade !== 'number') {
//         return 'Informe sua idade';
//     } else if (idade >= 60) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(terceiraIdade('biscoito'));


// function paisesVisitados(paisesQueVisitei) {
//     const totalDePaises = 193;
//     return `Faltam visitar ${totalDePaises - paisesQueVisitei} países`;
// }

// console.log(paisesVisitados(10));


// let profissao = 'Desenvolvedor';
// function dados() {
//     let nome = 'Anderson Barbosa';
//     let idade = 23;

//     function outrosDados() {
//         let endereco = 'Rua 120 muito oida 04';
//         let corPreferida = 'preto';
//         return `${nome} trabalha de ${profissao}, tem ${idade} anos, mora na ${endereco} e gosta da cor ${corPreferida}`;
//     }
//     return outrosDados()
// }

// console.log(dados());
// outrosDados()



//verificandos se um valor é Truthy
function verificarValor(valor) {
    return !!valor
}

console.log(verificarValor(-1));


function perimetro(lado) {
    return lado * 4;
}

console.log(perimetro(3))


function nomeSobrenome(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeSobrenome('Anderson', 'Barbosa'));


function isPar(numero) {
    if (numero % 2 == 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}

console.log(isPar(3.45));


function tipoDeDado(dado) {
    return `Esse dado é: ${typeof dado}`
}

console.log(tipoDeDado('ansin'));


addEventListener('click', () => {
    console.log('Anderson Barbosa David');
})

let totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))