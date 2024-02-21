// Coding interview question

/*
Check if the given number is the power of two

Example:
input: 16
output: true

input: 1
output: true

input: 10
output: false
*/

// Solution 1:

function isPowerOfTwo1(number) {
  if (number <= 0) {
    return false;
  }

  return (number & (number - 1)) === 0;
}

// Example usage
console.log(isPowerOfTwo1(16)); // Output: true
console.log(isPowerOfTwo1(20)); // Output: false
