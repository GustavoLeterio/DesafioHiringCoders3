/*
Considere o seguinte código JavaScript:

let o = {one:1,two:2,three:3};
for(let p in o) console.log(p);

Ao final da execução, quais valores serão impressos?
*/

let o = {one:1,two:2,three:3};

for(let p in o) console.log(p);

//one
//two
//three

//Ao pegar apenas let o, temos apenas o nome dos atributos contidos no objeto.