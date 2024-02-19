// Kadane's Algorithm

/*
Given an ineteger array nums and find subarray with the largest sum 
and returns it's value

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = kadane(array);
console.log(maxSum); // Output: 6 (corresponding to the subarray [4, -1, 2, 1])
*/

function kadane(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

/*
Kadane's Algorithm is an efficient algorithm for solving the maximum subarray sum problem. 
It is named after its inventor, Jay Kadane, and is used to find the contiguous subarray with the largest sum within a given array of numbers.
The algorithm works by iterating through the array and keeping track of the maximum sum encountered so far and the current sum of the subarray 
being considered. It starts with the assumption that the maximum sum is the first element of the array and updates the current sum by either 
adding the next element or starting a new subarray if the current sum becomes negative.

Here is a step-by-step explanation of Kadane's Algorithm:

1- Initialize two variables, maxSoFar, and maxEndingHere, to the value of the first element in the array.
2- Iterate through the array starting from the second element:
    - Update maxEndingHere by taking the maximum value between the current element and the sum of the current element and maxEndingHere.
    - Update maxSoFar by taking the maximum value between maxSoFar and maxEndingHere.
3- After the iteration, maxSoFar will contain the maximum sum found in any subarray of the given array.
*/
