const controls = document.querySelectorAll('[data-control]');
const statistics = document.querySelectorAll('[data-statistic]');
const pieces = {
    "arms": {
        "force": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "force": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },

    "cores": {
        "force": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },

    "legs": {
        "force": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },

    "rockets": {
        "force": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
};

controls.forEach((control) => {
    control.addEventListener('click', (e) => {
        handleData(e.target.dataset.control, e.target.parentNode);
        updateStatistic(e.target.dataset.piece);
    })
})

function handleData (operation, controlParent) {
    const pieceControl = controlParent.querySelector('[data-counter]');

    if (operation === '+') {
        pieceControl.value = Number(pieceControl.value) + 1;
    } else {
        pieceControl.value = Number(pieceControl.value) - 1;
    }
}

function updateStatistic (piece) {
    statistics.forEach((statistic) => {
        statistic.textContent = Number(statistic.textContent) + pieces[piece][statistic.dataset.statistic];
    })
}