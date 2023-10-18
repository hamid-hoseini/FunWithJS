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