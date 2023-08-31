// What are compose and pipe functions?

/**
 In functional programming, both compose and pipe are higher-order functions used to combine multiple functions together. 
 They facilitate function composition by creating a new function that applies a series of functions to an input value.
 Both compose and pipe serve a similar purpose, but they differ in the order of function execution and the direction 
 of data flow.

 compose function:
 The compose function combines functions from right to left, where the output of one function becomes the input of 
 the next function. It applies the functions in reverse order.
 */

 // Example:

 const add = (x) => x + 2;
const multiply = (x) => x * 3;
const subtract = (x) => x - 4;

const composedFunction = compose(subtract, multiply, add);
const result = composedFunction(5);
console.log(result); // Output: 21

/**
 * In the above example, the compose function combines the subtract, multiply, and add functions. 
 * When composedFunction is called with the argument 5, it applies the functions in reverse 
 * order: add(5), multiply(add(5)), and subtract(multiply(add(5))), which results in 21.
 */


/**
 * pipe function:
The pipe function, on the other hand, combines functions from left to right, 
where the output of one function becomes the input of the next function. It applies the 
functions in the order they are passed.
 */

// Example:
const add1 = (x) => x + 2;
const multiply1 = (x) => x * 3;
const subtract1 = (x) => x - 4;

const pipedFunction = pipe(add1, multiply1, subtract1);
const result1 = pipedFunction(5);
console.log(result); // Output: 39

/**
 * In this example, the pipe function combines the add, multiply, and subtract functions. 
 * When pipedFunction is called with the argument 5, it applies the functions in the order 
 * they are passed: subtract(multiply(add(5))), which results in 39.

 * Both compose and pipe enable function composition and can be used to create complex operations 
 * by combining simpler functions. The choice between them depends on the desired order of function 
 * execution and data flow in your specific use case.
 */