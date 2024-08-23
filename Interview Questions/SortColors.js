// Coding Interview Question

/*
reference: https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of 
the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/

// Solution:

function sort012(arr) {
  let c0 = 0, c1 = 0, c2 = 0;

  // Count 0s, 1s, and 2s
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
          c0 += 1;
      } else if (arr[i] === 1) {
          c1 += 1;
      } else {
          c2 += 1;
      }
  }

  let idx = 0;
  // Place all the 0s
  for (let i = 0; i < c0; i++) {
      arr[idx++] = 0;
  }

  // Place all the 1s
  for (let i = 0; i < c1; i++) {
      arr[idx++] = 1;
  }

  // Place all the 2s
  for (let i = 0; i < c2; i++) {
      arr[idx++] = 2;
  }
}

// Sample Input
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

sort012(arr);
console.log(arr.join(' '));

// Time Complexity: O(2 * N), where N is the number of elements in the array
// Auxiliary Space: O(1)

// solution 2:

// Javascript program to sort an array of 0, 1 and 2 
// Function to sort the input array,
// the array is assumed to have values in {0, 1, 2}
function sort012(arr) {
  let lo = 0;
  let hi = arr.length - 1;
  let mid = 0;

  // Iterate till all the elements are sorted
  while (mid <= hi) {
    switch (arr[mid]) {
        // If the element is 0
        case 0:
            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
            lo++;
            mid++;
            break;

        // If the element is 1
        case 1:
            mid++;
            break;

        // If the element is 2
        case 2:
            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
            hi--;
            break;
    }
  }
}

// Function to print array
function printArray(arr) {
    console.log(arr.join(' '));
}

// Sample Input
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

sort012(arr);
printArray(arr);

// Time Complexity: O(n), Only one traversal of the array is needed.
// Auxiliary Space : O(1), No extra space is required.
