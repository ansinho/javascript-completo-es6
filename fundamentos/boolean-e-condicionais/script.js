let minhaIdade = 23;
let idadeDoMeuPrimo = 23;

if (minhaIdade > idadeDoMeuPrimo) {
    console.log("Sou mais velho que meu primo!");
} else if (minhaIdade === idadeDoMeuPrimo) {
    console.log("Meu primo e eu temos a mesma idade");
} else {
    console.log("Meu primo é mais velho que eu!");
}


let expressao = (5 - 2) && (5 - ' ') && (5 - 3); // retorna o ultimo valor verdadeiro, se todos forem verdadeiros
if (expressao) {
    console.log(expressao)
}



let brasil = 207;
let china = 1340;

if(brasil > china) {
    console.log("Brasil tem mais habitantes!");
} else{
    console.log("China tem mais habitantes");
}



if (('Gato' === 'gato') && (5 > 2)) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}


if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('falso');
}