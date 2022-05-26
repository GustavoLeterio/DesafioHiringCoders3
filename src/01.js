/*
Considerando o código JavaScript a seguir, qual será o output do alerta?
let txt = "";
function funcao(value, index, array) {
    if (index % 2 == 0) {txt += value};
}
function xpto (x) {
        x.forEach(funcao);
        return txt;
}
alert (xpto([0, 1, 1, 2, 3, 5]));
*/

let txt = "";
function funcao(value, index, array) {
  if (index % 2 == 0) {
    txt += value;
  }
}
function xpto(x) {
  x.forEach(funcao);
  return txt;
}
console.log(xpto([0, 1, 1, 2, 3, 5]));

//Resposta correta 013
