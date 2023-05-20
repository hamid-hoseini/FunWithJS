class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());   // return true
stack.push(34);
stack.push(12);
stack.push(17);
console.log(stack.size());  // return 3
stack.print();  // return 34, 12, 17
console.log(stack.pop()); 
console.log(stack.peek());  // return 12
stack.print();  // return 34, 12