/*
Analise o script JS a seguir:
 
<script>
function xpto ( ) {
let n = 0;
return {next:
function ( )
{
if (n < 10) {
n += 2;
return {value:n/2, done:false}}
else {
return {value: -1, done: true}}
}
}
}
O resultado da execução desse código é:

*/
function xpto() {
  let n = 0;
  return {
    next: function () {
      if (n < 10) {
        n += 2;
        return { value: n / 2, done: false };
      } else {
        return { value: -1, done: true };
      }
    },
  };
}
console.log(xpto().next().value);

/* Apesar do console.log não ser 1/2/3/4/5/, a função ao somar de 2 em 2 e ao dividir por dois nunca será
maior que quatro, mesmo que em repetição, quando chegar em 4 ela divide por 2, o que é igual a dois 

Isso me levou a escolher 1/2/3/4/5/

não tendo sentido começar com 0, por somar 2 sempre, e nem ser negativo pois o else nunca será ativo e não ser ao contrário, pois começa de 0 e soma 2 em 2.
*/
