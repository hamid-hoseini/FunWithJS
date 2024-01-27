// Implement a function to check if an array can be rearranged into a valid min heap

function isValidMinHeap(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    if (!isMinHeap(arr, i, n)) {
      return false;
    }
  }

  return true;
}

function isMinHeap(arr, i, n) {
  const leftChildIndex = 2 * i + 1;
  const rightChildIndex = 2 * i + 2;

  if (leftChildIndex < n && arr[i] > arr[leftChildIndex]) {
    return false;
  }

  if (rightChildIndex < n && arr[i] > arr[rightChildIndex]) {
    return false;
  }

  return true;
}

/**
 The isValidMinHeap function takes an array arr as input and checks if it can be rearranged into a valid min heap. 
 It begins by iterating from the last non-leaf node (at index Math.floor(n / 2) - 1) to the root node (at index 0) 
 of the array. For each node, it calls the isMinHeap function to check if the node and its children satisfy the min 
 heap property. If any violation is found, it returns false. If no violations are found, it returns true, indicating 
 that the array can be rearranged into a valid min heap.

The isMinHeap function is a helper function that checks the min heap property for a given node at index i in the array. 
It compares the node's value with its left child (if it exists) and right child (if it exists). If any child's value 
is smaller than the node's value, it returns false. Otherwise, it returns true.

You can test this function with various input arrays to check if they can be rearranged into a valid min heap.
 */