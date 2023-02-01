const guessElement = document.querySelector('#guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const guess = e.results[0][0].transcript;
    showGuessOnScreen(guess);
    guessNumberValidation(guess);
}

function showGuessOnScreen (guess) {
    guessElement.innerHTML = `
        <div>You said:</div>
        <span class="box">${guess}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());