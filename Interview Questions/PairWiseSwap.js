// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.)

Input : 1->2->3->4->5->6->NULL 
Output : 2->1->4->3->6->5->NULL

Input : 1->2->3->4->5->NULL 
Output : 2->1->4->3->5->NULL

Input: 1->NULL 
Output: 1->NULL 
*/

// JavaScript program to pairwise swap 
// elements of a linked list
var head; // head of list
 
    /* Linked list Node */
    class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
    function pairWiseSwap() {
var temp = head;
 
        /* Traverse only till there are 
        atleast 2 nodes left */
        while (temp != null && temp.next != null) {
 
            /* Swap the data */
            var k = temp.data;
            temp.data = temp.next.data;
            temp.next.data = k;
            temp = temp.next.next;
        }
    }
 
    /* Utility functions */
 
    /* Inserts a new Node at front of the list. */
     function push(new_data) {
        /*
         * 1 & 2: Allocate the Node & Put in the data
         */
var new_node = new Node(new_data);
 
        /* 3. Make next of new Node as head */
        new_node.next = head;
 
        /* 4. Move the head to point to new Node */
        head = new_node;
    }
 
    /* Function to print linked list */
    function printList() {
var temp = head;
        while (temp != null) {
            document.write(temp.data + " ");
            temp = temp.next;
        }
        document.write("<br/>");
    }
 
    /* Driver program to test above functions */
     
 
 
        /* Created Linked List 1->2->3->4->5 */
        push(5);
        push(4);
        push(3);
        push(2);
        push(1);
 
        document.write(
        "Linked List before calling pairWiseSwap() <br/>"
        );
        printList();
 
        pairWiseSwap();
 
        document.write(
        "Linked List after calling pairWiseSwap()<br/> "
        );
        printList();


// Time complexity: O(N), As we traverse the linked list only once.
// Auxiliary Space: O(1), As constant extra space is used.


// Solution 2:

/*
METHOD 2 (Recursive) 
If there are 2 or more than 2 nodes in Linked List then swap the first two 
nodes and recursively call for the rest of the list.
*/

function pairWiseSwap(head)
{
    /* There must be at-least two nodes in the list */
    if (head != null && head.next != null) {
  
        /* Swap the node's data with data of next node */
        swap(head.data, head.next.data);
  
        /* Call pairWiseSwap() for rest of the list */
        pairWiseSwap(head.next.next);
    }
}

// Time complexity: O(n)
// Auxiliary Space: O(1), As it is a tail recursive function, 
// function call stack would not be build and thus no extra space will be used.
