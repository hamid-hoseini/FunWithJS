/**
 * Inheriting static members
 * Besides the properties and methods, the child class also inherits all 
 * static properties and methods of the parent class. For example:
 */

class Animal {
  constructor(legs) {
      this.legs = legs;
  }
  walk() {
      console.log('walking on ' + this.legs + ' legs');
  }
  static helloWorld() {
      console.log('Hello World');
  }
}

class Bird extends Animal {
  fly() {
      console.log('flying');
  }
}

console.log(Bird.helloWorld()); // Hello World