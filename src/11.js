/*
Imagine o seguinte cenário: Marcelo lhe deve um dinheiro e promete pagar em parcelas mensais de R$ 70; com o intuito de prever qual seria o valor devido após o decorrer de 12 meses, você resolve escrever algumas linhas de código (JavaScript). Levando em consideração que o valor devido por Marcelo era de R$ 1400, qual seria o total devido após a execução do trecho a seguir?

let total_divida = 1400;
function atualizar_divida(valor_recebido){
total_divida -= valor_recebido;
return total_divida;
}
for(var i=0;i<12;i++){
atualizar_divida(70);
}
 */

let total_divida = 1400;

function atualizar_divida(valor_recebido) {
  total_divida -= valor_recebido;
  return total_divida;
}

for (var i = 0; i < 12; i++) {
  atualizar_divida(70);
}

// O loop empura 12 vezes a função que subtrai 70 de 1400 -> 70*12 - 1400 = 560. Simulando o que o Marcelo me pagou.

console.log(total_divida); // 560