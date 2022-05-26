/*

Considere o seguinte código JavaScript:

var exemplo = "A";
outro = "A";
function minhaFuncao( ){
var exemplo = "B";
return exemplo;
}
function minhaFuncao2( ){
outro = "B";
return outro;
}
console.log(exemplo);
console.log(minhaFuncao( ));
console.log(outro);
console.log(minhaFuncao2);
console.log(outro);

Ao final da execução, quais valores serão impressos?

*/

var exemplo = "A";
outro = "A";
function minhaFuncao() {
  var exemplo = "B";
  return exemplo;
}
function minhaFuncao2() {
  outro = "B";
  return outro;
}
console.log(exemplo); // A
console.log(minhaFuncao()); // B
console.log(outro); // A
console.log(minhaFuncao2()); // B
console.log(outro); // B


//Ao declarar var exemplo em escopo "global", ele nunca é alterado. -> A

//Na função minhaFuncao() é criado uma nova variável sempre que chamada, então ela não muda a var exemplo. -> B

//console.log(outro) sem ser alterado pela função minhaFuncao2() ainda. -> A

//minhaFuncao2() altera o valor global da var outro, o que faz o valor do proximo console mudar -> B

//o valor de outro foi trocado pela função minhaFuncao2() -> B