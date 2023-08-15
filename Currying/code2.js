/**
 * Prior to ES6, implementing a proper inheritance required multiple steps. 
 * One of the most commonly used strategies is prototypal inheritance. 
 */

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function() {
  console.log('walking on ' + this.legs + ' legs');
}

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;


Bird.prototype.fly = function() {
  console.log('flying');
}

var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly();  // flying
