// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either 
down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Example 3:
Input:  M = 2, N = 2
Output: 2
Explanation: There are two paths
(0, 0) -> (0, 1) -> (1, 1)
(0, 0) -> (1, 0) -> (1, 1)

Examle 4:
Input:  M = 2, N = 3
Output: 3
Explanation: There are three paths
(0, 0) -> (0, 1) -> (0, 2) -> (1, 2)
(0, 0) -> (0, 1) -> (1, 1) -> (1, 2)
(0, 0) -> (1, 0) -> (1, 1) -> (1, 2)
*/

// Solution 1: Recursion
// Returns count of possible paths to reach
// cell at row number m and column number n
// from the topmost leftmost cell (cell at 1, 1)
function numberOfPaths(m, n) {
 
    // If either given row number is first or
    // given column number is first
    if (m == 1 || n == 1)
        return 1;
     
    // If diagonal movements are allowed then
    // the last addition is required.
    return numberOfPaths(m - 1, n) + numberOfPaths(m, n - 1);
    
   // + numberOfPaths(m - 1, n - 1);
}
 
document.write(numberOfPaths(3, 3)+"<br>");

// Time Complexity: O(2N)
// Auxiliary Space: O(N + M)


// Solution 2: Memoization

// Create an empty 2D table
let DP = new Array(4);
for(let i = 0; i < 4; i++) {
     
    DP[i] = new Array(4);
    for(let j = 0; j < 4; j++) {
        DP[i][j] = 0;
    }
}
 
// Returns count of possible paths to reach
// cell at row number m and column number n from
// the topmost leftmost cell (cell at 1, 1)
function numberOfPaths(n, m, DP){
 
    if(n == 1 || m == 1)
        return DP[n][m] = 1;
     
    // Add the element in the DP table
    // If it was not computed before
    if(DP[n][m] == 0)
        DP[n][m] = numberOfPaths(n - 1, m,DP) + numberOfPaths(n, m - 1,DP);
 
    return DP[n][m];
}
 
// Driver code
 
document.write(numberOfPaths(3, 3,DP));

// Time Complexity: O(N * M)
// Auxiliary Space: (N * M)


// Solution 3: Dynamic Programming(DP)


// Returns count of possible paths to reach
// cell at row number m and column number n from
// the topmost leftmost cell (cell at 1, 1)
function numberOfPaths(m , n)
{
    // Create a 2D table to store results
    // of subproblems
    var count = Array(m).fill(0).map(x => Array(n).fill(0));
 
    // Count of paths to reach any cell in
    // first column is 1
    for (i = 0; i < m; i++)
        count[i][0] = 1;
 
    // Count of paths to reach any cell in
    // first row is 1
    for (j = 0; j < n; j++)
        count[0][j] = 1;
 
    // Calculate count of paths for other
    // cells in bottom-up manner using
    // the recursive solution
    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++)
 
            // By uncommenting the last part the
            // code calculates the total possible paths
            // if the diagonal Movements are allowed
             
            //+ count[i-1][j-1];
            count[i][j] = count[i - 1][j] + count[i][j - 1]; 
    }
    return count[m - 1][n - 1];
}
 
// Driver program to test above function
document.write(numberOfPaths(3, 3));

