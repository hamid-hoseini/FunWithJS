// Coding Interview Question

/*
// https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/
Given a string consisting of opening and closing parenthesis, find the length of the longest valid parenthesis substring.

Examples: 

Input: ((()
Output : 2
Explanation : ()
Input: )()())
Output : 4
Explanation: ()() 
Input:  ()(()))))
Output: 6
Explanation:  ()(())

*/

// Solution
/*
A Simple Approach is to find all the substrings of given string. For every string, 
check if it is a valid string or not. If valid and length is more than maximum length 
so far, then update maximum length. We can check whether a substring is valid or not 
in linear time using a stack 
*/

function GFG(str) {
    const n = str.length;
    // Create an array to act as a stack
    const stack = [];
    // Traverse all characters of the given string
    for (let i = 0; i < n; i++) {
        if (str[i] === '(')
            stack.push(i);
        else {
            // If the stack is not empty and on top
            // that is and index of the open bracket then pop
            if (stack.length && str[stack[stack.length - 1]] === '(')
                stack.pop();
            else
                stack.push(i);
        }
    }
    let result = 0, last = n;
    // Iterate through the stack to the calculate the maximum valid substring length
    while(stack.length) {
        const now = stack.pop();
        // take the maximum in the result
        result = Math.max(result, last - now - 1);
        last = now;
    }
    // Return the maximum of the last and result
    return Math.max(result, last);
}
// Driver code
const str1 = "((()()";
console.log(GFG(str1));
const str2 = "()(()))))";
console.log(GFG(str2));


// Time complexity of this solution is O(n3).
// Space Complexity: O(1)
