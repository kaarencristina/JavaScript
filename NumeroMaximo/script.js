/*escreva uma funcao que usa 2 numeros e retorne o maior entre eles*/

let valor1=10;
let valor2=40;


let maior=max(valor1,valor2)
console.log(maior)


function max(num1,num2){
    if(num1>num2){
        return num1;
    } else 
    return num2;


}