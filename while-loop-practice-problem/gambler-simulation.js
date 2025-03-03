/*
   4. Write a program where a gambler starts with Rs 100 and places Re 1 bet 
      until he/she goes broke or reaches Rs 200.
      - Track the number of bets made.
      - Track the number of times won.
*/
let money = 100;
let bets = 0;
let wins = 0;
let lost=0;

while (money > 0 && money < 200) {
    bets++;
    if (Math.random() < 0.5) {
        money++; // Win
        wins++;
    } else {
        money--; // Lose
        lost++;
    }
}

console.log(`Final Money: Rs ${money}`);
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(`Total lost: ${lost}`);
