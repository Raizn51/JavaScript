/*
   5. Write a program that computes the factorial of a number taken as input.
      Factorial (n!) = 1 * 2 * 3 * ... * n
*/
const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (n >= 0) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`${n}! = ${factorial}`);
} else {
    console.log("Enter a non-negative integer.");
}
