function guessNumberValidation(guess) {
    const number = +guess;

    if (Number.isNaN(number)) {
        guessElement.innerHTML += `<div>Invalid value!</div>`;
        if (guess.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h2>GAME OVER!</h2>
                <button id="play-again" class="btn">Play again</button>
            `;

            document.body.style.background = '#EE6983';
        }
        return;
    }

    if (number > highestNumber || number < lowerNumber) {
        guessElement.innerHTML += `<div>Invalid value! The number needs to be between ${lowerNumber} and ${highestNumber}.</div>`;
        return;
    }

    if (number === randomNumber) {
        document.body.innerHTML = `
            <h2>Congratulations!</h2>
            <h3>The secret number was ${randomNumber}.</h3>

            <button id="play-again" class="btn">Play again</button>
        `
    } else if (number < randomNumber) {
        guessElement.innerHTML += `
            <div>The secret number is higher <i class="fa-solid fa-arrow-up"></i></div>
        `;
    } else {
        guessElement.innerHTML += `
            <div>The secret number is lower <i class="fa-solid fa-arrow-down"></i></div>
        `;
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload();
    }
})