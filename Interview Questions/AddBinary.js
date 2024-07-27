// Coding Interview Questions

/*
Reference: https://www.geeksforgeeks.org/program-to-add-two-binary-strings/
Given two binary strings, return their sum (also a binary string).

Example: 

Input:  a = "11", b = "1"
Output: "100" 
*/

// solution:


// Javascript program to add 
// two binary strings

// This function adds two 
// binary strings and return
// result as a third string
function addBinary(a, b)
{
	
	// Initialize result
	var result = ""; 
	
	// Initialize digit sum
	var s = 0;		 

	// Traverse both strings starting 
	// from last characters
	var i = a.length - 1, j = b.length - 1;
	while (i >= 0 || j >= 0 || s == 1)
	{
		
		// Comput sum of last 
		// digits and carry
		s += ((i >= 0)? a.charAt(i).charCodeAt(0) - 
		'0'.charCodeAt(0): 0);
		s += ((j >= 0)? b.charAt(j).charCodeAt(0) - 
		'0'.charCodeAt(0): 0);

		// If current digit sum is 
		// 1 or 3, add 1 to result
		result = String.fromCharCode(parseInt(s % 2) +
		'0'.charCodeAt(0)) + result;

		// Compute carry
		s = parseInt(s/2);

		// Move to next digits
		i--; j--;
	}
	
return result;
}

//Driver code
var a = "1101", b="100";

document.write(addBinary(a, b));


// Time Complexity: O(max(L1, L2)), where L1 and L2 are the lengths of strings a and b respectively. 
// Auxiliary Space: O(max(L1, L2)), where L1 and L2 are the lengths of strings a and b respectively. 
