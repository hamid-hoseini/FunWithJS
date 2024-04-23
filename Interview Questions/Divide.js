// Coding Interview Question

/*
Given two integers say a and b. Find the quotient after dividing a by b without using multiplication, division, and mod operator.

Example: 

Input : a = 10, b = 3
Output : 3

Input : a = 43, b = -8
Output :  -5 


Approach: Keep subtracting the divisor from the dividend until the dividend becomes less than the divisor. 
The dividend becomes the remainder, and the number of times subtraction is done becomes the quotient. 
*/

function divide(dividend, divisor) {
 
// Calculate sign of divisor i.e.,
// sign will be negative only if
// either one of them is negative
// otherwise it will be positive
let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
 
// Update both divisor and
// dividend positive
dividend = Math.abs(dividend);
divisor = Math.abs(divisor);
 
// Initialize the quotient
let quotient = 0;
while (dividend >= divisor) {
    dividend -= divisor;
    ++quotient;
}
//if the sign value computed earlier is -1 then negate the value of quotient
if(sign==-1) quotient=-quotient;
return quotient;
}
 
// Driver code
let a = 10, b = 3;
console.log(divide(a, b));
 
a = 43, b = -8;
console.log(divide(a, b));
