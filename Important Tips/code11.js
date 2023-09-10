// debouncing

/**
 * Debouncing is a programming pattern that allows delaying execution of some piece of code until a 
 * specified time to avoid unnecessary CPU cycles, API calls and improve performance. The debounce 
 * function make sure that your code is only triggered once per user input. The common usecases are 
 * Search box suggestions, text-field auto-saves, and eliminating double-button clicks. 
 * Let's say you want to show suggestions for a search query, but only after a visitor has finished 
 * typing it. So here you write a debounce function where the user keeps writing the characters with in 
 * 500ms then previous timer cleared out using clearTimeout and reschedule API call/DB query for a new 
 * time—300 ms in the future.
 */

// Example 1:

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function fetchResults() {
  console.log("Fetching input suggestions");
}
const processChange = debounce(() => fetchResults());

// The debounce() function can be used on input, button and window events

// Input:
// <input type="text" onkeyup="processChange()" />

// Button:
// <button onclick="processChange()">Click me</button>

// Windows event:
// window.addEventListener("scroll", processChange);

// Example 2:

function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}