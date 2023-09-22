let prompt = require('prompt-sync')();

let maxNumber = "";
let randomNumber = 0;
let guessedNumber = 0;
let attempts = 0;

let isNumber = true;
let isFound = false;
let maxStoper = 5;
let guessStoper = 5;
const asciiZero = "0".charCodeAt(0); // 48
const asciiNine = "9".charCodeAt(0); // 57

do {
    if (maxStoper < 5) {
        console.log(`Not a number! ${maxStoper} attempts remaining. Try again.`);
    }
    maxNumber = prompt("Enter the max number: ");

    for (let i = 0; i < maxNumber.length; i++) {
        isNumber = true;
        if (maxNumber.charCodeAt(i) < asciiZero + 1 || maxNumber.charCodeAt(i) > asciiNine) {
            isNumber = false;
        }
    }
    maxStoper--;

    if (isNumber) {
        randomNumber = Math.floor(Math.random() * parseInt(maxNumber) + 1);
        console.log(`    (spoiler: ${randomNumber})`);

        while(!isFound && guessStoper > 0) {
            if (guessStoper < 5) {
                console.log(`Not a number! ${guessStoper} attempts remaining. Try again.`);
            }
            guessStoper--;

            guessedNumber = prompt("Guess the number: ");

            for (let i = 0; i < guessedNumber.length; i++) {
                isNumber = true;
                if (guessedNumber.charCodeAt(i) < asciiZero || guessedNumber.charCodeAt(i) > asciiNine) {
                    console.log("Not a valid answer.");
                    break;
                }
            }

            if (parseInt(guessedNumber) > randomNumber) {
                attempts++;
                console.log("lower");
            } else if (parseInt(guessedNumber) < randomNumber) {
                attempts++;
                console.log("higher");
            } else if (parseInt(guessedNumber) === randomNumber) {
                attempts++;
                isFound = true;
                console.log(`You found the number in ${attempts} attempts.`);
            }
        }


    }


} while (!isNumber && maxStoper > 0);

if (maxStoper <= 0) {
    console.log("5 times, you didn't enter a number. Reload the page to try again.");
}
