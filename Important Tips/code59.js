// rest parameter

/** Rest parameter is an improved way to handle function parameters which allows us to 
 * represent an indefinite number of arguments as an array. The syntax would be as below,
 */ 

function f(a, b, ...theArgs) {
  // ...
}

//For example, let's take a sum example to calculate on dynamic number of parameters,

function sum(...args) {
  let total = 0;
  for (const i of args) {
    total += i;
  }
  return total;
}

console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4)); //13
console.log(sum(1, 2, 3, 4, 5)); //15
// Note: Rest parameter is added in ES2015 or ES6