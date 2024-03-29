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


/*
Solution: Two Pointer Approach – Slow and Fast Pointers

This problem can be solved by using two pointer approach as below:

Take two pointers – fast and slow. And initialize their values as head node
Iterate fast pointer till the value of n.
Now, start iteration of fast pointer till the None value of the linked list. Also, iterate slow pointer.
Hence, once the fast pointer will reach to the end the slow pointer will reach the node which you want to delete.
Replace the next node of the slow pointer with the next to next node of the slow pointer.
*/


class Node{
	constructor(data){
		this.data = data
		this.next = null
	}
}


class LinkedList{
	constructor(){
		this.head = null
	}

	push(data){
		let new_node = new Node(data)
		new_node.next =this.head
		this.head = new_node
	}

	display(){
		let temp =this.head
		while(temp != null){
			document.write(temp.data,"</br>")
			temp = temp.next
		}
	}

	deleteNthNodeFromEnd(head, n){
		let fast = head
		let slow = head

		for(let i=0;i<n;i++){
			fast = fast.next
		}

		if(!fast)
			return head.next

		while(fast.next){
			fast = fast.next
			slow = slow.next
		}

		slow.next = slow.next.next
		return head
	}
}


// driver code

let l = new LinkedList()
l.push(5)
l.push(4)
l.push(3)
l.push(2)
l.push(1)
document.write('***** Linked List Before deletion *****',"</br>")
l.display()

document.write('************** Delete nth Node from the End *****',"</br>")
l.deleteNthNodeFromEnd(l.head, 2)

document.write('*********** Linked List after Deletion *****',"</br>")
l.display()

/*
Time complexity: O(n)

Space complexity: O(1) using constant space
*/



