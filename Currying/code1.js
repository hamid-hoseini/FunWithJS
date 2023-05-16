/**
 * Explanation: The mulFn() function returns a function that takes another argument 
 * and returns a function that takes another argument, and so on. In the code, we first 
 * call mulFn(4), which returns a function that takes one argument (b). We then call 
 * second(6), which returns a function that takes one argument (c). Finally, we call second(6)(3)(1), 
 * which returns the result of mulFning 4 * 6 * 3 * 2 * 1, which is 144.
 * 
 * @param {*} a 
 * @returns 
 */


function mulFn(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      };
    };
  }
  
  const second = mulFn(4);
  const third = mulFn(2);
  
  const result = third(second(6)(3))(1);