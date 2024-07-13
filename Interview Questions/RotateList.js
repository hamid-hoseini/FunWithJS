// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/rotate-a-linked-list/
Given a singly linked list, The task is to rotate the linked list counter-clockwise by k nodes.

Examples:

Input: linked list = 10->20->30->40->50->60, k = 4
Output: 50->60->10->20->30->40. 
Explanation: k is smaller than the count of nodes in a linked list so (k+1 )th node i.e. 50 becomes 
the head node and 60’s next points to 10

Input: linked list = 30->40->50->60, k = 2
Output: 50->60->30->40. 
*/

// Solution:

// Javascript program to rotate a linked list 

var head; // head of list 

/* Linked list Node */
class Node { 
	constructor(val) { 
		this.data = val; 
		this.next = null; 
	} 
} 

// This function rotates a linked 
// list counter-clockwise 
// and updates the head. 
// The function assumes that k is 
// smaller than size of linked list. 
// It doesn't modify 
// the list if k is greater than or equal to size 
function rotate(k) { 
	if (k == 0) 
		return; 

	// Let us understand the 
	// below code for example k = 4 
	// and list = 10->20->30->40->50->60. 
	var current = head; 

	// current will either point to kth 
	// or NULL after this 
	// loop. current will point to node 
	// 40 in the above example 
	var count = 1; 
	while (count < k && current != null) { 
		current = current.next; 
		count++; 
	} 

	// If current is NULL, k is greater 
	// than or equal to count 
	// of nodes in linked list. 
	// Don't change the list in this case 
	if (current == null) 
		return; 

	// current points to kth node. 
	// Store it in a variable. 
	// kthNode points to node 40 
	// in the above example 
	var kthNode = current; 

	// current will point to last 
	// node after this loop 
	// current will point to node 
	// 60 in the above example 
	while (current.next != null) 
		current = current.next; 

	// Change next of last node to previous head 
	// Next of 60 is now changed to node 10 

	current.next = head; 

	// Change head to (k+1)th node 
	// head is now changed to node 50 
	head = kthNode.next; 

	// change next of kth node to null 
	kthNode.next = null; 
} 

/* 
* Given a reference (pointer to pointer) to 
the head of a list and an int, push 
a new node on the front of the list. 
*/
function push(new_data) { 
	/* 
	1 & 2: Allocate the Node & Put in the data 
	*/
var new_node = new Node(new_data); 

	/* 3. Make next of new Node as head */
	new_node.next = head; 

	/* 4. Move the head to point to new Node */
	head = new_node; 
} 

function printList() { 
var temp = head; 
	while (temp != null) { 
		document.write(temp.data + " "); 
		temp = temp.next; 
	} 
	document.write("<br/>"); 
} 

/* Driver program to test above functions */

// create a list 10->20->30->40->50->60 
for (i = 60; i >= 10; i -= 10) 
	push(i); 

document.write("Given list<br/>"); 
printList(); 

rotate(4); 

document.write("Rotated Linked List<br/>"); 
printList(); 


// Time Complexity: O(N), where N is the number of nodes in Linked List.
// Auxiliary Space: O(1)


// Solution 2:

/*
Another Approach: Rotate the linked list k times by placing the first element at the end.

The idea is to traverse the given list to find the last element and store it in a node. Now we need to
make the next of last element as the current head, which we can do by storing head in temporary node. Repeat the process k time.

Follow the steps below to implement the above idea:

Return head if the head is NULL or k=0.
Initialize a node last and make it point to the last node of the given list.
Make a temporary node pointing to head.
while k>0 run a loop :
make temp as last node and head point to next of head.
Below is the implementation of the above approach:
*/


// Javascript program to rotate a linked list 
var head; 
class Node{ 
	constructor(val){ 
		this.data = val; 
		this.next = null; 
	} 
} 

// Function to rotate a linked list. 
function rotate(k) 
{ 

	// let us consider the example 
	// 10->20->30->40->50->60 - k=4 
	// initialising 2 nodes temp and last 
	var last = head; 
	var temp = head; 
	
	// if head is null or k==0 no rotation is required 
	if(head == null || k == 0) return head; 
	
	// Making last point to the last-node of the given 
	// linked list in this case 60 
	while(last.next != null) 
		last = last.next; 
		
	// Rotating the linked list k times, one rotation at a 
	// time. 
	while(k != 0){ 
		// Make head point to next of head 
		// so in the example given above head becomes 20 
		head = head.next; 
		
		// Making next of temp as NULL 
		// In the above example :10->NULL 
		temp.next = null; 
		
		// Making temp as last node 
		// (head)20->30->40->50->60->10(last) 
		last.next = temp; 
		last = temp; 

		// Point temp to head again for next rotation 
		temp = head; 
		k--; 
	} 
} 

function printList() { 
	var temp = head; 
	while (temp != null) { 
		document.write(temp.data + " "); 
		temp = temp.next; 
	} 
	console.log("\n"); 
} 

function push(new_data){ 
	// 1 & 2: Allocate the Node & Put in the data 
	var new_node = new Node(new_data); 
	
	// 3. Make next of new Node as head 
	new_node.next = head; 
	
	// 4. Move the head to point to new Node 
	head = new_node; 
} 

for (let i = 60; i >= 10; i -= 10) 
	push(i); 
	
console.log("Given list : \n"); 
printList(); 
	
rotate(4); 
	
console.log("Rotated Linked List : \n"); 
printList(); 

// Time Complexity: O(N)
// Auxiliary Space: O(1)
