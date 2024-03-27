// Coding Interview Question

/*
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


/*
Recursive Approach :
1) Create a dummy node and create a link from dummy node to head node. i.e, dummy->next = head 
2) Then we will use the recursion stack to keep track of elements that are being pushed in recursion calls.
3) While popping the elements from recursion stack, we will decrement the N(position of target node from the end of linked list) i.e, N = N-1.
4) When we reach (N==0) that means we have reached at the target node,
5) But here is the catch, to delete the target node we require its previous node,
6) So we will now stop when (N==-1) i.e, we reached the previous node.
7) Now it is very simple to delete the node by using previousNode->next = previousNode->next->next.
*/

// Javascript code addition

// class of linked list
class LinkedList {
// Constructor to create the first node
constructor(val) {
	this.val = val;
	this.next = null;
}

// Method to add nodes to the linked list
addNode(val) {
	const node = new LinkedList(val);
	if (this.next === null) {
	this.next = node;
	} else {
	this.next.addNode(val);
	}
	return this;
}

// Method to print the linked list
printLinkedList() {
	let node = this;
	while (node !== null) {
	process.stdout.write(node.val + " ");
	node = node.next;
	}
	console.log();
}

// Method to remove the nth node from the end of the linked list
removeNthNodeFromEnd(n) {
	const dummy = new LinkedList(0);
	dummy.next = this;
	let first = dummy;
	let second = dummy;

	for (let i = 0; i <= n; i++) {
	first = first.next;
	}

	while (first !== null) {
	first = first.next;
	second = second.next;
	}

	second.next = second.next.next;
	return dummy.next;
}
}

const list = new LinkedList(1);
list.addNode(2).addNode(3).addNode(4).addNode(5);
list.printLinkedList(); // Print: 1 2 3 4 5
list.removeNthNodeFromEnd(2);
list.printLinkedList(); // Output: 1 2 3 5

// Edge case where linked list has only one node
const list2 = new LinkedList(1);
list2.printLinkedList(); // Print: 1
list2.removeNthNodeFromEnd(1);
if (list2 === null || list2.next === null) {
console.log("Empty Linked List");
} else {
list2.printLinkedList();
}

const list3 = new LinkedList(1);
list3.addNode(2);
list3.printLinkedList(); // Print: 1 2
list3.removeNthNodeFromEnd(1);
list3.printLinkedList(); // Output: 1

// The code is contributed by Nidhi goel.
