/*Operacoes.html: Receba dois números e calcule e mostre:
 a soma dos dois;
a subtração do primeiro pelo segundo;
o produto dos dois;
a divisão do primeiro pelo segundo;
o resto da divisão do primeiro pelo segundo.*/

var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

var soma = numero1 + numero2;
alert("Soma dos números: " + soma);

var subtracao = numero1 - numero2;
alert("Subtração dos números: " + subtracao);

var produto = numero1 * numero2;
alert("Produto dos números: " + produto);

var divisao = numero1 / numero2;
alert("Divisão dos números: " + divisao);

var resto = numero1 % numero2;
alert("Resto dos números: " + resto);