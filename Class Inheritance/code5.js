/**
 * Inheriting from built-in types
 * JavaScript allows you to extend a built-in type such as Array, String, Map, and Set through inheritance.
 * The following Queue class extends the Array reference type. The syntax is much cleaner than the Queue 
 * implemented using the constructor/prototype pattern. 
 */


class Queue extends Array {
  enqueue(e) {
      super.push(e);
  }
  dequeue() {
      return super.shift();
  }
  peek() {
      return !this.empty() ? this[0] : undefined;
  }
  empty() {
      return this.length === 0;
  }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
  console.log(customers.dequeue());
}