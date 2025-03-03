/*
   4. Extend the program to take a range of numbers as input and output the Prime Numbers in that range.
*/
const args = process.argv.slice(2);
var start = parseInt(args[0]);
const end = parseInt(args[1]);

if (start < 2) start = 2;

for (let num = start; num <= end; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}
