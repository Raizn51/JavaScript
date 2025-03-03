/*
   3. Read a number (1, 10, 100, 1000, etc.) and display "Unit", "Ten", "Hundred", etc. using switch-case.
*/
const args = process.argv.slice(2);
const num = parseInt(args[0]);

switch (num) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    default: console.log("Invalid input, enter 1, 10, 100, 1000.");
}
