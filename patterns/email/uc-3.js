/*

Email UC 3:
Ensure “.” appears after bridgelabz and validate the mandatory third part i.e. co.
*/

function isValidEmail(email) {
    var emailRegex = /^abc(\.[a-z]+)?@bridgelabz\.co(\.[a-z]+)?$/;
    return emailRegex.test(email);
}

console.log("Is abc@bridgelabz.co a Valid Email : " + isValidEmail("abc@bridgelabz.co"));
console.log("Is abc.xyz@bridgelabz.co.in a Valid Email : " + isValidEmail("abc.xyz@bridgelabz.co.in"));
console.log("Is abc.def@bridgelabz.co.us a Valid Email : " + isValidEmail("abc.def@bridgelabz.co.us"));
console.log("Is abc@bridgelabz.co.in a Valid Email : " + isValidEmail("abc@bridgelabz.co.in"));

console.log("Is xyz@bridgelabz.co a Valid Email : " + isValidEmail("xyz@bridgelabz.co"));
console.log("Is abc@xyz.co.in a Valid Email : " + isValidEmail("abc@xyz.co.in"));
console.log("Is abc@bridgelabz.com a Valid Email : " + isValidEmail("abc@bridgelabz.com"));
console.log("Is abc@bridgelabz. a Valid Email : " + isValidEmail("abc@bridgelabz."));
console.log("Is abc@bridgelabz.co. a Valid Email : " + isValidEmail("abc@bridgelabz.co."));
console.log("Is .abc@bridgelabz.co.in a Valid Email : " + isValidEmail(".abc@bridgelabz.co.in"));
console.log("Is abc@bridgelabz a Valid Email : " + isValidEmail("abc@bridgelabz"));
console.log("Is abc@google.co a Valid Email : " + isValidEmail("abc@google.co"));
console.log("Is abc@bridgelabzcom a Valid Email : " + isValidEmail("abc@bridgelabzcom"));
console.log("Is abc@bridgelabz.co.in. a Valid Email : " + isValidEmail("abc@bridgelabz.co.in."));
