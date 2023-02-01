const lowerNumberElement = document.querySelector('#lower-value');
const highestNumberElement = document.querySelector('#highest-value');
const lowerNumber = 1;
const highestNumber = 1000;
const randomNumber = generateRandomNumber();

lowerNumberElement.innerHTML = lowerNumber;
highestNumberElement.innerHTML = highestNumber;

function generateRandomNumber () {
    return parseInt(Math.random() * highestNumber + 1);
}