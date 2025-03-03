/*
   3. Extend the Flip Coin problem until either Heads or Tails wins 11 times.
*/
let headsCount = 0, tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";
    if (flip == "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }
    console.log(flip, `-> Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log(`Winner: ${headsCount == 11 ? "Heads" : "Tails"}`);
