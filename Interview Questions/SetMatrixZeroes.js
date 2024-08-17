// Coding Interview Question

/*
Given a Matrix arr of size M x N, the task is to set all rows and columns to zeroes if a 
particular element is zero, in constant space complexity.

Input: [ 
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]]
Output: [ 
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1]]

Explanation: one zero is present at cell(2,2), and all the elements in the 2nd row and 2nd column are marked as zeroes.

Input: [
[ 0, 1, 2, 0],
[3, 4, 5, 2],
[1, 3, 1, 5]]
Output: [
[0, 0, 0, 0],
[0, 4, 5, 0],
[0, 3, 1, 0]]
Explanation: There are zeroes present in the 1st row at 1st column and 4th column.
*/

function setMatrixZeroes(matrix) {
    // Variables to track rows and columns with zeroes
    let zeroRows = new Set();
    let zeroColumns = new Set();

    // Traverse the matrix to find rows and columns with zeroes
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroColumns.add(j);
            }
        }
    }

    // Set rows with zeroes to all zeroes
    zeroRows.forEach(row => {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    });

    // Set columns with zeroes to all zeroes
    zeroColumns.forEach(col => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    });
}

// Test the code
const arr = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];

setMatrixZeroes(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(' '));
}
