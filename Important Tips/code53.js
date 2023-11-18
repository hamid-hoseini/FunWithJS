// add getters and setters using defineProperty method

/** Yes, You can use the Object.defineProperty() method to add Getters and Setters. 
 * For example, the below counter object uses increment, decrement, add and subtract properties,
 */

var obj = { counter: 0 };

// Define getters
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});

// Define setters
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

obj.add = 10;
obj.subtract = 5;
console.log(obj.increment); //6
console.log(obj.decrement); //5


/**
  advantages of Getters and Setters
  Below are the list of benefits of Getters and Setters,

  They provide simpler syntax
  They are used for defining computed properties, or accessors in JS.
  Useful to provide equivalence relation between properties and methods
  They can provide better data quality
  Useful for doing things behind the scenes with the encapsulated logic.
 */