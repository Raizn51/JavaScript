/*
   4. Write a program that takes user inputs and does unit conversion of different length units using switch-case:
      1. Feet to Inch
      2. Feet to Meter
      3. Inch to Feet
      4. Meter to Feet
*/
const args = process.argv.slice(2);
const option = parseInt(args[0]);
const value = parseFloat(args[1]);

let convertedValue = 0;
switch (option) {
    case 1:
        convertedValue = value * 12;
        console.log(value + " Feet = " + convertedValue + " Inches");
        break;
    case 2:
        convertedValue = value * 0.3048;
        console.log(value + " Feet = " + convertedValue + " Meters");
        break;
    case 3:
        convertedValue = value / 12;
        console.log(value + " Inches = " + convertedValue + " Feet");
        break;
    case 4:
        convertedValue = value * 3.28084;
        console.log(value + " Meters = " + convertedValue + " Feet");
        break;
    default:
        console.log("Invalid option, choose between 1-4.");
}
