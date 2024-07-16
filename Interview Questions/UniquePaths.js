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



