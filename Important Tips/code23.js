// differences between arguments object and rest parameter

/**
 * There are three main differences between arguments object and rest parameters

  1. The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
  2. The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
  3. The rest parameters are only the ones that haven’t been given a separate name, while the arguments object contains all arguments passed to the function
 */

  // Example:

  function exampleFunction(a, b, ...rest) {
    console.log(a, b); // Output: 1, 2
    console.log(arguments); // Output: { '0': 1, '1': 2, '2': 3, '3': 4 }
    console.log(rest); // Output: [3, 4]
  }
  
  exampleFunction(1, 2, 3, 4);

  /**
   * In this example, a and b are explicitly defined parameters, while ...rest is the rest parameter. 
   * The arguments object contains all the passed arguments, including excess arguments. 
   * The rest parameter captures the remaining arguments as an actual array.
   */