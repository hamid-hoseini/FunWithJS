// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/
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

// Time complexity : O(a/b) 
// Auxiliary space : O(1)



// Solution 2:

/*
Efficient Approach: Use bit manipulation in order to find the quotient. The divisor and dividend can be written as 

dividend = quotient * divisor + remainder

As every number can be represented in base 2(0 or 1), represent the quotient in binary form by using the shift operator as given below: 

Determine the most significant bit in the divisor. This can easily be calculated by iterating on the bit position i from 31 to 1.
Find the first bit for which divisor << i is less than dividend and keep updating the ith bit position for which it is true.
Add the result in the temp variable for checking the next position such that (temp + (divisor << i) ) is less than the dividend.
Return the final answer of the quotient after updating with a corresponding sign.
*/

function divide1(dividend, divisor) 
{
 
var sign = ((dividend < 0)?1:0 ^ 
             (divisor < 0)?1:0) ? -1 : 1;
 
// remove sign of operands
dividend = Math.abs(dividend);
divisor = Math.abs(divisor);
 
// Initialize the quotient
var quotient = 0, temp = 0;
 
// test down from the highest 
// bit and accumulate the 
// tentative value for
// valid bit
while (dividend >= divisor) {
    dividend -= divisor;
    ++quotient;
}
//if the sign value computed earlier is -1 then negate the value of quotient
if(sign==-1) quotient=-quotient;
return quotient;
}
 
// Driver code
 
var a = 10, b = 3;
console.log(divide1(a, b));
 
var a1 = 43, b1 = -8;
console.log(divide2(a1, b1));
