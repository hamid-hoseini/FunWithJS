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


