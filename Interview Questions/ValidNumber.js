// Coding Interview Questions

/*
Given a string s, return whether s is a valid number.

For example, all the following are valid numbers: 
"2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", 
while the following are not valid numbers: 
"abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

Formally, a valid number is defined using one of the following definitions:

An integer number followed by an optional exponent.
A decimal number followed by an optional exponent.
An integer number is defined with an optional sign '-' or '+' followed by digits.

A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

Digits followed by a dot '.'.
Digits followed by a dot '.' followed by digits.
A dot '.' followed by digits.
An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

The digits are defined as one or more digits.
*/


/*
Using the isNaN Function
Using the Number() Function
Using the isFinite Function
*/

// solution 1: 
function numberValidation(n) {

    if (isNaN(n)) {
        console.log("Please enter Numeric value");
        return false;
    } else {
        console.log("Numeric value is: " + n);
        return true;
    }
}

let num = 4;
numberValidation(4);


// solution 2:
function validateNumber(value) {
    if (typeof value === 'number' && isFinite(value)) {
        console.log('Valid number');
    } else {
        console.log('Not a valid number');
    }
}

validateNumber(123); 
validateNumber('abc'); 
validateNumber(NaN); 
validateNumber(Infinity); 



// solution 3:
// Validate number string using Number function

function isValidNumberNumber(str) {
    return !isNaN(Number(str));
}

console.log(isValidNumberNumber("123"));     
console.log(isValidNumberNumber("-1.23"));    
console.log(isValidNumberNumber("3.14e5"));    
console.log(isValidNumberNumber("abc"));     
console.log(isValidNumberNumber("123.45.67")); 



// solution 4: 
