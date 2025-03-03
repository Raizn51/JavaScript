/*
   Find the Magic Number:
   a. Ask the user to think of a number n between 1 to 100.
   b. Use binary search to guess the number.
   c. Keep checking if the number is less than or greater than the guess.
   d. Repeat until the Magic Number is found.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var low = 1, high = 100;

console.log("Think of a number between 1 and 100.");

/**
 * Function to ask the user if the guessed number is correct.
 */
function askQuestion() {
    if (low === high) {
        console.log("Your Magic Number is: " + low);
        rl.close();
        return;
    }
    
    var mid = Math.floor((low + high) / 2);
    
    rl.question("Is your number greater than " + mid + "? (y/n) : ", function(answer) {
        answer = answer.trim().toLowerCase();
        if (answer === 'y') {
            low = mid + 1;
        } else if (answer === 'n') {
            high = mid;
        } else {
            console.log("Invalid input. Please answer 'y' or 'n'.");
        }
        askQuestion();
    });
}

askQuestion();
