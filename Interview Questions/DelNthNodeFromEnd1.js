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

// Solution1:

/*
Let K be the total nodes in the linked list.
Observation: The Nth node from the end is (K-N+1)th node from the beginning.
So the problem simplifies down to that we have to find  (K-N+1)th node from the beginning.
One way of doing it is to find the length (K) of the linked list in one pass and then in the 
second pass move (K-N+1) step from the beginning to reach the Nth node from the end.
To do it in one pass. Let’s take the first pointer and move N step from the beginning. 
Now the first pointer is (K-N+1) steps away from the last node, 
which is the same number of steps the second pointer require to move from the beginning to reach the Nth node from the end.
*/

class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}

function length(head) {
	let temp = head;
	let count = 0;
	while (temp != null) {
		count++;
		temp = temp.next;
	}
	return count;
}

function printList(head) {
	let ptr = head;
	while (ptr != null) {
		process.stdout.write(ptr.data + " ");
		ptr = ptr.next;
	}
	console.log();
}

function deleteNthNodeFromEnd(head, n) {
	let Length = length(head);
	let nodeFromBeginning = Length - n + 1;
	let prev = null;
	let temp = head;
	for (let i = 1; i < nodeFromBeginning; i++) {
		prev = temp;
		temp = temp.next;
	}
	if (prev == null) {
		head = head.next;
		return head;
	} else {
		prev.next = prev.next.next;
		return head;
	}
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Linked List before Deletion:");
printList(head);

head = deleteNthNodeFromEnd(head, 4);

console.log("Linked List after Deletion:");
printList(head);
