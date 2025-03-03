/*
   1. Write a program that takes a command-line argument n and prints a
      table of the powers of 2 that are less than or equal to 2^n until 256 is reached.
*/
const args = process.argv.slice(2);
const n = parseInt(args[0]);

let i = 0;
while (i <= n && Math.pow(2, i) <= 256) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
    i++;
}
