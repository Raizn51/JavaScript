/*

PIN Code UC 4 :

Make sure 400 088 is also
valid along with 400088

*/
function isValidPinCode(pin) {
    var pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return pinRegex.test(pin);
}


console.log("Is 400 088 Valid Pin Code : "+isValidPinCode("400 088"));
console.log("Is 40 0088 Valid Pin Code : "+isValidPinCode("40 0088"));
console.log("Is 400088 Valid Pin Code : "+isValidPinCode("400088"));
