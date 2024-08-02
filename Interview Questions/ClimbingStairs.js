// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/count-ways-reach-nth-stair/
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// Climbing Stairs using Recursion:
// A simple recursive
// function to find n'th 
// fibonacci number
function fib(n) {
if (n <= 1)
    return n;
return fib(n - 1) + 
       fib(n - 2);
}

// Returns number of 
// ways to reach s'th stair
function countWays(s) {
    return fib(s + 1);
}

// Driver Code
let s = 4;
console.log("Number of ways = " + countWays(s));

// Time Complexity: O(2n) , because at each stair there are two choices and there are total of n stairs.
// Auxiliary Space: O(n), because of recursive stack space.



// Climbing Stairs Problem using Dynamic Programming (Memoization) :
// A simple recursive function to find number of ways to reach the nth stair

function countWays(n, dp)
{
    if (n <= 1)
        return dp[n] = 1;
  
    if(dp[n] != -1 ){
        return dp[n] ;
    }
    dp[n] = countWays(n - 1, dp) + countWays(n - 2, dp);
    return  dp[n] ;
}


// Driver Code

let n = 4;
 let dp = new Array(n+1).fill(-1) ;
console.log("Number of ways = " + countWays(n,dp));

// Time Complexity: O(n)
// Auxiliary Space: O(n)


// Climbing Stairs using Dynamic Programming (Tabulation):
// A function to find number of ways to reach the nth stair

function countWays(n) {
   let dp = [];
   dp[0] = 1; 
   dp[1] = 1;
   for (let i = 2; i <=n; i++)
   {
       dp[i]=dp[i-1]+dp[i-2];
   }
   return dp[n];
}


   // Driver Code
   let n=4;
   console.log("Number of ways = " + countWays(n));
