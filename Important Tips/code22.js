// differences between spread operator and rest parameter

// Spread operator in function call
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers); // Output: 1 2 3 4 5

// Spread operator in array literal
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// In the first example, the spread operator is used in a function call to 
// pass individual elements of the `numbers` array as separate arguments. 
// In the second example, the spread operator is used in an array literal to combine 
// elements from `arr1` with additional elements.

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// In this example, the rest parameter `...numbers` allows the `sum` 
// function to accept any number of arguments. All the arguments are gathered 
// into the `numbers` array, which can then be iterated to calculate the sum.