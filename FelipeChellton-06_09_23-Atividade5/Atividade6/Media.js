/*Leia o nome e as três notas de um aluno.
Calcule e mostre a média aritmética. (parseFloat converte string para ponto flutuante)*/ 


var nomeAluno = prompt("Digite o nome do aluno:");

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

alert("Aluno: " + nomeAluno + "\nMédia: " + media.toFixed(2));