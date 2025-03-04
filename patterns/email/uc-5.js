/*

Email UC5: 
Finally lets close the
expression with
supporting optional parts.
Note: Top Level Domains
(TLD) in the last part is the
optional country code and
its 2 characters only
*/

function isValidEmail(email) {
    var emailRegex = /^abc([._+\-][a-z]+)?@bridgelabz\.co(\.[a-z]{2})?$/;
    return emailRegex.test(email);
}

console.log("Is abc@bridgelabz.co a Valid Email : " + isValidEmail("abc@bridgelabz.co"));
console.log("Is abc.xyz@bridgelabz.co.in a Valid Email : " + isValidEmail("abc.xyz@bridgelabz.co.in"));
console.log("Is abc-xyz@bridgelabz.co.us a Valid Email : " + isValidEmail("abc-xyz@bridgelabz.co.us"));
console.log("Is abc+xyz@bridgelabz.co.uk a Valid Email : " + isValidEmail("abc+xyz@bridgelabz.co.uk"));
console.log("Is abc_xyz@bridgelabz.co.de a Valid Email : " + isValidEmail("abc_xyz@bridgelabz.co.de"));

console.log("Is abc@bridgelabz.com a Valid Email : " + isValidEmail("abc@bridgelabz.com"));
console.log("Is abc@@bridgelabz.co a Valid Email : " + isValidEmail("abc@@bridgelabz.co"));
console.log("Is abc&xyz@bridgelabz.co a Valid Email : " + isValidEmail("abc&xyz@bridgelabz.co"));
console.log("Is abc*xyz@bridgelabz.co a Valid Email : " + isValidEmail("abc*xyz@bridgelabz.co"));
console.log("Is abc!xyz@bridgelabz.co a Valid Email : " + isValidEmail("abc!xyz@bridgelabz.co"));
console.log("Is abc123@bridgelabz.co a Valid Email : " + isValidEmail("abc123@bridgelabz.co"));
console.log("Is abc.xyz@bridgelabz. a Valid Email : " + isValidEmail("abc.xyz@bridgelabz."));
console.log("Is abc.xyz@bridgelabz.co. a Valid Email : " + isValidEmail("abc.xyz@bridgelabz.co."));
console.log("Is abc@bridgelabz.co.in. a Valid Email : " + isValidEmail("abc@bridgelabz.co.in."));
console.log("Is abc@bridgelabz.co.abc a Valid Email : " + isValidEmail("abc@bridgelabz.co.abc"));
console.log("Is abc@bridgelabz.co.a a Valid Email : " + isValidEmail("abc@bridgelabz.co.a"));
console.log("Is abc@bridgelabz.co.abcde a Valid Email : " + isValidEmail("abc@bridgelabz.co.abcde"));
