document.addEventListener('DOMContentLoaded', function() {
    const janela = document.getElementById('janela');
    const statusText = document.getElementById('status');

    janela.addEventListener('mouseover', function() {
        janela.src = 'JanelAberta.png';
        statusText.innerText = 'Janela Aberta';
    });

    janela.addEventListener('mouseout', function() {
        janela.src = 'JanelaFechada.png';
        statusText.innerText = 'Janela Fechada';
    });

    janela.addEventListener('click', function() {
        janela.src = 'janela-quebrada.png';
        statusText.innerText = 'Janela Quebrada';
    });
});
