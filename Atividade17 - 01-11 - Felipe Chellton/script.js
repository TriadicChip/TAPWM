function validarForm() {
    var form = document.pesquisaForm;
    var nome = form.elements['nome'].value;
    var email = form.elements['email'].value;
    var comentario = form.elements['comentario'].value;
  
    if (nome.length < 10 || email.indexOf('@') === -1 || comentario.length < 20) {
      alert('Por favor, preencha todos os campos corretamente.');
      return false;
    }
  
    var primeiraVez = form.elements['primeiraVez'].value;
    var resultado = document.getElementById('resultado');
  
    if (primeiraVez === 'Sim') {
      resultado.innerText = 'Volte sempre a está página!';
    } else {
      resultado.innerText = 'Que bom que você voltou a visitar esta página!';
    }
  
    return false;
  }
  