// Anonymous function

/** 
 * An anonymous function is a function without a name! Anonymous functions are commonly 
 * assigned to a variable name or used as a callback function. The syntax would be as below,
 */ 

// function (optionalParameters) {
//   do something
// }

const myFunction = function(){ //Anonymous function assigned to a variable
  //do something
};

[1, 2, 3].map(function(element){ //Anonymous function used as a callback function
  //do something
});
// Let's see the above anonymous function in an example,

var x = function (a, b) {
  return a * b;
};
var z = x(5, 10);
console.log(z); // 50