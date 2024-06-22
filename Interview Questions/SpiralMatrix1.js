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

// Solution 2:

/*
Follow the given steps to solve the problem:

Create and initialize variables k – starting row index, m – ending row index, l – starting column index, n – ending column index
Run a loop until all the squares of loops are printed.
In each outer loop traversal print the elements of a square in a clockwise manner.
Print the top row, i.e. Print the elements of the kth row from column index l to n, and increase the count of k.
Print the right column, i.e. Print the last column or n-1th column from row index k to m and decrease the count of n.
Print the bottom row, i.e. if k < m, then print the elements of the m-1th row from column n-1 to l and decrease the count of m
Print the left column, i.e. if l < n, then print the elements of lth column from m-1th row to k and increase the count of l.

*/

function spiralPrint(m, n, arr) {
	let i, k = 0, l = 0;
	/*
		k - starting row index
		m - ending row index
		l - starting column index
		n - ending column index
		i - iterator 
	*/

	while (k < m && l < n) {
		// print the first row from the remaining rows
		for (i = l; i < n; ++i) {
			document.write(arr[k][i] + ' ');
		}
		k++;

		// print the last column from the remaining columns
		for (i = k; i < m; ++i) {
			document.write(arr[i][n - 1] + ' ');
		}
		n--;

		// print the last row from the remaining rows
		if (k < m) {
			for (i = n - 1; i >= l; --i) {
				document.write(arr[m - 1][i] + ' ');
			}
			m--;
		}

		// print the first column from the remaining columns
		if (l < n) {
			for (i = m - 1; i >= k; --i) {
				document.write(arr[i][l] + ' ');
			}
			l++;
		}
	}
}

// function call
let arr = [[ 1, 2, 3, 4 ],
	[ 5, 6, 7, 8 ],
	[ 9, 10, 11, 12 ],
	[ 13, 14, 15, 16 ]];
let r = arr.length;
let c = arr[0].length;

spiralPrint(r, c, arr);


// Time Complexity: O(M*N). To traverse the matrix O(M*M) time is required.
// Auxiliary Space: O(1). No extra space is required.
