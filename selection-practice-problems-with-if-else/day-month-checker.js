/*
2. Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/

const args = process.argv.slice(2);
const day = parseInt(args[0]);
const month = parseInt(args[1]);

let result = false;

if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
    result = true;
}

console.log(result);
