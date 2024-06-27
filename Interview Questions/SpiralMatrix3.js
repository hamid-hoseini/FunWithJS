// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

output: 1->2->3->6->9->8->7->4->5

Example2:

Input:  {
        {1,  2,  3,  4},
        {5,  6,  7,  8},
        {9,  10, 11, 12},
        {13, 14, 15, 16}
        }
Output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 
Explanation: The output is matrix in spiral format. 
*/

// Solution 4: Print a given matrix in spiral using DFS:


var R = 4, C = 4;
function isInBounds(i, j)
{
	if (i < 0 || i >= R || j < 0 || j >= C)
		return false;
	return true;
}
// Check if the position is blocked
function isBlocked(matrix, i, j)
{
	if (!isInBounds(i, j))
		return true;
	if (matrix[i][j] == -1)
		return true;
	return false;
}
// DFS code to traverse spirally
function spirallyDFSTraverse(matrix, i, j, dir, res)
{
	if (isBlocked(matrix, i, j))
		return;
	var allBlocked = true;
	for (var k = -1; k <= 1; k += 2) {
		allBlocked = allBlocked
					&& isBlocked(matrix, k + i, j)
					&& isBlocked(matrix, i, j + k);
	}
	res.push(matrix[i][j]);
	matrix[i][j] = -1;
	if (allBlocked) {
		return;
	}
	// dir: 0 - right, 1 - down, 2 - left, 3 - up
	var nxt_i = i;
	var nxt_j = j;
	var nxt_dir = dir;
	if (dir == 0) {
		if (!isBlocked(matrix, i, j + 1)) {
			nxt_j++;
		}
		else {
			nxt_dir = 1;
			nxt_i++;
		}
	}
	else if (dir == 1) {
		if (!isBlocked(matrix, i + 1, j)) {
			nxt_i++;
		}
		else {
			nxt_dir = 2;
			nxt_j--;
		}
	}
	else if (dir == 2) {
		if (!isBlocked(matrix, i, j - 1)) {
			nxt_j--;
		}
		else {
			nxt_dir = 3;
			nxt_i--;
		}
	}
	else if (dir == 3) {
		if (!isBlocked(matrix, i - 1, j)) {
			nxt_i--;
		}
		else {
			nxt_dir = 0;
			nxt_j++;
		}
	}
	spirallyDFSTravserse(matrix, nxt_i, nxt_j, nxt_dir,
						res);
}
// To traverse spirally
function spirallyTraverse(matrix)
{
	var res = [];
	spirallyDFSTravserse(matrix, 0, 0, 0, res);
	return res;
}
// Driver code
var a = [ [ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ],
			[ 13, 14, 15, 16 ]];
// Function Call
var res = spirallyTraverse(a);
var size = res.length;
for (var i = 0; i < size; ++i)
	document.write(res[i] + " ");


// Time Complexity: O(M*N). To traverse the matrix O(M*N) time is required.
// Auxiliary Space: O(1). No extra space is required (without consideration of the stack used by the recursion). 
