// let prompt = require('prompt-sync')();

let isNumber = true;
let isGuessANumber = true;
let maxStoper = 5;

let attempts = 0;

const asciiZero = "0".charCodeAt(0); // 48
const asciiNine = "9".charCodeAt(0); // 57

let guessStoper = 5;
let guessedNumber = 0;

let maxNumber = "";

do {
    if (maxStoper < 5) {
        alert(`Not valid! ${maxStoper} attempts remaining. Try again.`);
    }

    maxNumber = prompt("Please, enter a max number: ");

    isNumber = true;
    for (let i = 0; i < maxNumber.length; i++) {
        if (maxNumber.charCodeAt(i) < asciiZero + 1 || maxNumber.charCodeAt(i) > asciiNine) {
            isNumber = false;
        }
    }
    maxStoper--;

    if (isNumber) {
        const randomNumber = Math.floor(Math.random() * parseInt(maxNumber) + 1);
        alert(`(spoiler: ${randomNumber})`);

        let isFound = false;

        while(!isFound && guessStoper > 0) {
            guessedNumber = prompt("Please, try to guess the number: ");

            isGuessANumber = true

            for (let i = 0; i < guessedNumber.length; i++) {
                if (guessedNumber.charCodeAt(i) < asciiZero || guessedNumber.charCodeAt(i) > asciiNine) {
                    alert(`Not a valid answer. ${guessStoper} attempts remaining. Try again.`);
                    isGuessANumber = false;
                    guessStoper--;
                    break;
                }
            }

            if (isGuessANumber) {
                if (parseInt(guessedNumber) > randomNumber) {
                    attempts++;
                    alert("Incorrect ! The guess should be Lower ;)");
                } else if (parseInt(guessedNumber) < randomNumber) {
                    attempts++;
                    alert("Incorrect ! The guess should be Higher ;)");
                } else if (parseInt(guessedNumber) === randomNumber) {
                    attempts++;
                    isFound = true;
                    alert(`Congrats!! You found the number in ${attempts} attempts.`);
                }
            }
        }
    }
} while (!isNumber && maxStoper > 0);

if (maxStoper <= 0 || guessStoper <= 0) {
    alert("You entered an incorrect value too many times. Reload the page to try again.");
}
