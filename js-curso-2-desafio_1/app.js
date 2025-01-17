let titulo=document.querySelector('h1');
titulo.innerHTML="Hora do Desafio."


function clickButton(){
    console.log("o botao console foi clicado")
}

function alertaButton(){
    alert('Eu amo JS')
}

function promptButton(){
    let cidade=prompt('Digite uma cidade');

    alert(`Estive em ${cidade} e lembrei de você. `)
}

function somaButton(){
    let num1 =parseInt( prompt('Digite um numero'))
    let num2=parseInt(prompt('Digite mais um numero'))

    let resultado=num1+num2;

    alert('a soma dos numeros digitados é '+resultado)
}