export default function cpfValidation(field) {
    const cpf = field.value.replace(/\.|-/g, '');

    if (checkRepeatedNumbers(cpf) || firstDigitValidate(cpf) || secondDigitValidate(cpf)) {
        field.setCustomValidity('Esse CPF não é válido!');
    }
}

function checkRepeatedNumbers(cpf) {
    const repeatedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
        ]

    return repeatedNumbers.includes(cpf);
}

function firstDigitValidate(cpf) {
    let sum = 0;
    let multiplier = 10;

    for (let i = 0; i < 9; i++) {
        sum += cpf[i] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[9];
}

function secondDigitValidate(cpf) {
    let sum = 0;
    let multiplier = 11;

    for (let i = 0; i < 10; i++) {
        sum += cpf[i] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum >= 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[10];
}