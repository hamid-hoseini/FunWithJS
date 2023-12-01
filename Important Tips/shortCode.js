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


// 34. check whether an array includes a particular value or not

var numericArray = [1, 2, 3, 4];
console.log(numericArray.includes(3)); // true

var stringArray = ["green", "yellow", "blue"];
console.log(stringArray.includes("blue")); //true


// 35. modify the url without reloading the page

/** The window.location.href property will be helpful to modify the url but it reloads the page. 
 * HTML5 introduced the history.pushState() and history.replaceState() methods, which allow you to 
 * add and modify history entries, respectively. For example, you can use pushState as below,
 */ 

window.history.pushState("page2", "Title", "/page2.html");


// 35. list all properties of an object

/** You can use the Object.getOwnPropertyNames() method which returns an array of all properties 
 * found directly in a given object. Let's the usage of it in an example,
 */ 

const newObject = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(newObject));
["a", "b", "c"];

// 36. enum
/** An enum is a type restricting variables to one value from a predefined set of constants. 
 * JavaScript has no enums but typescript provides built-in enum support.
 
enum Color {
 RED, GREEN, BLUE
}

*/

/** In JavaScript, an enum (short for enumeration) is not a built-in language feature like 
 * in some other programming languages. However, you can achieve similar functionality by 
 * using objects or constants to represent a set of predefined values.

Here's an example of how you can create an "enum-like" structure using objects:
*/

const Colors = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue'
};

console.log(Colors.RED);  // Output: 'red'


// 37. example usage of rangeOverflow property

/** If an element's value is greater than its max attribute then rangeOverflow property returns true. 
 * For example, the below form submission throws an error if the value is more than 100,
*/

// <input id="age" type="number" max="100" />
// <button onclick="myOverflowFunction()">OK</button>

function myOverflowFunction() {
  if (document.getElementById("age").validity.rangeOverflow) {
    alert("The mentioned age is not allowed");
  }
}


// 38. DOM methods available for constraint validation
// The below DOM methods are available for constraint validation on an invalid input,

// checkValidity(): It returns true if an input element contains valid data.
// setCustomValidity(): It is used to set the validationMessage property of an input element. Let's take an user login form with DOM validations
function myFunction() {
  var userName = document.getElementById("uname");
  if (!userName.checkValidity()) {
    document.getElementById("message").innerHTML =
      userName.validationMessage;
  } else {
    document.getElementById("message").innerHTML =
      "Entered a valid username";
  }
}

// 39. form validation using javascript

/** JavaScript can be used to perform HTML form validation. For example, if the form field is empty, 
 * the function needs to notify, and return false, to prevent the form being submitted. Lets' perform 
 * user login in an html form,


<form name="myForm" onsubmit="return validateForm()" method="post">
  User name: <input type="text" name="uname" />
  <input type="submit" value="Submit" />
</form>
*/

//And the validation on user login is below,


function validateForm() {
  var x = document.forms["myForm"]["uname"].value;
  if (x == "") {
    alert("The username shouldn't be empty");
    return false;
  }
}


// 40. the common tools used for minification

/** 
Minification is the process of removing all unnecessary characters(empty spaces are removed) and 
variables will be renamed without changing it's functionality. It is also a type of obfuscation .
There are many online/offline tools to minify the javascript files,

Google's Closure Compiler
UglifyJS2
jsmin
javascript-minifier.com/
prettydiff.com

advantages of minification
Normally it is recommended to use minification for heavy traffic and intensive requirements of resources. It reduces file sizes with below benefits,

1- Decreases loading times of a web page
2- Saves bandwidth usages
*/


// 41. define multiple properties on an object

/** The Object.defineProperties() method is used to define new or modify existing properties 
 * directly on an object and returning the object. Let's define multiple properties on an empty object,
*/

const myObject = {};

Object.defineProperties(myObject, {
  newProperty1: {
    value: "John",
    writable: true,
  },
  newProperty2: {},
});

// 42. the different ways to make an object non-extensible

// You can mark an object non-extensible in 3 ways,

Object.preventExtensions
Object.seal
Object.freeze
var newObject1 = {};

Object.preventExtensions(newObject1); // Prevent objects are non-extensible
Object.isExtensible(newObject1); // false

var sealedObject = Object.seal({}); // Sealed objects are non-extensible
Object.isExtensible(sealedObject); // false

var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
Object.isExtensible(frozenObject); // false


// 43. To prevent an object to extend

/** The Object.preventExtensions() method is used to prevent new properties from ever 
 * being added to an object. In other words, it prevents future extensions to the object. 
 * Let's see the usage of this property,
 */ 

const newObject2 = {};
Object.preventExtensions(newObject2); // NOT extendable

try {
  Object.defineProperty(newObject2, "newProperty", {
    // Adding new property
    value: 100,
  });
} catch (e) {
  console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
}

// 44. To check whether an object can be extendable or not

/** The Object.isExtensible() method is used to determine if an object is extendable or not. i.e, 
 * Whether it can have new properties added to it or not.
 */ 

const newObject3 = {};
console.log(Object.isExtensible(newObject3)); //true
// Note: By default, all the objects are extendable. i.e, The new properties can be added or modified.


// 45. To set prototype of one object to another

/** You can use the Object.setPrototypeOf() method that sets the prototype (i.e., 
 * the internal Prototype property) of a specified object to another object or null. 
 * For example, if you want to set prototype of a square object to rectangle object would be as follows,
 */ 

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
Object.setPrototypeOf({}, null);


// 46. pass string type for getPrototype method

/** In ES5, it will throw a TypeError exception if the obj parameter isn't an object. 
 * Whereas in ES2015, the parameter will be coerced to an Object.
 */ 

// ES5
Object.getPrototypeOf("James"); // TypeError: "James" is not an object
// ES2015
Object.getPrototypeOf("James"); // String.prototype


// 47. get the prototype of an object

/** You can use the Object.getPrototypeOf(obj) method to return the prototype of the 
 * specified object. i.e. The value of the internal prototype property. If there are no 
 * inherited properties then null value is returned.
 */ 

const newPrototype = {};
const newObject4 = Object.create(newPrototype);

console.log(Object.getPrototypeOf(newObject4) === newPrototype); // true


// 48. min and max value in an array

var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(findMin(marks));
console.log(findMax(marks));


// 49. an Unary operator

/** The unary(+) operator is used to convert a variable to a number.If the variable cannot 
 * be converted, it will still become a number but with the value NaN. Let's see this behavior in an action.
 */ 

var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b, b); // string, number, NaN


// 50. perform language specific date and time formatting

/** You can use the Intl.DateTimeFormat object which is a constructor for objects that enable 
 * language-sensitive date and time formatting. Let's see this behavior with an example,
 */ 

var date = new Date(Date.UTC(2019, 7, 7, 3, 0, 0));
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // 07/08/2019
console.log(new Intl.DateTimeFormat("en-AU").format(date)); // 07/08/2019


// 51. different error names from error object
// There are 6 different types of error names returned from error object,

/**
EvalError: An error has occurred in the eval() function
RangeError:	An error has occurred with a number "out of range"
ReferenceError:	An error due to an illegal reference
SyntaxError: An error due to a syntax error
TypeError: An error due to a type error
URIError: An error due to encodeURI()
*/


// 51. define property on Object constructor

/** The Object.defineProperty() static method is used to define a new property directly 
 * on an object, or modify an existing property on an object, and returns the object. 
 * Let's see an example to know how to define property,
 */ 

const newObject6 = {};

Object.defineProperty(newObject6, "newProperty", {
  value: 100,
  writable: false,
});

console.log(newObject.newProperty); // 100

newObject6.newProperty = 200; // It throws an error in strict mode due to writable setting

// 52. javascript accessors

/** ECMAScript 5 introduced javascript object accessors or computed properties through 
 * getters and setters. Getters uses the get keyword whereas Setters uses the set keyword.
 */ 

var user = {
  firstName: "John",
  lastName: "Abraham",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};
console.log(user.lang); // getter access lang as en
user.lang = "fr";
console.log(user.lang); // setter used to set lang as fr


// 53. precedence order between local and global variables

// A local variable takes precedence over a global variable with the same name. 
// Let's see this behavior in an example.

var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg); // Good Evening
}
greeting();


// 54. print the contents of web page

/** The window object provided a print() method which is used to print the contents of 
 * the current window. It opens a Print dialog box which lets you choose between various 
 * printing options. Let's see the usage of print method in an example,
 */ 

<input type="button" value="Print" onclick="window.print()" />
// Note: In most browsers, it will block while the print dialog is open.


// 55. encode/decode an URL

// The decodeURI() function is used to decode a Uniform Resource Identifier (URI) previously created by encodeURI().

var uri = "https://mozilla.org/?x=test";
var encoded = encodeURI(uri);
console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
try {
  console.log(decodeURI(encoded)); // "https://mozilla.org/?x=test"
} catch (e) {
  // catches a malformed URI
  console.error(e);
}


// 56.  difference between Object.values and Object.entries method

// The Object.values() method's behavior is similar to Object.entries() method but it returns an
// array of values instead [key,value] pairs.

const object = {
  a: "Good morning",
  b: 100,
};

for (let value of Object.values(object)) {
  console.log(`${value}`); // 'Good morning'
  100;
}

// 57. get enumerable key and value pairs

// The Object.entries() method is used to return an array of a given object's own enumerable 
// string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. 
// Let's see the functionality of object.entries() method in an example,

const newObject1 = {
  a: "Good morning",
  b: 100,
};

for (let [key, value] of Object.entries(newObject1)) {
  console.log(`${key}: ${value}`); // a: 'Good morning'
  // b: 100
}


// 58. determine if an object is sealed or not

/** The Object.isSealed() method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true

If it is not extensible.
If all of its properties are non-configurable.
If it is not removable (but not necessarily non-writable). Let's see it in the action
*/
const newObject5 = {
  property: "Hello, Good morning",
};

Object.seal(newObject5); // Using seal() method to seal the object

console.log(Object.isSealed(newObject5)); // checking whether the object is sealed or not


// 59. differences between freeze and seal methods

/** If an object is frozen using the Object.freeze() method then its properties 
 * become immutable and no changes can be made in them whereas if an object is 
 * sealed using the Object.seal() method then the changes can be made in the existing 
 * properties of the object.
 */


// 60. purpose of seal method

/** The Object.seal() method is used to seal an object, by preventing new properties 
 * from being added to it and marking all existing properties as non-configurable. 
 * But values of present properties can still be changed as long as they are writable. 
 * Let's see the below example to understand more about seal() method
 */ 

const object7 = {
  property: "Welcome JS world",
};
Object.seal(object7);
object.property = "Welcome to object world";
console.log(Object.isSealed(object7)); // true
delete object7.property; // You cannot delete when sealed
console.log(object7.property); //Welcome to object w