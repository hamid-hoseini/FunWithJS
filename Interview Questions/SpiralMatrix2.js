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

// Solution 3:
// Print a given matrix in a spiral using recursion:
/*
create a recursive function that takes a matrix and some variables (k – starting row index, m – ending row index, l – starting column index, n – ending column index) as parameters
Check the base cases (starting index is less than or equal to the ending index) and print the boundary elements in a clockwise manner
Print the top row, i.e. Print the elements of the kth row from column index l to n, and increase the count of k
Print the right column, i.e. Print the last column or n-1th column from row index k to m and decrease the count of n
Print the bottom row, i.e. if k > m, then print the elements of m-1th row from column n-1 to l and decrease the count of m
Print the left column, i.e. if l < n, then print the elements of the lth column from m-1th row to k and increase the count of l
Call the function recursively with the values of starting and ending indices of rows and columns
*/

function printSpiralMatrix(arr, i, j, m, n) {
 
    // If i or j lies outside the matrix
    if (i >= m || j >= n) return;
 
    // Print First Row
    for (let p = j; p < n; p++) {
        document.write(arr[i][p] + ' ')
    }
 
    // Print Last Column
    for (let p = i + 1; p < m; p++) {
        document.write(arr[p][n - 1] + ' ')
    }
 
    // Print Last Row, if Last and
    // First Row are not same
    if ((m - 1) != i) {
        for (let p = n - 2; p >= j; p--) {
            document.write(arr[m - 1][p] + ' ');
        }
    }
 
    // Print First Column, if Last and
    // First Column are not same    
    if ((n - 1) != j) {
        for (let p = m - 2; p > i; p--) {
            document.write(arr[p][j] + ' ');
        }
    }
    printSpiralMatrix(arr, i + 1, j + 1, m - 1, n - 1)
}
 
// function call
let arr = [ [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
           ];
let r = arr.length;
let c = arr[0].length;
 
printSpiralMatrix(arr, 0, 0, r, c);

// Time Complexity: O(M*N). To traverse the matrix O(m*n) time is required.
// Auxiliary Space: O(1). No extra space is required.
