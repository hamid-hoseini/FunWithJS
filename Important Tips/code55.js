// the collection of methods available on WeakMap

// The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax is looking like as below,

new WeakMap([iterable]);
// Let's see the below example to explain it's behavior,

var ws = new WeakMap();
var user = {};
ws.set(user);
ws.has(user); // true
ws.delete(user); // removes user from the map
ws.has(user); // false, user has been removed

/** Below are the list of methods available on WeakMap,

set(key, value): Sets the value for the key in the WeakMap object. Returns the WeakMap object.
delete(key): Removes any value associated to the key.
has(key): Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.
get(key): Returns the value associated to the key, or undefined if there is none. Let's see the functionality of all the above methods in an example,
*/

var weakMapObject = new WeakMap();
var firstObject = {};
var secondObject = {};
// set(key, value)
weakMapObject.set(firstObject, "John");
weakMapObject.set(secondObject, 100);
console.log(weakMapObject.has(firstObject)); //true
console.log(weakMapObject.get(firstObject)); // John
weakMapObject.delete(secondObject);


/** 
differences between WeakMap and Map
The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it. Other differences are,

Maps can store any key type Whereas WeakMaps can store only collections of key objects
WeakMap does not have size property unlike Map
WeakMap does not have methods such as clear, keys, values, entries, forEach.
WeakMap is not iterable.
*/