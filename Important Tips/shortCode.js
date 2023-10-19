// 1. create copy to clipboard button

/**
 * You need to select the content(using .select() method) of the input element and 
 * execute the copy command with execCommand (i.e, execCommand('copy')). 
 * You can also execute other system commands like cut and paste.
 */


document.querySelector("#copy-button").onclick = function () {
  // Select the content
  document.querySelector("#copy-input").select();
  // Copy to the clipboard
  document.execCommand("copy");
};

// 2. create an array with some data

// You can create an array with some data or an array with the same values using fill method.

var newArray = new Array(5).fill("0");
console.log(newArray); // ["0", "0", "0", "0", "0"]


// 3. easiest way to convert an array to an object

// You can convert an array to an object with the same data using spread(...) operator.

var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits };
console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}


// 4. rounding numbers to certain decimals

//You can round numbers to a certain number of decimals using toFixed method from native javascript.

let pie = 3.141592653;
pie = pie.toFixed(3); // 3.142


// 5. map the array values without using map method

// You can map the array values without using the map method by just using the from method of Array. Let's map city names from Countries array,

const countries = [
  { name: "India", capital: "Delhi" },
  { name: "US", capital: "Washington" },
  { name: "Russia", capital: "Moscow" },
  { name: "Singapore", capital: "Singapore" },
  { name: "China", capital: "Beijing" },
  { name: "France", capital: "Paris" },
];

const cityNames = Array.from(countries, ({ capital }) => capital);
console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']


// 6. destructuring aliases

// Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a : newName to specify a name for the variable. This process is called destructuring aliases.

const obj = { x: 1 };
// Grabs obj.x as as { otherName }
const { x: otherName } = obj;


// 7. get unique values of an array

// You can get unique values of an array with the combination of Set and rest expression/spread(...) syntax.

console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]


// 8. remove falsy values from an array

// You can apply the filter method on the array by passing Boolean as a parameter. This way it removes all falsy values(0, undefined, null, false and "") from the array.

const myArray = [false, null, 1, 5, undefined];
myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);