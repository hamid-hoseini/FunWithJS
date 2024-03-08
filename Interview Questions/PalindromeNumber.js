// Amazon coding interview question

/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 1632361
Output: true
Explanation: 1632361 reads as 1632361 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

const isPalindrome = function(x) {
  x = x.toString();

  let left = 0;
  let right = 0;

  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    }
    left++;
    right++;
  }
  return true;
};



  
  }
}
