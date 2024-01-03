// UBER Coding Interview Question

/**
Write a function that takes an array of numbers as input and moves 
the zeros of the array to the end of the array without creating a new array.

Input: [0, 2, 0, 12, 5, 7, 0]   Output: [2, 12, 5, 7, 0, 0, 0]
*/

const moveZeroes = (arr) => {
  left = 0;
  right = 0;

  while (right < arr.length) {
    if (arr[right] !== 0) {
      [arr[right], arr[left]] = [arr[left], arr[right]]
      left++;
    }
    right++;
  }

  return arr;
}

console.log(moveZeroes([0, 2, 0, 12, 5, 7, 0]));
