// Coding Interview Question

/*
// Reference: https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate 
a queen and an empty space, respectively.

Example:
Input: n = 4
Output: 
[[".Q..",
  "...Q",
  "Q...",
  "..Q."
],["..Q.",
   "Q...",
   "...Q",
   ".Q.."
]]
*/

// Solution2:

/*
The idea is not to check every element in the right and left diagonal, instead use the property of diagonals: 

The sum of i and j is constant and unique for each right diagonal, where i is the row of elements and j is the 
column of elements. 
The difference between i and j is constant and unique for each left diagonal, where i and j are row and column of element respectively.
*/


let N = 4;

// ld is an array where its indices indicate row-col+N-1
// (N-1) is for shifting the difference to store negative
// indices
let ld = new Array(30);

// rd is an array where its indices indicate row+col
// and used to check whether a queen can be placed on
// right diagonal or not
let rd = new Array(30);

// Column array where its indices indicates column and
// used to check whether a queen can be placed in that
// row or not
let cl = new Array(30);

// A utility function to print solution
function printSolution( board)
{
	for (let i = 0; i < N; i++)
	{
		for (let j = 0; j < N; j++)
			document.write(board[i][j] + " ");
		document.write("<br/>");
	}
}

// A recursive utility function to solve N
// Queen problem
function solveNQUtil(board, col)
{
	// Base case: If all queens are placed
	// then return true
	if (col >= N)
		return true;

	// Consider this column and try placing
	// this queen in all rows one by one
	for (let i = 0; i < N; i++)
	{
		
		// Check if the queen can be placed on
		// board[i][col]
		
		// To check if a queen can be placed on
		// board[row][col].We just need to check
		// ld[row-col+n-1] and rd[row+coln] where
		// ld and rd are for left and right
		// diagonal respectively
		if ((ld[i - col + N - 1] != 1 &&
			rd[i + col] != 1) && cl[i] != 1)
		{
			// Place this queen in board[i][col]
			board[i][col] = 1;
			ld[i - col + N - 1] =
			rd[i + col] = cl[i] = 1;

			// Recur to place rest of the queens
			if (solveNQUtil(board, col + 1))
				return true;

			// If placing queen in board[i][col]
			// doesn't lead to a solution, then
			// remove queen from board[i][col]
			board[i][col] = 0; // BACKTRACK
			ld[i - col + N - 1] =
			rd[i + col] = cl[i] = 0;
		}
	}

	// If the queen cannot be placed in any row in
	// this column col then return false
	return false;
}

// This function solves the N Queen problem using
// Backtracking. It mainly uses solveNQUtil() to
// solve the problem. It returns false if queens
// cannot be placed, otherwise, return true and
// prints placement of queens in the form of 1s.
// Please note that there may be more than one
// solutions, this function prints one of the
// feasible solutions.
function solveNQ()
{
	let board = [[ 0, 0, 0, 0 ],
					[ 0, 0, 0, 0 ],
					[ 0, 0, 0, 0 ],
					[ 0, 0, 0, 0 ]];

	if (solveNQUtil(board, 0) == false)
	{
		document.write("Solution does not exist");
		return false;
	}

	printSolution(board);
	return true;
}

// Driver code
solveNQ();

/*
 .  .  Q  . 
 Q  .  .  . 
 .  .  .  Q 
 .  Q  .  . 

*/
// Time Complexity: O(N!) 
// Auxiliary Space: O(N)
