// Priority of Synchronous & Asynchronous statements

/** 
 *  When the JavaScript engine parses the below code, the first two statements
      are asynchronous which will be executed later and third statement is
      synchronous statement which will be moved to callstack, executed and
      prints the number 3 in the console. Next, Promise is native in ES6 and it
      will be moved to Job queue which has high priority than callback queue in
      the execution order. At last, since setTimeout is part of WebAPI the
      callback function moved to callback queue and executed. Hence, you will
      see number 2 printed first followed by 1.
*/

// Example:

setTimeout(() => {console.log('1')}, 0);
Promise.resolve('hello').then(() => console.log('2'));
console.log('3');

// Result: 3, 2, 1