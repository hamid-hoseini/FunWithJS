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



// solution 3: Using Heap’s Algorithm

function swap(strArr, i, j) {
  const temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
}

function permute(str, n = str.length, strArr = str.split('')) {
  if (n === 1) {
    console.log(strArr.join(''));
  } else {
    for (let i = 0; i < n; i++) {
      permute(str, n - 1, strArr);
      if (n % 2 === 0) {
        swap(strArr, i, n - 1);
      } else {
        swap(strArr, 0, n - 1);
      }
    }
  }
}

const str = 'abcd';
permute(str);



// solution 4: Using Iterative Method with Factorial Count

function generatePermutationsWithFactorial(str) {
    const permutations = [];
    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

    const len = str.length;
    const totalPermutations = factorial(len);

    for (let i = 0; i < totalPermutations; i++) {
        let currentPermutation = '';
        let temp = i;

        const availableChars = str.split('');

        for (let j = len - 1; j >= 0; j--) {
            const index = temp % (j + 1);
            temp = Math.floor(temp / (j + 1));

            currentPermutation += availableChars[index];
            availableChars.splice(index, 1);
        }

        permutations.push(currentPermutation);
    }

    return permutations;
}

const str = "ABC";
const permutations = generatePermutationsWithFactorial(str);
console.log("Permutations:");
console.log(...permutations);
