// the attributes provided by a property descriptor

/** A property descriptor is a record which has the following attributes

value: The value associated with the property
writable: Determines whether the value associated with the property can be changed or not
configurable: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.
enumerable: Determines whether the property appears during enumeration of the properties on the corresponding object or not.
set: A function which serves as a setter for the property
get: A function which serves as a getter for the property
*/

const descriptor = {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: true
};


// You can use the Object.getOwnPropertyDescriptors() method which returns all own property 
// descriptors of a given object. The example usage of this method is below,

const newObject = {
  a: 1,
  b: 2,
  c: 3,
};
const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
console.log(descriptorsObject.a.writable); //true
console.log(descriptorsObject.a.configurable); //true
console.log(descriptorsObject.a.enumerable); //true
console.log(descriptorsObject.a.value); // 1