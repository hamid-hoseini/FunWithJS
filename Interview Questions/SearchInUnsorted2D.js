// Coding Interview Question

/*
Search in an Unsorted 2D Array
*/

// JavaScript code for the above approach
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

// Driver code 
let arr = [[3, 12, 9],
[5, 2, 89],
[90, 45, 22]];
let target = 89;
let ans = linearSearch(arr, target);
document.write(`Element found at index: [${ans[0]} ${ans[1]}]`);



