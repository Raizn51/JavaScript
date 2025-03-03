/*
4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,
then find their sum and the average
*/

let val1=Math.floor(Math.random() * 90) + 10;
let val2=Math.floor(Math.random() * 90) + 10;
let val3=Math.floor(Math.random() * 90) + 10;
let val4=Math.floor(Math.random() * 90) + 10;
let val5=Math.floor(Math.random() * 90) + 10;

let sum=val1+val2+val3+val4+val5;
let avg=sum/5;

console.log("Sum : "+sum);
console.log("Average : "+avg);