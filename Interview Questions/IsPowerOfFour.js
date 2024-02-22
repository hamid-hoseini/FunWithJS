// Spotify coding interview question

/*
Check if the given number is the power of four

Example:
input: 16
output: true

input: 1
output: true

input: 10
output: false
*/

const isPowerOfFour1 = function(n) {
  if (n === 1) return true;
  if (n <= 0 ) return false;
  if (n % 4 === 0) return true;

  return isPowerOfOur(n / 4);
}

console.log(isPowerOfOur1(16)); // true
console.log(isPowerOfOur1(1)); // true
console.log(isPowerOfOur1(5)); // false


// Solution 2

function isPowerOfFour2(num) {
  if (num < 1) {
    return false;
  }

  while (num % 4 === 0) {
    num /= 4;
  }

  return num === 1;
}
