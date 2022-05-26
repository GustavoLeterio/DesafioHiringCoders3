/*
Considere o fragmento de programa JavaScript abaixo.

var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);

A variável resultado vai conter:
*/

var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);

// Utilizando a expressão regular junto com a função match(pattern) para poder encontrar e separar os valores em um array.

console.log(resultado) // [ '1', '2', '3', '4', '8', '9' ]