// Reverse an array without modifying original array

/**
 * The reverse() method reverses the order of the elements in an array but it 
 * mutates the original array. Let's take a simple example to demonistrate this case,
 */

const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.reverse();

console.log(newArray); // [ 5, 4, 3, 2, 1]
console.log(originalArray); // [ 5, 4, 3, 2, 1]

//There are few solutions that won't mutate the original array. Let's take a look. 

// Solution1:
/**
 * Using slice and reverse methods: In this case, just invoke the slice() method on the 
 * array to create a shallow copy followed by reverse() method call on the copy.
 */

const originalArray1 = [1, 2, 3, 4, 5];
const newArray1 = originalArray.slice().reverse(); //Slice an array gives a new copy

console.log(originalArray1); // [1, 2, 3, 4, 5]
console.log(newArray1); // [ 5, 4, 3, 2, 1]

//Solution2: 
/**
 * Using spread and reverse methods: In this case, let's use the spread syntax (...) to create 
 * a copy of the array followed by reverse() method call on the copy.
 */

const originalArray2 = [1, 2, 3, 4, 5];
const newArray2 = [...originalArray].reverse();

console.log(originalArray2); // [1, 2, 3, 4, 5]
console.log(newArray2); // [ 5, 4, 3, 2, 1]

//Solution3
/**
 * Using reduce and spread methods: Here execute a reducer function on an array elements and 
 * append the accumulated array on right side using spread syntax
 */

const originalArray3 = [1, 2, 3, 4, 5];
const newArray3 = originalArray.reduce((accumulator, value) => {
  return [value, ...accumulator];
}, []);

console.log(originalArray3); // [1, 2, 3, 4, 5]
console.log(newArray3); // [ 5, 4, 3, 2, 1]

//Solution4: 
/**
 * Using reduceRight and spread methods: Here execute a right reducer function(i.e. 
 * opposite direction of reduce method) on an array elements and append the accumulated array on left side using spread syntax
 */

const originalArray4 = [1, 2, 3, 4, 5];
const newArray4 = originalArray.reduceRight((accumulator, value) => {
  return [...accumulator, value];
}, []);

console.log(originalArray4); // [1, 2, 3, 4, 5]
console.log(newArray4); // [ 5, 4, 3, 2, 1]

//Solution5:
/**
 * Using reduceRight and push methods: Here execute a right reducer function(i.e. opposite direction of reduce method) on an 
 * array elements and push the iterated value to the accumulator
 */

const originalArray5 = [1, 2, 3, 4, 5];
const newArray5 = originalArray.reduceRight((accumulator, value) => {
  accumulator.push(value);
  return accumulator;
}, []);

console.log(originalArray5); // [1, 2, 3, 4, 5]
console.log(newArray5); // [ 5, 4, 3, 2, 1]