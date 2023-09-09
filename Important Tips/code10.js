// throttling

/**
In JavaScript, throttling refers to a technique used to limit the frequency of certain actions or function invocations. 
It ensures that a particular function is executed at a controlled rate, preventing it from being called too frequently, 
especially in response to events like scrolling, resizing, or keystrokes.

Throttling is commonly used in scenarios where a function's rapid execution could cause performance issues or unnecessary 
resource consumption. By throttling the function, you can ensure it is called only once within a specific time interval, 
even if the triggering event occurs multiple times.

The basic idea behind throttling in JavaScript is to set a minimum time interval between consecutive function calls. 
If the function is invoked during the throttle period, its execution is delayed until the throttle period has passed. 
This allows the function to be executed at a controlled rate, reducing the frequency of its execution.

Here's an example to illustrate how throttling can be implemented in JavaScript using the `setTimeout` function:
*/


// Example 1:

function throttle(func, delay) {
  let timeoutId;
  let lastExecutedTime = 0;

  return function(...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecutedTime > delay) {
      // Reset the timer and execute the function
      clearTimeout(timeoutId);
      func.apply(this, args);
      lastExecutedTime = currentTime;
    } else {
      // Delay the execution
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecutedTime = Date.now();
      }, delay);
    }
  };
}


/** 
In this example, the `throttle` function accepts a target function (`func`) and a delay value. 
It returns a new function that wraps the original function and implements the throttling behavior. 
The wrapped function uses `setTimeout` to delay the execution of `func` based on the specified delay.

By applying the throttling technique to functions that may be invoked frequently, you can effectively 
control the rate at which those functions are executed, preventing excessive resource usage and improving overall 
performance.
*/


// Example 2:

const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 100);
});