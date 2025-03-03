/*
   1. Write a program that takes a command-line argument n and prints a table of 
      the powers of 2 that are less than or equal to 2^n.
*/
const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (n >= 0) {
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
} else {
    console.log("Enter a non-negative integer.");
}
