/*
   4. Enter 3 numbers and perform the following arithmetic operations, then find the max and min:
      1. a + b * c
      2. a % b + c
      3. c + a / b
      4. a * b + c
*/
const args = process.argv.slice(2);
const a = parseInt(args[0]);
const b = parseInt(args[1]);
const c = parseInt(args[2]);

const operation1 = a + b * c;
const operation2 = a % b + c;
const operation3 = c + a / b;
const operation4 = a * b + c;

const results = [operation1, operation2, operation3, operation4];
const maxValue = Math.max(...results);
const minValue = Math.min(...results);

console.log("Maximum value:", maxValue);
console.log("Minimum value:", minValue);
