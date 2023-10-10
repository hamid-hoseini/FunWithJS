// detect primitive or non primitive value type

/**
 * n JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined. 
 * Whereas non-primitive types include the Objects. But you can easily identify them with the below function,
 */

var myPrimitive = 30;
var myNonPrimitive = {};
function isPrimitive(val) {
  return Object(val) !== val;
}

isPrimitive(myPrimitive);
isPrimitive(myNonPrimitive);

/**
 * If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. 
 * But If the value is a non-primitive data type (an object), the Object constructor will give the same object.
 */