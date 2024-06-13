// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/rotate-image-by-90-degree-using-javascript/
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/

function rotateBy90Degree(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j],
            matrix[j][i]] = [matrix[j][i],
            matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

function main() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    rotateBy90Degree(arr);
    console.log("Rotated Image by 90 degree in clockwise direction ");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join(" "));
    }
}

/*
we will reduce time complexity of problem from O(N*N) to O(1). If we observe the matrix, 
we can rotate it by 90 degree clockwise by two simple steps. First we will take transpose 
of matrix (change rows to columns and rows to columns) and then reverse each row of matrix. 
The matrix obtained is rotated matrix (by 90 degrees).
*/

// Time Complexity: O(N*N) , transposing the matrix + O(N*N) , reversing rows = O(N*N)
// Space Complexity: O(1), constant space


//  Solution 2:

function rotate(matrix) {
    let n = matrix.length;
    
    let temp = new Array(n).fill().map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            temp[j][n - i - 1] = matrix[i][j];
        }
    }
    return temp;
}

function main() {
    let arr = [
        [1, 2, 3 ],
        [4, 5, 6 ],
        [7 , 8, 9]
    ];
    let answer = rotate(arr);
    console.log("Rotated image by 90 degree in clockwise direction ");
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[0].length; j++) {
            process.stdout.write(answer[i][j] + " ");
        }
        console.log();
    }
}

// Time Complexity: O(N*N) , we traverse original matrix.
// Space Complexity: O(N*N) , created matrix of same size.


/*
We will create another temporary matrix of same size of original matrix i.e. n*n and then we take 
the first row of original matrix and put it in the last column of the temporary matrix , take second row of 
original matrix and put it in the second last column of matrix , take third row of original matrix and put it in the
third last column of matrix and so.
*/
