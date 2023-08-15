/**
 * ES6 simplified these steps by using the extends and super keywords.
 * The following example defines the Animal and Bird classes and establishes 
 * the inheritance through the extends and super keywords.
 */

class Animal {
  constructor(legs) {
      this.legs = legs;
  }
  walk() {
      console.log('walking on ' + this.legs + ' legs');
  }
}

class Bird extends Animal {
  constructor(legs) {
      super(legs);
  }
  fly() {
      console.log('flying');
  }
}


let bird = new Bird(2);

bird.walk();
bird.fly();
