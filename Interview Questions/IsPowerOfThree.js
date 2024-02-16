// Airbnb coding interview question

/*
Check if the given number is the power of three

Example:
input: 27
output: true
*/

const isPowerOfThree = function(n) {
  if (n < 1) {
    return false;
}

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
};

const n = 27;
console.log(isPowerOfThree(n));  // True

const n2 = 9;
console.log(isPowerOfThree(n2));  // True

const n3 = 0;
console.log(isPowerOfThree(n3));  // False
