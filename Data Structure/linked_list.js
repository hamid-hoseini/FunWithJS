class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

   removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

    search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

    reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value} -> `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const ll = new LinkedList();

console.log(ll.isEmpty());          // True
ll.append(50);                     
ll.prepend(20);
ll.append(80);
ll.insert(60, 2);
console.log(ll.getSize());          // 4
ll.print();                         // 20 -> 50 -> 60 -> 80 ->
ll.reverse();           
ll.print();                         // 80 -> 60 -> 50 -> 20 -> 
console.log(ll.search(60));         // 1
ll.removeFrom(4);
console.log(ll.getSize());          // 4
ll.print();                         // 80 -> 60 -> 50 -> 20 -> 
ll.removeValue(80);
ll.print();                         // 60 -> 50 -> 20 -> 
console.log(l.getSize());           // 3
ll.print();                         // 60 -> 50 -> 20 -> 


// In JavaScript, a linked list looks like this:

const list = {
  head: {
      value: 6,
      next: {
          value: 10,
          next: {
              value: 12,
              next: {
                  value: 3,
                  next: null	
                  }
              }
          }
      }
}

/**
An advantage of Linked Lists:
- Nodes can easily be removed or added from a linked list without reorganizing the entire 
data structure. This is one advantage it has over arrays.

Disadvantages of Linked Lists:
- Search operations are slow in linked lists. Unlike arrays, random access of data elements 
is not allowed. Nodes are accessed sequentially starting from the first node.
- It uses more memory than arrays because of the storage of the pointers.

Singly linked lists methods have the following complexities:

  Insertion - O(1)
  Removal - O(n)
  Search - O(n)
  Access - O(n)
*/