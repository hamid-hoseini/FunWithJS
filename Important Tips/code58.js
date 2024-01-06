// determine two values same or not using object

/** The Object.is() method determines whether two values are the same value. For example, 
 * the usage with different types of values would be,
 */ 

Object.is("hello", "hello"); // true
Object.is(window, window); // true
Object.is([], []); // false

/**
Two values are the same if one of the following holds:

both undefined
both null
both true or both false
both strings of the same length with the same characters in the same order
both the same object (means both object have same reference)
both numbers and both +0 both -0 both NaN both non-zero and both not NaN and both have the same value.

the purpose of using object "is" method
Some of the applications of Object's is method are follows,

It is used for comparison of two strings.
It is used for comparison of two numbers.
It is used for comparing the polarity of two numbers.
It is used for comparison of two objects.

*/
