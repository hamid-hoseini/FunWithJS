// difference between setTimeout and setImmediate

/**
`setTimeout` and `setImmediate` are both functions in JavaScript used to schedule the execution of a 
function, but they have some key differences in terms of timing and event loop behavior.


1. `setTimeout`:
   - `setTimeout` is a function that schedules the execution of a function after a specified delay.
   - It takes two arguments: a function to be executed and a delay time in milliseconds.
   - The function is added to the event queue after the specified delay, and it will be executed when the event loop gets to it.
   - Example:

*/

   console.log('Start');

   setTimeout(() => {
     console.log('Inside setTimeout');
   }, 0);

   console.log('End');

/**
   Output:

   Start
   End
   Inside setTimeout

 */

 /**
   In this example, even though the delay is set to `0`, the function inside `setTimeout` 
   is still executed after the other synchronous code has completed. This is because the 
   function is pushed to the event queue and waits for the event loop to process it.

2. `setImmediate`:
   - `setImmediate` is a function that schedules the execution of a function to occur immediately after the current event loop cycle.
   - It takes a single argument: the function to be executed.
   - The function is added to a special queue called the "check" queue, and it will be executed once the current event loop cycle completes.
   - Example:

*/  

   console.log('Start');

   setImmediate(() => {
     console.log('Inside setImmediate');
   });

   console.log('End');

/**
   Output:
   ````
   Start
   End
   Inside setImmediate
   ```

In this example, the function inside `setImmediate` is executed immediately after the current event 
loop cycle, even though there is no delay specified. This allows the function to run before any other 
I/O events or timers scheduled for the next event loop cycle.

In summary, the main difference between `setTimeout` and `setImmediate` is the timing of when the 
functions are executed within the event loop. `setTimeout` schedules the function to be executed 
after a specified delay, while `setImmediate` schedules the function to be executed immediately 
after the current event loop cycle.
 */