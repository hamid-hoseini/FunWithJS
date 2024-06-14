// Coding Interview Question

/*

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

// Solution 1:

function power( x, n)
{
    // Initialize result to 1
    let pow = 1;

    // Multiply x for n times
    for (let i = 0; i < n; i++) {
        pow = pow * x;
    }

    return pow;
}

// Driver code

    let x = 2;
    let n = 3;

    // Function call
    let result = power(x, n);
    console.log( result );


// Time Complexity: O(n)
// Auxiliary Space: O(1)


// Solution 2: pow(x, n) using recursion:

function power1(x , n) {
    // If x^0 return 1
    if (n == 0)
        return 1;

    if (x == 0)
        return 0;

    // For all other cases
    return x * power1(x, n - 1);
}

// Driver Code

    var x = 2;
    var n = 3;

    console.log(power1(x, n));


// Time Complexity: O(n)
// Auxiliary Space: O(n) n is the size of the recursion stack



