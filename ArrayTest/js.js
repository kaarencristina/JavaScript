/*1. No array abaixo, qyual o numero que pega a ferrari?*/

let carros=['bmw','ferrari','mercedes'];
let x=1;
console.log('1. '+carros[x]);


/*2. Troque ferrari por Audi */

console.log(carros);
carros[1]='audi';
console.log('2. lista com audi '+carros);

/*3. Adicione o Volvo a lista*/


carros.push('volvo');
console.log('3. lista com volvo '+carros)

/*4. exiba quantos itens tem no array*/

console.log(`tem ${carros.length} itens no array`);

console.log(carros)