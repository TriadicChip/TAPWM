function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    var peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));

    if (altura && peso) {
        var imc = peso / (altura * altura);
        var classificacao = "";

        if (imc < 18.5) {
            classificacao = "Magreza";
        } else if (imc < 24.9) {
            classificacao = "Normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc < 39.9) {
            classificacao = "Obesidade";
        } else {
            classificacao = "Obesidade Grave";
        }

        var resultado = "IMC: " + imc.toFixed(2) + "<br>Classificação: " + classificacao;

        document.getElementById('resultado').innerHTML = resultado;
    } else {
        alert("Por favor, preencha os campos corretamente.");
    }
}
