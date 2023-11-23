// WeakSet

// WeakSet is used to store a collection of weakly(weak references) held objects. The syntax would be as follows,

new WeakSet([iterable]);
// Let's see the below example to explain it's behavior,

var ws = new WeakSet();
var user = {};
ws.add(user);
ws.has(user); // true
ws.delete(user); // removes user from the set
ws.has(user); // false, user has been removed


/** The differences between WeakSet and Set
The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other reference to it. Other differences are,

Sets can store any value Whereas WeakSets can store only collections of objects
WeakSet does not have size property unlike Set
WeakSet does not have methods such as clear, keys, values, entries, forEach.
WeakSet is not iterable.
*/

/** the collection of methods available on WeakSet
Below are the list of methods available on WeakSet,

add(value): A new object is appended with the given value to the weakset
delete(value): Deletes the value from the WeakSet collection.
has(value): It returns true if the value is present in the WeakSet Collection, otherwise it returns false.
Let's see the functionality of all the above methods in an example,
*/

var weakSetObject = new WeakSet();
var firstObject = {};
var secondObject = {};
// add(value)
weakSetObject.add(firstObject);
weakSetObject.add(secondObject);
console.log(weakSetObject.has(firstObject)); //true
weakSetObject.delete(secondObject);