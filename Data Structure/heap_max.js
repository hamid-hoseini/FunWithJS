class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Inserts a value into the max heap
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Restores the heap property by moving the element up the heap
  bubbleUp(index) {
    const value = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (value <= parent) break;
      this.heap[parentIndex] = value;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // Extracts the maximum value (root) from the max heap
  extractMax() {
    const max = this.heap[0];
    const lastElement = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.sinkDown(0);
    }
    return max;
  }

  // Restores the heap property by moving the element down the heap
  sinkDown(index) {
    const length = this.heap.length;
    const value = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;
      let leftChild, rightChild;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > value) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild > value) ||
          (swapIndex !== null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = value;
      index = swapIndex;
    }
  }

  // Retrieves the maximum value (root) from the max heap
  peek() {
    return this.heap[0];
  }

  // Returns the number of elements in the max heap
  size() {
    return this.heap.length;
  }

  // Checks if the max heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}