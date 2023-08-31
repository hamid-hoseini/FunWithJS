// create your own bind method using either call or apply method

/**
 * To create your own bind method using call or apply, you can define a new 
 * function that returns a function with the desired context (this value) 
 * and partially applied arguments. Here's an example implementation of bind using call:
 */

// Example1:

// Custom bind implementation using call
Function.prototype.customBind = function (context, ...args) {
  const originalFunction = this; // Reference to the original function

  return function (...additionalArgs) {
    return originalFunction.call(context, ...args, ...additionalArgs);
  };
};

/** 
 * In the above example, customBind is added as a method to the Function.prototype, 
 * which means it will be available on all function objects.
 */


/**
 * The implementation creates a closure by capturing the reference to the original 
 * function (this) and the provided context and arguments. It returns a new function that, 
 * when invoked, uses call to execute the original function with the desired context and the combined arguments.
 */

// Example function
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

// Create a bound function
const boundFunction = greet.customBind({ name: 'John' }, 'Hello');

// Call the bound function
boundFunction(); // Output: Hello, John!

/**
 * In this example, the greet function is defined, and the customBind method is used to 
 * create a new function called boundFunction. The boundFunction is bound to the provided 
 * context { name: 'John' } and partially applied with the argument 'Hello'. 
 * When boundFunction is called, it executes the greet function with the specified 
 * context and arguments, producing the expected output.
 */

// Example2

Function.prototype.myOwnBind = function(whoIsCallingMe) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  const boundTargetFunction = this;
  return function() {
    boundTargetFunction.apply(whoIsCallingMe, arguments);
  }
}