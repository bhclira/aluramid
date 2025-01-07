
function tocaSom(seletorAudio) { 
    const elemento = document.querySelector(seletorAudio);
    if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        elemento.play();
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (const tecla of listaDeTeclas) {
    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');    
        }    
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

/* Documentação da Função tocaSom()

1. Busque o elemento e dê play;
2. Verifice se o elemento está nulo. Caso true: apresentando um problema para o usuário, caso nulo seja o seu retorno ou se o seletor for inválido;
3. atribua a uma variável elemento <document.querySelector(seletorAudio)> a seleção que vem como parâmetro;
4. elemento.localName === 'audio') é uma propriedade chamada .localName do objeto <elemento>
onde esse elemento guarda a info do objeto <elemento>;
*/