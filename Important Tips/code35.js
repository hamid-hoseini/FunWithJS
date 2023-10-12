//  minimum timeout throttling


/**
 * Both browser and NodeJS javascript environments throttles with a minimum delay that is 
 * greater than 0ms. That means even though setting a delay of 0ms will not happen instantaneously. 
 * Browsers: They have a minimum delay of 4ms. This throttle occurs when successive calls are 
 * triggered due to callback nesting(certain depth) or after a certain number of successive intervals.
 * Note: The older browsers have a minimum delay of 10ms. Nodejs: They have a minimum delay of 1ms. 
 * This throttle happens when the delay is larger than 2147483647 or less than 1. The best example to 
 * explain this timeout throttling behavior is the order of below code snippet.
 */

function runMeFirst() {
  console.log("My script is initialized");
}
setTimeout(runMeFirst, 0);
console.log("Script loaded");

// result: 
/**
  Script loaded
  My script is initialized
*/

// If you don't use setTimeout, the order of logs will be sequential.

function runMeFirst() {
  console.log("My script is initialized");
}
runMeFirst();
console.log("Script loaded");

// result:
/**
  My script is initialized
  Script loaded
*/