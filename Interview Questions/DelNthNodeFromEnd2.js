// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/delete-nth-node-from-the-end-of-the-given-linked-list/
Given a linked list and an integer N, the task is to delete the Nth node from the end of the given linked list.
 Examples:  

Input: 2 -> 3 -> 1 -> 7 -> NULL, N = 1 
Output: 
The created linked list is: 
2 3 1 7 
The linked list after deletion is: 
2 3 1

Input: 1 -> 2 -> 3 -> 4 -> NULL, N = 4 
Output: 
The created linked list is: 
1 2 3 4 
The linked list after deletion is: 
2 3 4 
*/

// Solution1:

/*
Take two pointers; the first will point to the head of the linked list and the second will point to the Nth node from the beginning.
Now keep incrementing both the pointers by one at the same time until the second is pointing to the last node of the linked list.
After the operations from the previous step, the first pointer should point to the Nth node from the end now. So, delete the node 
the first pointer is pointing to.
Below is the implementation of the above approach: 
*/

// Solution 2


// javascript implementation of the approach

// Head of list
var head;

// Linked list Node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Function to delete the nth node from
// the end of the given linked list
function deleteNode(key) {

  // First pointer will point to
  // the head of the linked list
  var first = head;

  // Second pointer will point to the
  // Nth node from the beginning
  var second = head;
  for (i = 0; i < key; i++) {

    // If count of nodes in the given
    // linked list is <= N
    if (second.next == null) {

      // If count = N i.e. delete the head node
      if (i == key - 1)
        head = head.next;
      return;
    }
    second = second.next;
  }

  // Increment both the pointers by one until
  // second pointer reaches the end
  while (second.next != null) {
    first = first.next;
    second = second.next;
  }

  // First must be pointing to the
  // Nth node from the end by now
  // So, delete the node first is pointing to
  first.next = first.next.next;
}

// Function to insert a new Node at front of the list
function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

// Function to print the linked list
function printList() {
  var tnode = head;
  while (tnode != null) {
    document.write(tnode.data + " ");
    tnode = tnode.next;
  }
}

// Driver code

  push(7);
  push(1);
  push(3);
  push(2);

  document.write("\nCreated Linked list is:<br/>");
  printList();

  var N = 1;
  deleteNode(N);

  document.write("<br/>Linked List after Deletion is:<br/>");
  printList();

// This code is contributed by todaysgaurav 


