// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/


// javascript program to print all 
// combinations of balanced parentheses

// Function that print all combinations of
// balanced parentheses
// open store the count of opening parenthesis
// close store the count of closing parenthesis
function _printParenthesis( str , pos , n , open , close) 
{
  if (close == n)
  {
  
    // print the possible combinations
    for (let i = 0; i < str.length; i++)
      document.write(str[i]);
    document.write("<br/>");
    return;
  } 
  else
  {
    if (open > close)
    {
      str[pos] = ')';
      _printParenthesis(str, pos + 1, n, open, close + 1);
    }
    if (open < n) 
    {
      str[pos] = '(';
      _printParenthesis(str, pos + 1, n, open + 1, close);
    }
  }
}

// Wrapper over _printParenthesis()
function printParenthesis( str , n)
{
  if (n > 0)
    _printParenthesis(str, 0, n, 0, 0);
  return;
}

// Driver program
var n = 3;
var str = new Array(2 * n);
printParenthesis(str, n);


/*
Output
()()()
()(())
(())()
(()())
((()))
/*

// Time complexity: O(2^n), as there are 2^n possible combinations of ‘(‘ and ‘)’ parentheses.
// Auxiliary space: O(n), as n characters are stored in the str array.


// Solution 2 Using DFS

/*
Create two variables left and right representing the number of remaining open parentheses and number of remaining close parentheses.
During each recursive call, two possibilities are explored:
Adding an open parenthesis ‘(‘ to the current combination and decrementing left.
Adding a close parenthesis ‘)‘ to the current combination and decrementing right.
If at any point, the number of open parentheses becomes greater than the number of close 
parentheses or either left or right becomes negative, the combination is invalid, and that branch of the recursion is terminated.
When both left and right are zero, it will indicate a valid combination has been formed.
*/

function generateParenthesis(left, right, s, answer) {
	// terminate
	if (left == 0 && right == 0) {
	answer.push(s);
	}

	if (left > right || left < 0 || right < 0) {
	// wrong
	return;
	}

	s += '{';
	generateParenthesis(left - 1, right, s, answer);
	s = s.slice(0, -1);

	s += '}';
	generateParenthesis(left, right - 1, s, answer);
	s = s.slice(0, -1);
}

function main() {
	let n = 3;
	// array ans is created to store all the possible valid
	// combinations of the parentheses.
	let ans = [];
	let s = '';
	// initially we are passing the counts of open and close
	// as 0, and the string s as an empty string.
	generateParenthesis(n, n, s, ans);
	// Now, here we print out all the combinations.
	for (let k of ans) {
	console.log(k);
	}
}

main();

// Time Complexity: O(2^n)
// Auxiliary Space:  O(n)
