// different kinds of generators


//There are five kinds of generators,

// 1. Generator function declaration:
function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
const genObj = myGenFunc();

// 2. Generator function expressions:

const myGenFunc = function* () {
  yield 1;
  yield 2;
  yield 3;
};
const genObj1 = myGenFunc();

// 3. Generator method definitions in object literals:

const myObj = {
  *myGeneratorMethod() {
    yield 1;
    yield 2;
    yield 3;
  },
};
const genObj2 = myObj.myGeneratorMethod();

// 4. Generator method definitions in class:

class MyClass {
  *myGeneratorMethod() {
    yield 1;
    yield 2;
    yield 3;
  }
}
const myObject = new MyClass();
const genObj3 = myObject.myGeneratorMethod();

// 5. Generator as a computed property:

const SomeObj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]