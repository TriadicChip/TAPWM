function verificarSubconjunto() {
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;

    if (!palavra1 || !palavra2) {
        document.getElementById("resultado").textContent = "Erro: uma ou ambas as palavras estão vazias ou undefined.";
        return;
    }

    if (palavra1.includes(palavra2)) {
        document.getElementById("resultado").textContent = "É um subconjunto";
    } else {
        document.getElementById("resultado").textContent = "Não é um subconjunto";
    }
}
