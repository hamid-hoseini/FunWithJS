// coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/add-n-binary-strings/
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



// Solution 2:

/*
By converting the binary strings to decimal numbers.
*/

function addBinary(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = 0;
        for (let j = arr[i].length - 1; j >= 0; j--) {
            if (arr[i][j] === '1') {
                num += Math.pow(2, arr[i].length - j - 1);
            }
        }
        sum += num;
    }
    let result = '';
    while (sum > 0) {
        result = (sum % 2 === 0 ? '0' : '1') + result;
        sum = Math.floor(sum / 2);
    }
    return result;
}
 
// Driver code
const arr = ['1', '10', '11'];
console.log(addBinary(arr));

// Time Complexity: O(N*K)
// Auxiliary Space: O(1)
