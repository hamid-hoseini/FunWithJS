class Node{
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(val){
      this.val = val
      this.next = null
  }
}

// We create a class for the list
class SinglyLinkedList{
  // The list has three properties, the head, the tail and the list size
  constructor(){
      this.head = null
      this.tail = null
      this.length = 0
  }
  // The push method takes a value as parameter and assigns it as the tail of the list
  push(val) {
      const newNode = new Node(val)
      if (!this.head){
          this.head = newNode
          this.tail = this.head
      } else {
          this.tail.next = newNode
          this.tail = newNode
      }
      this.length++
      return this
  }
  // The pop method removes the tail of the list
  pop() {
      if (!this.head) return undefined
      const current = this.head
      const newTail = current
      while (current.next) {
          newTail = current
          current = current.next
      }
      this.tail = newTail
      this.tail.next = null
      this.length--
      if (this.length === 0) {
          this.head = null
          this.tail = null
      }
      return current
  }
  // The shift method removes the head of the list
  shift() {
      if (!this.head) return undefined
      var currentHead = this.head
      this.head = currentHead.next
      this.length--
      if (this.length === 0) {
          this.tail = null
      }
      return currentHead
  }
  // The unshift method takes a value as parameter and assigns it as the head of the list
  unshift(val) {
      const newNode = new Node(val)
      if (!this.head) {
          this.head = newNode
          this.tail = this.head
      }
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
  }
  // The get method takes an index number as parameter and returns the value of the node at that index
  get(index) {
      if(index < 0 || index >= this.length) return null
      const counter = 0
      const current = this.head
      while(counter !== index) {
          current = current.next
          counter++
      }
      return current
  }
  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set(index, val) {
      const foundNode = this.get(index)
      if (foundNode) {
          foundNode.val = val
          return true
      }
      return false
  }

}