// detect if a function is called as constructor

/**
 * You can use new.target pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.

  1. If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.
  2. For function calls, new.target is undefined.
 */

  // Example:

  function Myfunc() {
    if (new.target) {
      console.log("called with new");
    } else {
      console.log("not called with new");
    }
  }
  
  new Myfunc(); // called with new
  Myfunc(); // not called with new
  Myfunc.call({}); // not called with new