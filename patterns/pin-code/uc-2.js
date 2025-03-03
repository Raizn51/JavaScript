/*

PIN Code UC 2 :

Restrict the PIN code from
taking alphabets or special
characters at the
beginning.
Check for A400088 – this
should fail

*/
function isValidPinCode(pin) {
    var pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
}

console.log("Is A400088 Valid Pin Code : "+isValidPinCode("A400088"));
console.log("Is 400088 Valid Pin Code : "+isValidPinCode("400088"));
