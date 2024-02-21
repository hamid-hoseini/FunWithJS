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

const isPowerOfOur = function(n) {
  if (n === 1) return true;
  if (n <= 0 ) return false;
  if (n % 4 === 0) return true;

  return isPowerOfOur(n / 4);
}

console.log(isPowerOfOur(16)); // true
console.log(isPowerOfOur(1)); // true
console.log(isPowerOfOur(5)); // false
