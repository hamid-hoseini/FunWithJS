// make an object iterable in javascript

// By default, plain objects are not iterable. But you can make the object 
// iterable by defining a Symbol.iterator property on it.

// Example:

const collection = {
  one: 1,
  two: 2,
  three: 3,
  [Symbol.iterator]() {
    const values = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        return {
          value: this[values[i++]],
          done: i > values.length,
        };
      },
    };
  },
};

const iterator = collection[Symbol.iterator]();

console.log(iterator.next()); // → {value: 1, done: false}
console.log(iterator.next()); // → {value: 2, done: false}
console.log(iterator.next()); // → {value: 3, done: false}
console.log(iterator.next()); // → {value: undefined, done: true}

// The above process can be simplified using a generator function,

const collection1 = {
  one: 1,
  two: 2,
  three: 3,
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield this[key];
    }
  },
};
const iterator1 = collection[Symbol.iterator]();
console.log(iterator1.next()); // {value: 1, done: false}
console.log(iterator1.next()); // {value: 2, done: false}
console.log(iterator1.next()); // {value: 3, done: false}
console.log(iterator1.next()); // {value: undefined, done: true}

