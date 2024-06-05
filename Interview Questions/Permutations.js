// Coding Interview Questions

/* 
Reference: https://www.geeksforgeeks.org/javascript-program-to-print-all-permutations-of-given-string/
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/

// // solution 1: Using Backtracking:
function generatePermutations(str) {
    const permutations = [];
    function permute(str, left, right) {
        if (left == right) {
            permutations.push(str);
        } else {
            for (let i = left; i <= right; i++) {
                str = swap(str, left, i);
                permute(str, left + 1, right);
                str = swap(str, left, i);
            }
        }
    }
    function swap(a, i, j) {
        const charArray = a.split("");
        const temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return charArray.join("");
    }
    permute(str, 0, str.length - 1);
    return permutations;
}
const str = "ABC";
const permutations = generatePermutations(str);
console.log("Permutations:");
console.log(...permutations);



//Solution 2: Using Iteration

function generatePermutationsIteration(inputString) {
  const uniquePermutations = [];

  function 
      generateUniquePermutations(arr, currentIndex) {
      if (currentIndex === arr.length - 1) {
          uniquePermutations.push(arr.join(""));
      } else {
          for (let i = currentIndex; 
              i < arr.length; i++) {
              [arr[currentIndex], arr[i]] = 
                  [arr[i], arr[currentIndex]];
              generateUniquePermutations(
                  [...arr], currentIndex + 1);
          }
      }
  }

  generateUniquePermutations(inputString.split(""), 0);
  return uniquePermutations;
}

const inputString = "CABC";
const uniquePermutations = 
    generatePermutationsIteration(inputString);

for (let i = 0; 
    i < uniquePermutations.length; i++) {
    console.log(uniquePermutations[i]);
}
