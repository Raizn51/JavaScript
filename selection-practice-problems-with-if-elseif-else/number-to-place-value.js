/*
   3. Read a number (1, 10, 100, 1000, etc.) and display "Unit", "Ten", "Hundred", etc.
*/
const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (num === 1) console.log("Unit");
else if (num === 10) console.log("Ten");
else if (num === 100) console.log("Hundred");
else if (num === 1000) console.log("Thousand");
else console.log("Invalid input, enter 1, 10, 100, 1000");
