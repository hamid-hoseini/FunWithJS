// Issue with try..catch inside setTimeout

/**
 * Example1: 
    If you put setTimeout and setInterval methods
      inside the try clause and an exception is thrown, the catch clause will
      not catch any of them. This is because the try...catch statement
      works synchronously, and the function in the above code is executed
      asynchronously after a certain period of time. Hence, you will see runtime
      exception without catching the error. <br />
 */

try {
  setTimeout(() => {
    console.log('try block');
    throw new Error(`An exception is thrown`)
  }, 1000);
} catch(err) {
  console.log('Error: ', err);
}

/**
 * Example2
    To resolve this issue, you have to put the try...catch block inside the
    function as below,
 */

setTimeout(() => {
  try {
    console.log('try block');
    throw new Error(`An exception is thrown`)
  } catch(err) {
    console.log('Error: ', err);
  }
}, 1000);