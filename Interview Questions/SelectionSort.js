// Google coding interview question

/*
Given an array an return sorted array using Selection sort
*/

function selectionSort(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    
    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the minimum element with the first element in the unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log("Original array:", numbers);
console.log("Sorted array:", selectionSort(numbers));

/*
Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element 
from the unsorted part of the array and placing it at the beginning.
the selectionSort function takes an array arr as input and performs selection sort on it. 
It iterates through the array starting from the first element and finds the index of the 
minimum element in the remaining unsorted part of the array. Once the minimum element is found, 
it is swapped with the first element in the unsorted part. This process continues until the entire array is sorted.

Time Complexity: O(n^2)
Space Complexity: O(1)
*/
