// coding Interview Question

/*
Given n binary strings, return their sum (also a binary string).

Examples:  

Input:  arr[] = ["11", "1"]
Output: "100"
Input : arr[] = ["1", "10", "11"]
Output : "110" 

*/

// Solution 1:

// Javascript program to add n binary strings

// This function adds two binary strings and return
// result as a third string
function addBinaryUtil(a, b)
{
	var result = ""; // Initialize result
	var s = 0; // Initialize digit sum

	// Traverse both strings starting from last
	// characters
	var i = a.length - 1, j = b.length - 1;
	while (i >= 0 || j >= 0 || s == 1) {

		// Compute sum of last digits and carry
		s += ((i >= 0) ? a.charCodeAt(i) - '0'.charCodeAt(0) : 0);
		s += ((j >= 0) ? b.charCodeAt(j) - '0'.charCodeAt(0) : 0);

		// If current digit sum is 1 or 3, 
		// add 1 to result
		result = String.fromCharCode((s % 2 ==1 ?1:0) + 
									'0'.charCodeAt(0)) + result;

		// Compute carry
		s = parseInt(s/2);

		// Move to next digits
		i--;
		j--;
	}
	return result;
}

// function to add n binary strings
function addBinary(arr, n)
{
	var result = "";
	for (var i = 0; i < n; i++)
		result = addBinaryUtil(result, arr[i]);
	return result;
}

// Driver program
var arr = ["1", "10", "11"];
var n = arr.length;
document.write( addBinary(arr, n));

// Time complexity: O(n) 
// Auxiliary Space: O(n)

