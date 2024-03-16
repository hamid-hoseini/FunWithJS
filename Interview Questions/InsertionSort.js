// Coding interview question

/*
 It should iterate through the input array and, for each element, 
 find its correct position in the sorted portion of the array by shifting 
 larger elements to the right.
*/


function insertionSort(arr) {
  const len = arr.length;
  
  for (let i = 1; i < len; i++) {
    const key = arr[i];
    let j = i - 1;
    
    // Move elements greater than key to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);
console.log("Sorted array:", insertionSort(numbers));


/*
In the above code, the insertionSort function takes an array arr as input and sorts it using the 
insertion sort algorithm. It starts with the second element and iterates through the array. 
For each element, it compares it with the previous elements in the sorted portion of the array 
and shifts larger elements to the right to make space for the current element. Finally, it 
places the current element in its correct position. The function returns the sorted array.

time complexity of O(n^2)
space complexity of O(1)
*/
