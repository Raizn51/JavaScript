/*
   2. Write a program that takes a command-line argument n and prints the nth harmonic number.
      Harmonic Number is defined as: H(n) = 1 + 1/2 + 1/3 + ... + 1/n
*/
const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (n > 0) {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    console.log(`Harmonic Number H(${n}) = ${harmonic}`);
} else {
    console.log("Enter a positive integer.");
}
