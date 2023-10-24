// asynchronous thunks

/**
 * thunk function is:
 * just a function which delays the evaluation of the value. It doesn’t take any arguments 
 * but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but 
 * it will be sometime in the future. Let's take a synchronous example,
 */
// Example:

const add = (x, y) => x + y;

const thunk = () => add(2, 3);

thunk(); // 5



// The asynchronous thunks are useful to make network requests. Let's see an example of network requests,

function fetchData(fn) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => fn(json));
}

const asyncThunk = function () {
  return fetchData(function getData(data) {
    console.log(data);
  });
};

asyncThunk();

// The getData function won't be called immediately but it will be invoked only when the data 
// is available from API endpoint. The setTimeout function is also used to make our code asynchronous. 
// The best real time example is redux state management library which uses the asynchronous thunks to 
// delay the actions to dispatch.