/*
   3. Write a program that takes an input and determines if the number is a prime.
*/
const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (num < 2) {
    console.log(`${num} is not a prime number.`);
} else {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${num} is ${isPrime ? "a prime" : "not a prime"} number.`);
}
