// Coding Interview Question 

/*
Given a sorted array arr[] of size N, the task is to remove the duplicate elements from the array.

Examples: 

Input: arr[] = {2, 2, 2, 2, 2}
Output: arr[] = {2}
Explanation: All the elements are 2, So only keep one instance of 2.

Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
Output: arr[] = {1, 2, 3, 4, 5}
*/

// Solution 1

function removeDuplicates1(arr , n) {
    if (n == 0 || n == 1)
        return n;

    // To store index of next unique element
    var j = 0;

    // Doing same as done in Method 1
    // Just maintaining another updated index i.e. j
    for (i = 0; i < n - 1; i++)
        if (arr[i] != arr[i + 1])
            arr[j++] = arr[i];

    arr[j++] = arr[n - 1];

    return j;
}

 
    var arr = [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ];
    var n = arr.length;

    n = removeDuplicates1(arr, n);

    // Print updated array
    for (i = 0; i < n; i++)
        document.write(arr[i] + " ");

// Time Complexity: O(N) 
// Auxiliary Space: O(1)
