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
