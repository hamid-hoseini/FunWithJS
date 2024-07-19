// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/min-cost-path-dp-6/
Given a cost matrix cost[][] and a position (M, N) in cost[][], write a function that returns cost of 
minimum cost path to reach (M, N) from (0, 0). Each cell of the matrix represents a cost to traverse 
through that cell. The total cost of a path to reach (M, N) is the sum of all the costs on that path 
(including both source and destination). You can only traverse down, right and diagonally lower cells 
from a given cell, i.e., from a given cell (i, j), cells (i+1, j), (i, j+1), and (i+1, j+1) can be traversed. 

The path with minimum cost is highlighted in the following figure. 
The path is (0, 0) –> (0, 1) –> (1, 2) –> (2, 2). The cost of the path is 8 (1 + 2 + 2 + 3).  
*/

// solution1 : recursion

// A Naive recursive implementation of
// MCP(Minimum Cost Path) problem 

// A utility function that returns 
// minimum of 3 integers
function min(x, y, z)
{
	if (x < y)
		return (x < z) ? x : z;
	else
		return (y < z) ? y : z;
}

// Returns cost of minimum cost path 
// from (0,0) to (m, n) in mat[R][C]
function minCost(cost, m, n)
{
	if (n < 0 || m < 0)
		return Number.MAX_VALUE;
	else if (m == 0 && n == 0)
		return cost[m][n];
	else
		return cost[m][n] + min(minCost(cost, m - 1, n - 1), 
								minCost(cost, m - 1, n), 
								minCost(cost, m, n - 1));
}

// Driver code
var cost = [ [ 1, 2, 3 ], 
			[ 4, 8, 2 ], 
			[ 1, 5, 3 ] ];

document.write(minCost(cost, 2, 2));

// Time Complexity: O((M * N)3)
// Auxiliary Space: O(M + N), for recursive stack space



// Solution 2: using Memoization DP

const R = 3;
const C = 3;

// Helper function to find the minimum of three integers
function min(x, y, z) {
	return (x < y) ? (x < z ? x : z) : (y < z ? y : z);
}

// Function to calculate the minimum cost path using memoization
function minCostMemoized(cost, m, n, memo) {
	// Base case: if we're outside the grid, return a large value
	if (n < 0 || m < 0) {
		return Number.MAX_SAFE_INTEGER;
	} 
	// Base case: if we're at the top-left cell, return its cost
	else if (m === 0 && n === 0) {
		return cost[m][n];
	}

	// If the result is already computed, return it
	if (memo[m][n] !== -1) {
		return memo[m][n];
	}

	// Calculate the cost for the current cell and store it in the memo table
	memo[m][n] = cost[m][n] + min(
		minCostMemoized(cost, m - 1, n - 1, memo), // Diagonal
		minCostMemoized(cost, m - 1, n, memo),	 // Up
		minCostMemoized(cost, m, n - 1, memo)	 // Left
	);

	return memo[m][n];
}

// Function to find the minimum cost path from (0,0) to (m, n)
function minCost(cost, m, n) {
	// Initialize a memoization table filled with -1
	const memo = new Array(R).fill().map(() => new Array(C).fill(-1));

	// Call the memoized function to compute the result
	return minCostMemoized(cost, m, n, memo);
}

// Input matrix of costs
const cost = [
	[1, 2, 3],
	[4, 8, 2],
	[1, 5, 3]
];

// Calculate and print the minimum cost path
console.log(minCost(cost, 2, 2));

// Time Complexity: O(M * N)
// Auxiliary Space: O(M * N)


// Solution 3: Dynamic Programming
/*
                                    mC(2, 2)
			      /	       |       \ 
			    /	       |	 \    
                          /            |           \
                         /             |            \             
                 mC(1, 1)           mC(1, 2)             mC(2, 1)
              /     |     \       /     |     \           /     |     \ 
             /      |      \     /      |      \         /      |       \
       mC(0,0) mC(0,1) mC(1,0) mC(0,1) mC(0,2) mC(1,1) mC(1,0) mC(1,1) mC(2,0)

*/


// Javascript program for Dynamic Programming implementation
// of Min Cost Path problem

/* A utility function that returns minimum of 3 integers */
function min(x, y, z)
{
	if (x < y)
		return (x < z)? x : z;
	else
		return (y < z)? y : z;
}

function minCost(cost, m, n)
{
	let i, j;
	let tc = new Array(m+1);
	
	for(let k = 0; k < m + 1; k++)
	{
		tc[k] = new Array(n+1);
	}

	tc[0][0] = cost[0][0];

	/* Initialize first column of total cost(tc) array */
	for (i = 1; i <= m; i++)
		tc[i][0] = tc[i-1][0] + cost[i][0];

	/* Initialize first row of tc array */
	for (j = 1; j <= n; j++)
		tc[0][j] = tc[0][j-1] + cost[0][j];

	/* Construct rest of the tc array */
	for (i = 1; i <= m; i++)
		for (j = 1; j <= n; j++)
			tc[i][j] = Math.min(tc[i-1][j-1],
						tc[i-1][j],
						tc[i][j-1]) + cost[i][j];

	return tc[m][n];
}

let cost = [[1, 2, 3],
			[4, 8, 2],
			[1, 5, 3]];
document.write(minCost(cost,2,2));

// Time Complexity: O(M * N)
// Auxiliary Space: O(M * N)

