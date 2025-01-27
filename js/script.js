"use strict";

let gameRunning = true;
Boolean(gameRunning);

let answer = Math.ceil(Math.random() * 100);
console.log(`${answer}`)

while (gameRunning === true) {
    let guess = parseInt(prompt(`Guess a number between 1-100`));
    if (guess === answer) {
        alert(`You guessed the correct number! ${answer}`);
        break;
    }
    else if (guess < answer) {
        alert(`Your guess was too low!`);
    }
    else {
        alert(`Your guess was too high!`);
    }
}