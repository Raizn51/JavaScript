/*

PIN Code UC 1 :

The Postal Index Number
(PIN) or PIN Code is a 6
digit code of Post Office
numbering used
by India Post.
Create a regex pattern to
validate PIN code 400088 

*/
function isValidPinCode(pin) {
    var pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
}

console.log("Is 400088 Valid Pin Code : "+isValidPinCode("400088"));
