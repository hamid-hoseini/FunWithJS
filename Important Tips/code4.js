// What is Function Composition?

/**
 * Function composition in JavaScript refers to the process of combining multiple functions together to create a new function.
 * The output of one function becomes the input of the next function, forming a chain of operations.
 * In functional programming, function composition allows you to create complex operations by composing simpler functions. 
 * It promotes code reuse, modularity, and the separation of concerns.
 * Here's an example to illustrate function composition in JavaScript:
 */

// Example1:

// Example functions
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;

// Function composition
const compose = (...functions) => (input) =>
  functions.reduceRight((acc, fn) => fn(acc), input);

// Compose the functions together
const calculate = compose(add, multiply, subtract);

// Usage
const result = calculate(5, 2); // Equivalent to add(multiply(subtract(5, 2)))
console.log(result); // Output: 9

/**
 * In the above example, add, multiply, and subtract are simple functions that perform basic arithmetic operations. 
 * The compose function accepts any number of functions and returns a new function that represents their composition. 
 * The returned function can then be invoked with the desired arguments.
 * By using function composition, the calculate function is created by composing the add, multiply, and subtract functions. 
 * When calculate is called with arguments 5 and 2, it performs the operations in the order specified (subtract, multiply, add) and returns the final result (9 in this case).
 * Function composition allows you to build complex and reusable operations by combining smaller, focused functions, 
 * enabling a more declarative and modular coding style.
 */

// Example2:

/** 
 * It is an approach where the result of one function is passed on to the next function, 
 * which is passed to another until the final function is executed for the final result.
*/
 
const double = x => x * 2
 const square = x => x * x

 var output1 = double(2);
 var output2 = square(output1);
 console.log(output2);

 var output_final = square(double(2));
 console.log(output_final);