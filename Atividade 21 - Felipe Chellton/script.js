function criarObjeto() {
    var nome = document.getElementById('name').value;
    var dataNascimento = document.getElementById('dob').value;
    var matriculado = document.querySelector('input[name="enrolled"]:checked');
    var endereco = document.getElementById('address').value;

    if (nome && dataNascimento && matriculado && endereco) {
        var inscrito = {
            Nome: nome,
            "Data de Nascimento": dataNascimento,
            Matriculado: matriculado.value === 'sim',
            Endereço: endereco
        };

        var mensagem = `${inscrito.Nome} – ${inscrito["Data de Nascimento"]} – ${inscrito.Endereço} – `;
        mensagem += inscrito.Matriculado ? 'Está inscrito' : 'Não está inscrito porque não atende aos requisitos';

        alert(mensagem);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
