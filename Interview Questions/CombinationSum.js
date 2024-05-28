// Coding Interview Question

/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique 
combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 
combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
*/

/*
Solution:
Follow the below steps to implement the idea:

Sort the array arr[] and remove all the duplicates from the arr[] then create a temporary vector r. 
to store every combination and a vector of vector res.

Recursively follow: 
If at any time sub-problem sum == 0 then add that array to the res (vector of vectors).
Run a while loop till the sum – arr[I] is not negative and i is less than arr.size().
Push arr[i] in r and recursively call for i and sum-arr[i] ,then increment i by 1.
pop r[i] from back and backtrack. 
*/

function combinationSum(arr, sum) {
	let ans = new Array();
	let temp = new Array();

	// first do hashing since hashset does not always
	// sort
	// removing the duplicates using HashSet and
	// Sorting the arrayList

	let set = new Set([...arr]);
	arr = [...set];
	arr.sort()

	findNumbers(ans, arr, sum, 0, temp);
	return ans;
}

function findNumbers(ans, arr, sum, index, temp) {

	if (sum == 0) {

		// pushing deep copy of list to ans

		ans.push([...temp]);
		return;
	}

	for (let i = index; i < arr.length; i++) {

		// checking that sum does not become negative

		if ((sum - arr[i]) >= 0) {

			// pushing element which can contribute to
			// sum

			temp.push(arr[i]);

			findNumbers(ans, arr, sum - arr[i], i, temp);

			// removing element from list (backtracking)
			temp.splice(temp.indexOf(arr[i]), 1);
		}
	}
}

// Driver Code


let arr = []

arr.push(2);
arr.push(4);
arr.push(6);
arr.push(8);

let sum = 8;

let ans = combinationSum(arr, sum);

// If result is empty, then
if (ans.length == 0) {
	document.write("Empty");
}

// print all combinations stored in ans
for (let i = 0; i < ans.length; i++) {

	document.write("(");
	for (let j = 0; j < ans[i].length; j++) {
		document.write(" ", ans[i][j] + " ");
	}
	document.write(") ");
}

// Time Complexity: O(k*(2^n)) where n is the size of the array, and k is the average length
// Auxiliary Space: O(k*x) where x is the number of possible combinations
