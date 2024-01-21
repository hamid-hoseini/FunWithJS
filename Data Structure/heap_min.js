class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Inserts a value into the min heap
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
      if (value >= parent) break;
      this.heap[parentIndex] = value;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // Extracts the minimum value (root) from the min heap
  extractMin() {
    const min = this.heap[0];
    const lastElement = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.sinkDown(0);
    }
    return min;
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
        if (leftChild < value) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild < value) ||
          (swapIndex !== null && rightChild < leftChild)
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

  // Retrieves the minimum value (root) from the min heap
  peek() {
    return this.heap[0];
  }

  // Returns the number of elements in the min heap
  size() {
    return this.heap.length;
  }

  // Checks if the min heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}


/*
So basically Min Heap is a complete binary tree. A Min heap is typically represented as an array. 
The root element will be at Arr[0]. For any ith node, i.e., Arr[i] 

Arr[(i -1) / 2] returns its parent node.
Arr[(2 * i) + 1] returns its left child node.
Arr[(2 * i) + 2] returns its right child node.


Operations of Heap Data Structure:
Heapify: a process of creating a heap from an array.
Insertion: process to insert an element in existing heap time complexity O(log N).
Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
Peek: to check or find the most prior element in the heap, (max or min element for max and min heap).
Explanation: Now let us understand how the various helper methods maintain the order of the heap

The helper methods like rightChild, leftChild, and parent help us to get the element and its children at the specified index.
The add() and remove() methods handle the insertion and deletion process
The heapifyDown() method maintains the heap structure when an element is deleted.
The heapifyUp() method maintains the heap structure when an element is added to the heap. 
The peek() method returns the root element of the heap and swap() method interchanges value at two nodes.
*/