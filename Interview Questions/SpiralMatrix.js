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

function spiralOrder(matrix){
	let ans = [];
	
	if (matrix.length == 0)
	        return ans;
	
	let R = matrix.length, C = matrix[0].length;
	let seen = new Array(R);
	for(let i=0;i<R;i++)
	{
	        seen[i]=new Array(C);
	        for(let j=0;j<C;j++)
	        {
	                seen[i][j]=false;
	        }
	}
	
	let dr = [ 0, 1, 0, -1 ];
	let dc = [ 1, 0, -1, 0 ];
	let r = 0, c = 0, di = 0;
	
	// Iterate from 0 to R * C - 1
	for (let i = 0; i < R * C; i++) {
	        ans.push(matrix[r]);
	        seen[r] = true;
	        let cr = r + dr[di];
	        let cc = c + dc[di];
	
	        if (0 <= cr && cr < R && 0 <= cc && cc < C
	                && !seen[cr][cc]) {
	                r = cr;
	                c = cc;
	        }
	        else {
	                di = (di + 1) % 4;
	                r += dr[di];
	                c += dc[di];
	        }
	}
	return ans;
}

// Driver Code
let a=[[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],
[ 9, 10, 11, 12 ],[ 13, 14, 15, 16 ]];
console.log(spiralOrder(a));
					

//Time Complexity: O(N), where N is the total number of elements in the input matrix. 
// We add every element in the matrix to our final answer
// Auxiliary Space: O(N), the information stored in seen and in ans.



