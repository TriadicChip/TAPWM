function jogar(escolhaUsuario) {
    const jogadas = ['Snivy', 'ThePig', 'Oshawott'];
    const escolhaComputador = jogadas[Math.floor(Math.random() * 3)];
    const resultadoElement = document.getElementById('resultado');
    const computadorElement = document.getElementById('computador');
    const usuarioElement = document.getElementById('usuario');
  
    const imagens = {
      Snivy: 'Snivy.png',
      ThePig: 'ThePig.png',
      Oshawott: 'Oshawott.png'
    }
  
    const resultado = Jogar(escolhaUsuario, escolhaComputador);
  
    computadorElement.querySelector('img').src = imagens[escolhaComputador];
    usuarioElement.querySelector('img').src = imagens[escolhaUsuario];
  
    resultadoElement.innerText = resultado;
  }
  
  function Jogar(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
      return 'Empate';
    } else if (
      (escolhaUsuario === 'Snivy' && escolhaComputador === 'Oshawott') ||
      (escolhaUsuario === 'Oshawott' && escolhaComputador === 'ThePig') ||
      (escolhaUsuario === 'ThePig' && escolhaComputador === 'Snivy')
    ) {
      return 'Você ganhou!';
    } else {
      return 'Você perdeu!';
    }
  }
  