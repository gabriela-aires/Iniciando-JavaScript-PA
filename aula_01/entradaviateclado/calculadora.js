var num1 = parseInt(prompt('Digite o num1'));
var num2 = parseInt(prompt('Digite o num2'));

var soma = num1+num2;
var subtração = num1-num2;
var divisão = num1/num2;
var multiplicação = num1*num2;


document.getElementById('num1').innerHTML = num1;
document.getElementById('num2').innerHTML = num2;
document.getElementById('soma').innerHTML = soma;
document.getElementById('subtração').innerHTML = subtracao;
document.getElementById('divisão').innerHTML = divisao;
document.getElementById('multiplicação').innerHTML = multiplicacao;


//console.log(soma);
