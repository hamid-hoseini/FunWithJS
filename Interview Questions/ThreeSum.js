// Coding Interview Question

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

// Solution 1

function threeSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return result;
}

/*
Time Complexity: O(n^3). 
There are three nested loops traversing the array, so the time complexity is O(n^3)
Space Complexity: O(1). 
As no extra space is required.
*/

// Solution 2

/*
This method uses sorting to increase the efficiency of the code. 

Approach: By Sorting the array the efficiency of the algorithm can be improved. 
This efficient approach uses the two-pointer technique. Traverse the array and fix the 
first element of the triplet. Now use the Two Pointers algorithm to find if there is a 
pair whose sum is equal to x – array[i]. Two pointers algorithm take linear time so it is better than a nested loop.
Algorithm : 
Sort the given array.
Loop over the array and fix the first element of the possible triplet, arr[i].
Then fix two pointers, one at i + 1 and the other at n – 1. And look at the sum, 
If the sum is smaller than the required sum, increment the first pointer.
Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
Else, if the sum of elements at two-pointer is equal to given sum then print the triplet and break.
*/

// Javascript program to find a triplet 
  
// returns true if there is triplet with sum equal 
// to 'sum' present in A[]. Also, prints the triplet 
function find3Numbers(A, arr_size, sum) 
{ 
    let l, r; 
  
    /* Sort the elements */
    A.sort((a,b) => a-b); 
  
    /* Now fix the first element one  
    by one and find the 
    other two elements */
    for (let i = 0; i < arr_size - 2; i++) { 
  
        // To find the other two 
        // elements, start two index 
        // variables from two corners of  
        // the array and move 
        // them toward each other 
          
        // index of the first element in the 
        l = i + 1;  
          
        // remaining elements 
          
       // index of the last element 
        r = arr_size - 1;  
        while (l < r) { 
            if (A[i] + A[l] + A[r] == sum)  
            { 
            document.write("Triplet is " + A[i] + ", " 
                  + A[l] + ", " + A[r]); 
                return true; 
            } 
            else if (A[i] + A[l] + A[r] < sum) 
                l++; 
            else // A[i] + A[l] + A[r] > sum 
                r--; 
        } 
    } 
  
    // If we reach here, then no triplet was found 
    return false; 
} 
  
/* Driver program to test above function */
  
    let A = [ 1, 4, 45, 6, 10, 8 ]; 
    let sum = 22; 
    let arr_size = A.length; 
  
    find3Numbers(A, arr_size, sum); 
  
  
// This code is contributed by Mayank Tyagi 
// Time complexity: O(N^2). 
// Space Complexity: O(1). 


// Solution 3
// This is a Hashing-based solution. 



// JavaScript program to find a triplet using Hashing 

// returns true if there is triplet 
// with sum equal to 'sum' present 
// in A[]. Also, prints the triplet 
function find3Numbers(A,arr_size,sum) 
{ 
    // Fix the first element as A[i] 
    for (let i = 0; i < arr_size - 2; i++) { 

        // Find pair in subarray A[i+1..n-1] 
        // with sum equal to sum - A[i] 
        let s = new Set(); 
        let curr_sum = sum - A[i]; 
        for (let j = i + 1; j < arr_size; j++) 
        { 
            if (s.has(curr_sum - A[j])) 
            { 
                document.write( 
                "Triplet is " +A[i]+", "+A[j]+", "+ 
                (curr_sum - A[j])+"<br>"
                ); 
                
                return true; 
            } 
            s.add(A[j]); 
        } 
    } 

    // If we reach here, then no triplet was found 
    return false; 
} 

/* Driver code */
let A=[1, 4, 45, 6, 10, 8]; 

let sum = 22; 
let arr_size = A.length; 
find3Numbers(A, arr_size, sum); 

// Time complexity: O(N^2) 
// Auxiliary Space: O(N)


