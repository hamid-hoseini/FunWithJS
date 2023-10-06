// difference between function and class declarations

// The main difference between function declarations and class declarations is hoisting. 
// The function declarations are hoisted but not class declarations.

// Classes:

const user = new User(); // ReferenceError

class User {}

// Constructor Function:

const customer = new Customer(); // No error

function Customer() {}