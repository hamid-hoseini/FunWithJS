// Coding Interview Question

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
 A P L S I I G
  Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
 A   L S  I G
  Y A   H R
   P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"

*/


// JavaScript code for the above approach

// Function that Prints concatenation of
// all rows of str's Zig-Zag fashion
const printZigZagConcat = (str, n) => {
    if (n == 1) {
        document.write(`${str}<br/>`);
    }
    let res = "";
    let arr = new Array(n).fill("");
    let down = false;
    let row = 0; // helps in building individual blocks of strings

    for (let i = 0; i < str.length; i++) {
        arr[row] += str[i];
        if (row == n - 1) {
            down = false;
        }
        if (row == 0) {
            down = true;
        }
        if (!down)
            row--;
        else
            row++;
    }

    for (let i = 0; i < n; i++) {
        document.write(arr[i]);
    }
}

// Driver Code
let str = "PAYPALISHIRING";
let N = 3;
printZigZagConcat(str, N);
 
