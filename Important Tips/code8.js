// What is pass by value and pass by reference?

// "Pass by value" and "pass by reference" are two different mechanisms for passing 
// arguments to functions, which determine how the values are handled and accessed within the function.

/**
 * 1. Pass by Value:
   - In pass by value, a copy of the value is passed to the function.
   - The original variable outside the function and the parameter inside the function are separate entities with their own memory locations.
   - Modifying the parameter within the function does not affect the original variable.
   - The relationship between the original variable and the parameter is one of copying the value, rather than sharing the same memory location.
 */

// Example of pass by value in JavaScript:

function increment(number) {
  number += 1;
  console.log(number); // Output: 6
}

let num = 5;
increment(num);
console.log(num); // Output: 5


// In this example, the variable `num` is passed as an argument to the `increment` function. However, any modifications made to the `number` parameter inside the function do not affect the original `num` variable.

/** 
 * 2. Pass by Reference:
   - In pass by reference, a reference (memory address) to the original value is passed to the function.
   - The original variable outside the function and the parameter inside the function both point to the same memory location.
   - Modifying the parameter within the function affects the original variable since they share the same memory location.
   - The relationship between the original variable and the parameter is one of sharing the same memory location.
*/


// Example 
function changeName(obj) {
  obj.name = 'Alice';
  console.log(obj.name); // Output: Alice
}

let person = { name: 'John' };
changeName(person);
console.log(person.name); // Output: Alice


//** In this example, the object `person` is passed as an argument to the `changeName` function. 
/* The `obj` parameter inside the function references the same memory location as the `person` object. 
/* Therefore, modifying the `name` property of `obj` also modifies the `person` object.
/* It's important to note that although JavaScript is often described as using "pass by value," 
/* when dealing with non-primitive types like objects and arrays, the values being passed are actually references. 
/* This can create confusion, as modifications to properties or elements within the referenced value can be 
/* observed outside the function, giving the impression of pass by reference behavior.
*/