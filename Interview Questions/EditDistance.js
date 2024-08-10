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


// Below is the implementation of Edit Distance Using Dynamic Programming (Memoization):

function minDis(s1,s2,n,m,dp)
{
    // If any String is empty,
  // return the remaining characters of other String
  if(n == 0)   
    return m; 
  if(m == 0)   
    return n;
              
  // To check if the recursive tree
  // for given n & m has already been executed
  if(dp[n][m] != -1)   
    return dp[n][m];
                 
  // If characters are equal, execute
  // recursive function for n-1, m-1
  if(s1[n - 1] == s2[m - 1])
  {          
    if(dp[n - 1][m - 1] == -1)
    {              
      return dp[n][m] = minDis(s1, s2, n - 1, m - 1, dp);          
    }       
    else
      return dp[n][m] = dp[n - 1][m - 1];  
  }
   
  // If characters are nt equal, we need to
           
  // find the minimum cost out of all 3 operations.     
  else
  {          
    let m1, m2, m3;        // temp variables  
    if(dp[n-1][m] != -1)
    {   
      m1 = dp[n - 1][m];     
    }          
    else
    {  
      m1 = minDis(s1, s2, n - 1, m, dp);     
    }           
             
    if(dp[n][m - 1] != -1)
    {               
      m2 = dp[n][m - 1];           
    }           
    else
    {   
      m2 = minDis(s1, s2, n, m - 1, dp);     
    }                                  
    
    if(dp[n - 1][m - 1] != -1)
    {   
      m3 = dp[n - 1][m - 1];     
    }  
    else
    {  
      m3 = minDis(s1, s2, n - 1, m - 1, dp);      
    }    
    return dp[n][m] = 1 + Math.min(m1, Math.min(m2, m3));       
  }
}

// Driver program

let str1 = "GEEXSFRGEEKKS";
let str2 = "GEEKSFORGEEKS";

let n= str1.length, m = str2.length;   
let dp = new Array(n + 1);
for(let i = 0; i < n + 1; i++)
{
    dp[i]=new Array(m+1);
    for(let j=0;j<m+1;j++)
        dp[i][j]=-1;
}

console.log(minDis(str1, str2, n, m, dp));

// Time Complexity: O(m x n) 
// Auxiliary Space: O( m *n)+O(m+n) , (m*n) extra array space and (m+n) recursive stack space.

/*
Returning final solution: After filling the table iteratively, our final solution gets stored at the 
bottom right corner of the 2-D table i.e. we return Edit[m][n] as an output.
*/

// A Dynamic Programming based 
// Javascript program to find minimum
// number operations to convert str1 to str2

function editDistDP(str1,str2,m,n)
{
    // Create a table to store results of subproblems
        let dp = new Array(m + 1);
        for(let i=0;i<m+1;i++)
        {
            dp[i]=new Array(n+1);
            for(let j=0;j<n+1;j++)
            {
                dp[i][j]=0;
            }
        }
 
        // Fill d[][] in bottom up manner
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                // If first string is empty, only option is
                // to insert all characters of second string
                if (i == 0)
                    dp[i][j] = j; // Min. operations = j
 
                // If second string is empty, only option is
                // to remove all characters of second string
                else if (j == 0)
                    dp[i][j] = i; // Min. operations = i
 
                // If last characters are same, ignore last
                // char and recur for remaining string
                else if (str1[i - 1]
                         == str2[j - 1])
                    dp[i][j] = dp[i - 1][j - 1];
 
                // If the last character is different,
                // consider all possibilities and find the
                // minimum
                else
                    dp[i][j] = 1
                               + min(dp[i][j - 1], // Insert
                                     dp[i - 1][j], // Remove
                                     dp[i - 1]
                                       [j - 1]); // Replace
            }
        }
 
        return dp[m][n];
}

function min(x,y,z)
{
    return Math.min(x, Math.min(y, z));
}

// Driver Code
let str1 = "GEEXSFRGEEKKS";
let str2 = "GEEKSFORGEEKS";
console.log(editDistDP(str1, str2, str1.length, str2.length));

// Time Complexity: O(m x n) 
// Auxiliary Space: O(m x n)

