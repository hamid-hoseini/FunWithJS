// purpose of queueMicrotask

/**
 * The queueMicrotask function is used to schedule a microtask, which is a function that will 
 * be executed asynchronously in the microtask queue. The purpose of queueMicrotask is to 
 * ensure that a function is executed after the current task has finished, but before the 
 * browser performs any rendering or handles user events.
 */

// Example: 

console.log("Start"); //1

queueMicrotask(() => {
  console.log("Inside microtask"); // 3
});

console.log("End"); //2


/**
 * By using queueMicrotask, you can ensure that certain tasks or callbacks are executed at the 
 * earliest opportunity during the JavaScript event loop, making it useful for performing work 
 * that needs to be done asynchronously but with higher priority than regular setTimeout or setInterval callbacks.
 */