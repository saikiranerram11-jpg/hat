const randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = parseInt(prompt("Guess a number between 1 and 10:"));

if (guess === randomroad) {
    alert(" You guessed correctly.");
} else {
    alert("Wrong guess! The correct number was " + randomNumber);
}

console.log("Random Number:", randomNumber);
console.log("Your Guess:", guess);