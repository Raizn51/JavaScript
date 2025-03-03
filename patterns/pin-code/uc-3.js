/*

PIN Code UC 3 :

Restrict the PIN code from
taking alphabets or special
characters at the End.
Check for 400088B – this
should fail

*/
function isValidPinCode(pin) {
    var pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
}

console.log("Is A400088 Valid Pin Code : "+isValidPinCode("A400088"));
console.log("Is A400088J Valid Pin Code : "+isValidPinCode("A400088J"));
console.log("Is 400088 Valid Pin Code : "+isValidPinCode("400088"));
