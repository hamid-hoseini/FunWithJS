// differences between for...of and for...in statements

/**
 * Both for...in and for...of statements iterate over js data structures. The only difference is over what they iterate:
 * for..in iterates over all enumerable property keys of an object
 * for..of iterates over the values of an iterable object.
 */

// Eample:

let arr = ["a", "b", "c"];

arr.newProp = "newVlue";

// key are the property keys
for (let key in arr) {
  console.log(key); // 0, 1, 2 & newValue
}

// value are the property values
for (let value of arr) {
  console.log(value); // a, b, c
}