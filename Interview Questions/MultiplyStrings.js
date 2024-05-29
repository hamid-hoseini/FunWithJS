// Coding Interview Question

/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
*/

/*
Compute the ones-digit, then the tens-digit, then the hundreds-digit, etc. 
For example when multiplying 1234 with 5678, the thousands-digit of     
the product is 4*5 + 3*6 + 2*7 + 1*8 (plus what got carried from the hundreds-digit).
*/

function multiplyStrings(a, b) {
  if (a === "0" || b === "0") {
    return "0";
  }

  let m = a.length - 1;
  let n = b.length - 1;
  let carry = 0;
  let product = "";
  
  for (let i = 0; i <= m + n; i++) {
    for (let j = Math.max(0, i - n); j <= Math.min(i, m); j++) {
      carry += (a[m - j].charCodeAt(0) - 48) * (b[n - i + j].charCodeAt(0) - 48);
    }
    product += (carry % 10).toString();
    carry = Math.floor(carry / 10);
  }

  return product.split("").reverse().join("");
}

// Example usage
const a = "1235421415454545454545454544";
const b = "1714546546546545454544548544544545";
const product = multiplyStrings(a, b);
console.log("The Product is: " + product);
