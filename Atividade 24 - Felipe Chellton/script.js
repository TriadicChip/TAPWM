function dividir() {
    var numA = parseFloat(document.getElementById('numA').value);
    var numB = parseFloat(document.getElementById('numB').value);

    if (isNaN(numA) || isNaN(numB)) {
        console.log('Divisão deu NaN');
        document.getElementById('result').innerText = 'Divisão deu NaN';
    } else if (!isFinite(numA / numB)) {
        console.log('Divisão de Infinity');
        document.getElementById('result').innerText = 'Divisão de Infinity';
    } else {
        var resultado = numA / numB;
        console.log('Divisão: ' + resultado);
        document.getElementById('result').innerText = 'Divisão: ' + resultado;
    }
}
