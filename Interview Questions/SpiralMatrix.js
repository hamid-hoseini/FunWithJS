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

// Solution 1:

/*
Follow the given steps to solve the problem:

Let the array have R rows and C columns
seen[r] denotes that the cell on the r-th row and c-th column was previously visited. Our current position is (r, c), 
facing direction di, and we want to visit R x C total cells.
As we move through the matrix, our candidate’s next position is (cr, cc). 
If the candidate is in the bounds of the matrix and unseen, then it becomes our next position; otherwise, our next 
position is the one after performing a clockwise turn
*/

