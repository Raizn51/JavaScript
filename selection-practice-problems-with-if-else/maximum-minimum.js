/*
1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value 
*/
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(100 + Math.random() * 900));
}

let minValue = numbers[0];
let maxValue = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i];
    }
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log("Generated numbers:", numbers);
console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);
