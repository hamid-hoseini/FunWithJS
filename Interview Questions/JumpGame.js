// Coding Interview Questions

/*
Reference: https://dev.to/cod3pineapple/leetcode-55-jump-game-javascript-solution-26if
You are given an integer array nums. You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/

// Solution 1:

var canJump = function(nums) {
    // Keep track of max distance traveled so far
    let max = 0;
    for(let i=0;i<nums.length;i++){
        // The only time that max < i is when we are at 0 and we cannot move forward
        if(i>max) return false;
        // Move the max pointer the maximum 
        max = Math.max(nums[i]+i,max);
    }
    // If we did not get stuck at a 0 then return true
    return true;
};

// Time Complexity : O(n)
// Space Complexity: O(1)


// Solution 2:
// Reference: https://dev.to/cod3pineapple/leetcode-45-jump-game-ii-javascript-solution-53k4
 // Greedy solution
var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        // Keep track of the farthest jump
        newMax = Math.max(newMax, i+nums[i]);
        // When we get to the index where we had our previous farthest jump, we increase our jump count by 1
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};

// Time Complexity : O(n)
// Space Complexity: O(1)

