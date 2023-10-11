function calcular() {
    var numeros = Array.from(prompt("Digite três números separados por vírgula (ex: 1,2,3):").split(',')).map(Number);
    var soma = numeros.reduce((acc, curr) => acc + curr);
    var quadrado1 = numeros[0] ** 2;
    var quadrado2 = numeros[1] ** 2;

    var resultado = `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadrado1} e o quadrado do segundo é: ${quadrado2}`;

    document.getElementById("resultado").textContent = resultado;

    
    
}

function Verificacao() {
    window.location.href = 'AtividadeExtra1.2.html';
}
