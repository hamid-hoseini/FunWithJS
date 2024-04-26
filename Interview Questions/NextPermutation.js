// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/next-permutation/
Given an array arr[] of size N, the task is to print the lexicographically next greater 
permutation of the given array. If there does not exist any greater permutation, then print 
the lexicographically smallest permutation of the given array.

Input: N = 6, arr = {1, 2, 3, 6, 5, 4}
Output: {1, 2, 4, 3, 5, 6}
Explanation: The next permutation of the given array is {1, 2, 4, 3, 5, 6}.

Input: N = 3, arr = {3, 2, 1}
Output: {1, 2, 3}
Explanation: As arr[] is the last permutation. 
So, the next permutation is the lowest one.
*/

// solution 

/*
Let’s first understand what is lexicographical order in the above-given program.

We have to check that the order of the array sequence is greater than the previous array sequence. 
The output will be just larger sequence of the array.

Brute Force Approach :
Find all possible permutations of the given array.
Print the Next permutation right after the er given input sequence.
*/

function NextPermutation(arr) {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    // If no such index exists, the entire array is in the descending order so reverse it
    if (i === -1) {
        arr.reverse();
        return;
    }
    // Find the largest index j greater than i such that arr[i] < arr[j]
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }
    // Swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
    // Reverse the suffix starting from index i + 1
    let left = i + 1, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

let arr = [1, 2, 3, 6, 5, 4];
NextPermutation(arr);
// Printing the answer
console.log(arr.join(" "));

/*
Time Complexity: O(N * N!), N represents the number of elements present in the input sequence.
represent all possible permutation. Therefore, It takes the time complexity O(N*N!).
Auxiliary Space: O(N), for storing the permutation in some data structure.
*/
