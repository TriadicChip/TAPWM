function verificarTriangulo() {
    var a = parseFloat(document.getElementById('a').value.replace(',', '.'));
    var b = parseFloat(document.getElementById('b').value.replace(',', '.'));
    var c = parseFloat(document.getElementById('c').value.replace(',', '.'));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, insira números válidos nos três campos.");
        return;
    }

    if (Math.abs(b - c) < a && a < (b + c) &&
        Math.abs(a - c) < b && b < (a + c) &&
        Math.abs(a - b) < c && c < (a + b)) {

        var tipoTriangulo = "";

        if (a === b && b === c) {
            tipoTriangulo = "Equilátero";
        } else if (a === b || b === c || a === c) {
            tipoTriangulo = "Isósceles";
        } else {
            tipoTriangulo = "Escaleno";
        }

        var resultado = "Os valores formam um triângulo " + tipoTriangulo + ".";

        document.getElementById('resultado').innerHTML = resultado;
    } else {
        var resultado = "Os valores não formam um triângulo válido.";
        document.getElementById('resultado').innerHTML = resultado;
    }
}
