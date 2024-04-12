// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/merge-k-sorted-arrays/
Merge k sorted arrays 
Given K sorted arrays of size N each, merge them and print the sorted output.

Input: K = 3, N = 4, arr = { {1, 3, 5, 7}, {2, 4, 6, 8}, {0, 9, 10, 11}}
Output: 0 1 2 3 4 5 6 7 8 9 10 11 
Explanation: The output array is a sorted array that contains all the elements of the input matrix. 

Input: k = 4, n = 4, arr = { {1, 5, 6, 8}, {2, 4, 10, 12}, {3, 7, 9, 11}, {13, 14, 15, 16}} 
Output: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
Explanation: The output array is a sorted array that contains all the elements of the input matrix. 

*/

// Solution 1

/*
Create an output array of size (N * K) and then copy all the elements into the output array followed by sorting. 

Follow the given steps to solve the problem:

Create an output array of size N * K. 
Traverse the matrix from start to end and insert all the elements in the output array.
Sort and print the output array.
*/

// This function takes an array of  
// arrays as an argument and 
// All arrays are assumed to be sorted.  
// It merges them together and prints  
// the final sorted output. 
function mergeKArrays(arr , a,  output) 
{ 
    var c = 0; 

    // traverse the matrix 
    for (i = 0; i < a; i++) { 
        for (j = 0; j < 4; j++) 
            output = arr[i][j]; 
    } 

    // sort the array 
    output.sort((a,b)=>a-b); 
} 

// A utility function to print array elements 
function printArray(arr , size) { 
    for (i = 0; i < size; i++) 
        document.write(arr[i] + " "); 
} 

// Driver program to test above functions 
  
    var arr = [ [ 2, 6, 12, 34 ],  
                [ 1, 9, 20, 1000 ],  
                [ 23, 34, 90, 2000 ] ]; 
    var K = 4; 
    var N = 3; 
    var output = Array(N * K).fill(0); 

    mergeKArrays(arr, N, output); 

    document.write("Merged array is "); 
    printArray(output, N * K); 



// Output
/* Merged array is 
1 2 6 9 12 20 23 34 34 90 1000 2000 
Time Complexity: O(N * K * log (N*K)), Since the resulting array is of size N*K.
Space Complexity: O(N * K), The output array is of size N * K.
*/
