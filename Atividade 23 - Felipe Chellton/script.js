function procura() {
    var inputText = document.getElementById('inputText').value.toLowerCase();
    var countA = 0;

    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i] === 'a') {
            countA++;
        }
    }

    document.getElementById('result').innerText = 'Número de letras A encontradas: ' + countA;
}
