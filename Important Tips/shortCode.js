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


// 9. What is the output of prepend additive operator on falsy values

// If you prepend the additive(+) operator on falsy values(null, undefined, NaN, false, ""), 
// the falsy value converts to a number value zero. Let's display them on browser console as below,

console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+false); // 0
console.log(+NaN); // NaN
console.log(+""); // 0


// 10. What happens if we add two arrays

// If you add two arrays together, it will convert them both to strings and concatenate them. 
// For example, the result of adding arrays would be as below,

console.log(["a"] + ["b"]); // "ab"
console.log([] + []); // ""
console.log(![] + []); // "false", because ![] returns false.

// 11. negating an array

// Negating an array with ! character will coerce the array into a boolean. 
// Since Arrays are considered to be truthy So negating it will return false.

console.log(![]); // false

// 12. remove all line breaks from a string

// The easiest approach is using regular expressions to detect and replace newlines in the string. 
// In this case, we use replace function along with string to replace with, which in our case is an empty string.

function remove_linebreaks(message ) {
    return message.replace( /[\r\n]+/gm, "" );
}

// In the above expression, g and m are for global and multiline flags.


// 13. combine two or more arrays

// array1.concat(array2, array3 ... ,arrayX)
//Let's take an example of array's concatenation with veggies and fruits arrays,

var veggies = ["Tomato", "Carrot", "Cabbage"];
var fruits = ["Apple", "Orange", "Pears"];
var veggiesAndFruits = veggies.concat(fruits);
console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears


// 14. difference between a parameter and an argument
// Parameter is the variable name of a function definition whereas an argument represents the 
// value given to a function when it is invoked. Let's explain this with a simple function

function myFunction(parameter1, parameter2, parameter3) {
  console.log(arguments[0]); // "argument1"
  console.log(arguments[1]); // "argument2"
  console.log(arguments[2]); // "argument3"
}
myFunction("argument1", "argument2", "argument3");


// 15. the purpose of EvalError object
// The EvalError object indicates an error regarding the global eval() function. 
// Even though this exception is not thrown by JavaScript anymore, the EvalError object remains for compatibility. 
// The syntax of this expression would be as below,

// new EvalError([message[, fileName[, lineNumber]]])
// You can throw EvalError with in try...catch block as below,

try {
  throw new EvalError('Eval function error', 'someFile.js', 100);
} catch (e) {
  console.log(e.message, e.name, e.fileName);      // "Eval function error", "EvalError", "someFile.js"
}

// 16. 
// the purpose of Error object
// The Error constructor creates an error object and the instances of error objects are thrown when runtime errors occur. 
// The Error object can also be used as a base object for user-defined exceptions. The syntax of error object would be as below,

// new Error([message[, fileName[, lineNumber]]])
// You can throw user defined exceptions or errors using Error object in try...catch block as below,

try {
  if (withdraw > balance)
    throw new Error("Oops! You don't have enough balance");
} catch (e) {
  console.log(e.name + ": " + e.message);
}


// 17. ArrayBuffer
// An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can create it as below,

let buffer = new ArrayBuffer(16); // create a buffer of length 16
console.log(buffer.byteLength); // 16
// To manipulate an ArrayBuffer, we need to use a “view” object.

//Create a DataView referring to the buffer
let view = new DataView(buffer);

// 18. the purpose of double tilde operator
// The double tilde operator(~~) is known as double NOT bitwise operator. 
// This operator is a slightly quicker substitute for Math.floor().


// 19. the output of below spread operator array
[..."John Resig"];
// The output of the array is ['J', 'o', 'h', 'n', '', 'R', 'e', 's', 'i', 'g'] Explanation: The string 
// is an iterable type and the spread operator within an array maps every character of an iterable to one element. 
// Hence, each character of a string becomes an element within an Array.


// 20. dynamic imports
// The dynamic imports using import() function syntax allows us to load modules on demand by 
// using promises or the async/await syntax. Currently this feature is in stage4 proposal. 
// The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload 
// response of our requests and overall improvements in the user experience. The syntax of dynamic imports would be as below,

import("./Module").then((Module) => Module.method());


// 21. swap variables in destructuring assignment

var x = 10,
  y = 20;

[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10

// 22. default values in destructuring assignment

// Arrays destructuring:
var x, y, z;

[x = 2, y = 4, z = 6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6

// Objects destructuring:
var { x = 2, y = 4, z = 6 } = { x: 10 };

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6


// 23. destructuring assignment

var [one, two, three] = ["JAN", "FEB", "MARCH"];

console.log(one); // "JAN"
console.log(two); // "FEB"
console.log(three); // "MARCH"

var { name, age } = { name: "John", age: 32 };

console.log(name); // John
console.log(age); // 32

// 24. template literals

var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;
// In ES5, you need break string like below,

var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName + '.';

// 25. Default parameters

//ES5
var calculateArea = function (height, width) {
  height = height || 50;
  width = width || 60;

  return width * height;
};
console.log(calculateArea()); //300

// The default parameters makes the initialization more simpler,

//ES6
var calculateArea = function (height = 50, width = 60) {
  return width * height;
};

console.log(calculateArea()); //300

// 26. Is const variable makes the value immutable
// No, the const variable doesn't make the value immutable. But it disallows subsequent 
// assignments(i.e, You can declare with assignment but can't assign another value later)
const userList = [];
userList.push("John"); // Can mutate even though it can't re-assign
console.log(userList); // ['John']

// 27. some of the features of ES6
// Below are the list of some new features of ES6,
/**
  Support for constants or immutable variables
  Block-scope support for variables, constants and functions
  Arrow functions
  Default parameters
  Rest and Spread Parameters
  Template Literals
  Multi-line Strings
  Destructuring Assignment
  Enhanced Object Literals
  Promises
  Classes
  Modules
 */

  // 28. output of below for loops
for (var i = 0; i < 4; i++) {
  // global scope
  setTimeout(() => console.log(i));
}

for (let i = 0; i < 4; i++) {
  // block scope
  setTimeout(() => console.log(i));
}
// The output of the above for loops is 4 4 4 4 and 0 1 2 3


// 28. Why do you need to avoid with statement
// JavaScript's with statement was intended to provide a shorthand for writing recurring accesses 
// to objects. So it can help reduce file size by reducing the need to repeat a lengthy object 
// reference without performance penalty. Let's take an example where it is used to avoid redundancy 
// when accessing an object several times.

a.b.c.greeting = "welcome";
a.b.c.age = 32;
// Using with it turns this into:

with (a.b.c) {
  greeting = "welcome";
  age = 32;
}
// But this with statement creates performance problems since one cannot predict whether an 
// argument will refer to a real variable or to a property inside the with argument.


// 29. load CSS and JS files dynamically

function loadAssets(filename, filetype) {
  if (filetype == "css") {
    // External CSS file
    var fileReference = document.createElement("link");
    fileReference.setAttribute("rel", "stylesheet");
    fileReference.setAttribute("type", "text/css");
    fileReference.setAttribute("href", filename);
  } else if (filetype == "js") {
    // External JavaScript file
    var fileReference = document.createElement("script");
    fileReference.setAttribute("type", "text/javascript");
    fileReference.setAttribute("src", filename);
  }
  if (typeof fileReference != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileReference);
}

// 30. invoke javascript code in an iframe from parent page
// Initially iFrame needs to be accessed using either document.getElementBy or window.frames. 
// After that contentWindow property of iFrame gives the access for targetFunction

document.getElementById("targetFrame").contentWindow.targetFunction();
window.frames[0].frameElement.contentWindow.targetFunction(); 
// Accessing iframe this way may not work in latest versions chrome and firefox

// 31. Namespace in JavaScript
// JavaScript doesn’t support namespace by default. So if you create any element(function, method, object, variable) 
// then it becomes global and pollutes the global namespace. Let's take an example of defining two functions without 
// any namespace,

function func1() {
  console.log("This is a first definition");
}
function func1() {
  console.log("This is a second definition");
}
func1(); // This is a second definition
// It always calls the second function definition. In this case, namespace will solve the name collision problem.


// 32. print numbers with commas as thousand separators
// You can use the Number.prototype.toLocaleString() method which returns a string with a language-sensitive 
// representation such as thousand separator,currency etc of this number.

function convertToThousandFormat(x) {
  return x.toLocaleString(); // 12,345.679
}

console.log(convertToThousandFormat(12345.6789));


// 33. get the value from get parameters

/** The new URL() object accepts the url string and searchParams property of this object can be used to 
 * access the get parameters. Remember that you may need to use polyfill or window.location to access 
 * the URL in older browsers(including IE).
 */ 

let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
let url = new URL(urlString);
let parameterZ = url.searchParams.get("z");
console.log(parameterZ); // 3