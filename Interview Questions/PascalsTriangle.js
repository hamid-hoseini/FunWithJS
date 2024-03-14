// Coding Interview Question

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it
        
        1
       / \
      1   1
     / \ / \
    1   2   1
   / \ / \ / \
  1   3   3   1
 / \ / \ / \ / \
1   4   6   4   1

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

function generatePascalsTriangle(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1); // The first and last element in each row is always 1
      } else {
        const aboveRow = triangle[i - 1];
        const sum = aboveRow[j - 1] + aboveRow[j];
        row.push(sum);
      }
    }
    triangle.push(row);
  }

  return triangle;
}

// Example usage:
console.log(generatePascalsTriangle(5));
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

console.log(generatePascalsTriangle(1));
// Output: [[1]]
