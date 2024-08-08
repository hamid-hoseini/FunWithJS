// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/edit-distance-dp-5/
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

*/

// Javascript program to
// find minimum numberoperations
// to convert str1 to str2

function editDist(str1, str2, m, n)
{
    // If first string is empty, the 
    // only option is to insert all 
    // characters of second string into first
    if (m == 0)
        return n;

    // If second string is empty, the only
    // option is to remove all characters 
    // of first string
    if (n == 0)
        return m;

    // If last characters of two strings are
    // same, nothing much to do. Get the count for remaining 
    // strings.
    if (str1[m - 1] == str2[n - 1])
        return editDist(str1, str2, m - 1, n - 1);

    // If last characters are not same, consider all
    // three operations on last character of first
    // string, recursively compute minimum cost for all
    // three operations and take minimum of three
    // values.
    return 1 + 
    min(editDist(str1, str2, m, n - 1), // Insert
        editDist(str1, str2, m - 1, n), // Remove
        editDist(str1, str2, m - 1, n - 1)); // Replace
}

function min(x, y, z)
{
   return Math.min(x, Math.min(y, z));
}

// Driver code
let str1 = "GEEXSFRGEEKKS";
let str2 = "GEEKSFORGEEKS";
console.log(editDist(str1, str2, str1.length, 
                                    str2.length));

/*
Time Complexity: O(3^m), when length of “str1” >= length of “str2” and O(3^n), when length of “str2” > length of “str1”. Here m=length of “str1 and n=length of “str2”
Auxiliary Space: O(m), when length of “str1” >= length of “str2” and O(n), when length of “str2” > length of “str1”. Here m=length of “str1 and n=length of “str2”
*/


