// Coding Interview Question

/*
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

