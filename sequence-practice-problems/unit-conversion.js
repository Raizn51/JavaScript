/*
5. Use Script & Debug – Unit Conversion

a. 1ft = 12 in then 42 in = ? ft
b. Rectangular Plot of 60 feet x 40 feet in meters
c. Calculate area of 25 such plots in acres
*/
let inches = 42;
let feet = inches / 12;
console.log("42 inches is:", feet, "feet");

let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log("Rectangular plot size in meters:", lengthMeters, "x", widthMeters);

let singlePlotArea = lengthFeet * widthFeet;
let totalAreaFeet = singlePlotArea * 25;
let totalAreaAcres = totalAreaFeet / 43560;
console.log("Total area of 25 plots in acres:", totalAreaAcres);
