const keysList = document.querySelectorAll('.tecla');

for (let i = 0; i < keysList.length; i++) {
    const key = keysList[i];
    const instrument = key.classList[1];
    const keyAudioId = `#som_${instrument}`;
    
    key.onclick = function () {
        playSound(keyAudioId);
    }

    key.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa')
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa')
    }
}

function playSound (keyAudioId) {
    const element = document.querySelector(keyAudioId);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Áudio não encontrado!')
    }
}