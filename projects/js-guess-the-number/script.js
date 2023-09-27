// let prompt = require('prompt-sync')();

let maxNumber = "";
let guessedNumber = 0;

let isMaxANumber = true;
let isGuessANumber = true;

let maxStoper = 5;
let guessStoper = 5;

let attempts = 0;

const asciiZero = "0".charCodeAt(0); // 48
const asciiNine = "9".charCodeAt(0); // 57

do {
    maxNumber = prompt("Please, enter a max number: ");

    isMaxANumber = true;

    for (let i = 0; i < maxNumber.length; i++) {
        if (maxNumber.charCodeAt(i) < asciiZero || maxNumber.charCodeAt(i) > asciiNine || maxNumber.charAt(0) == 0) {
            isMaxANumber = false;
            maxStoper--;
            alert(`Not valid! ${maxStoper} tries remaining. Try again.`);
            break;
        }
    }
    
    if (isMaxANumber) {
        const randomNumber = Math.floor(Math.random() * parseInt(maxNumber) + 1);
        // alert(`(spoiler: ${randomNumber})`);

        let isFound = false;

        while(!isFound && guessStoper > 0) {
            guessedNumber = prompt("Try to guess the number: ");

            isGuessANumber = true

            for (let i = 0; i < guessedNumber.length; i++) {
                if (guessedNumber.charCodeAt(i) < asciiZero || guessedNumber.charCodeAt(i) > asciiNine) {
                    isGuessANumber = false;
                    guessStoper--;
                    alert(`Not a valid answer. ${guessStoper} tries remaining. Try again.`);
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
} while (!isMaxANumber && maxStoper > 0);

if (maxStoper <= 0 || guessStoper <= 0) {
    alert("You entered an incorrect value too many times. Reload the page to try again.");
}
