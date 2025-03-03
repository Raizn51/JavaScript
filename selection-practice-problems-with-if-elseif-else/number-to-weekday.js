/*
   2. Read a number and display the corresponding weekday (Sunday, Monday,...).
*/
const args = process.argv.slice(2);
const num = parseInt(args[0]);

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (num >= 1 && num <= 7) {
    console.log(weekDays[num - 1]);
} else {
    console.log("Invalid input, enter a number between 1 and 7.");
}
