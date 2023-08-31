// What is referential transparency

/**
 * Referential transparency is a key concept in functional programming that describes a property of 
 * an expression or function. An expression or function is said to be referentially transparent if 
 * it can be replaced with its resulting value without affecting the program's behavior.

In other words, if a function, when given the same inputs, always produces the same 
output and has no side effects, then it is referentially transparent.
 */

// Example:

// Non-referentially transparent function
let x = 5;
const add = (y) => x + y;

console.log(add(3)); // Output: 8

x = 10;
console.log(add(3)); // Output: 13

// Referentially transparent function
const addRT = (x, y) => x + y;

console.log(addRT(5, 3)); // Output: 8
console.log(addRT(10, 3)); // Output: 13

/**
 * In the above example, the function add is not referentially transparent because its behavior
 *  depends on the external variable x. When x is modified, the result of add changes, even when 
 * provided the same input. This lack of referential transparency can make the code harder to 
 * reason about, as the behavior of add depends on factors beyond its input.

On the other hand, the function addRT is referentially transparent. It takes two arguments and 
returns their sum. The output solely depends on the input values, and there are no side effects 
or external factors affecting the result.
 */

/**
 * Referential transparency has several benefits in functional programming, including:

Easier reasoning and understanding:
 Referentially transparent code is predictable and easier to understand because the behavior of 
 functions is solely based on their inputs.

Simplified testing: 
Referentially transparent functions can be tested more easily since their output is solely determined by 
their inputs. There are no hidden dependencies or side effects to consider.

Improved optimization and caching: 
The compiler or interpreter can optimize and cache the result of a referentially transparent 
expression or function, as it knows the result will not change given the same inputs.

By embracing referential transparency, functional programming promotes modularity, 
testability, and code that is less prone to bugs and side effects.
 */