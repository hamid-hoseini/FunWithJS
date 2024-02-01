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
