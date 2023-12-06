// freeze method

/** The freeze() method is used to freeze an object. Freezing an object 
 * does not allow adding new properties to an object,prevents from removing and prevents 
 * changing the enumerability, configurability, or writability of existing properties. i.e, 
 * It returns the passed object and does not create a frozen copy.
 */ 

const obj = {
  prop: 100,
};

Object.freeze(obj);
obj.prop = 200; // Throws an error in strict mode

console.log(obj.prop); //100
// Remember freezing is only applied to the top-level properties in objects but not for nested objects. For example, let's try to freeze user object which has employment details as nested object and observe that details have been changed.

const user = {
  name: "John",
  employment: {
    department: "IT",
  },
};

Object.freeze(user);
user.employment.department = "HR";
// Note: It causes a TypeError if the argument passed is not an object.


/* purpose of freeze method
Below are the main benefits of using freeze method,

- It is used for freezing objects and arrays.
- It is used to make an object immutable.

Why do I need to use freeze method
In the Object-oriented paradigm, an existing API contains certain elements 
that are not intended to be extended, modified, or re-used outside of their current context. 
Hence it works as the final keyword which is used in various languages.

*/