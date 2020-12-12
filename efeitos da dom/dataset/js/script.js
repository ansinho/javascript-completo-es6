const div = document.querySelector('[data-cor="vermelho"]');

console.log(div.dataset);
console.log(div.dataset.altura);

div.dataset.oi = "oi"; // atribui

delete div.dataset.cor; // deleta
console.log(div.dataset);

// O dataset não aceita traço nos atributos. Se for data-anima-scrol, ele converte para animScrol.
// Exemplo: 
console.log(div.dataset); //data-anima-scrol-set="left" vai para animaScrolSet: "left"