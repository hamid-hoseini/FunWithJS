// Bubble Sort - Coding Interview Question

/*
compares adjacent elements, and swaps them if they are in the wrong order. 
The algorithm continues iterating through the list until no more swaps are needed,
*/

function bubbleSort(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < len - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
console.log("Sorted array:", bubbleSort(numbers));

/*
Time Complexity: O(n^2)
Space Complexity: O(1)
*/
