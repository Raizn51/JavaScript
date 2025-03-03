/*
   6. Write a program to compute the prime factors of a number using the prime factorization method.
      Logic: Traverse till i*i <= N instead of i <= N for efficiency.
*/
const args = process.argv.slice(2);
let n = parseInt(args[0]);

console.log(`Prime factors of ${n}:`);

for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}
if (n > 1) {
    console.log(n);
}
