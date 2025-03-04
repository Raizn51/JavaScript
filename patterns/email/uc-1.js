/*
Email UC 1:
Validate Email address with a regex. The email consists of 
minimum 3 and optional 2 more parts with mandatory @ and .  
abc.xyz@bridgelabz.co.in  
Here abc, bridgelabz and co are mandatory and the remaining 2 are optional.  
To begin with, validate the mandatory part and start with abc.
*/

function isValidEmail(email) {
    var emailRegex = /^abc(\.[a-z]+)?@bridgelabz\.co(\.[a-z]+)?$/i;
    return emailRegex.test(email);
}

console.log("Is ABC@bridgelabz.co a Valid Email : " + isValidEmail("ABC@bridgelabz.co"));
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
