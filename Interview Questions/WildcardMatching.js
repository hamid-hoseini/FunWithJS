// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/wildcard-pattern-matching/
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
*/

function isMatch(s, p) {
    let sIdx = 0, pIdx = 0, lastWildcardIdx = -1, 
    sBacktrackIdx = -1, nextToWildcardIdx = -1;
    
    while (sIdx < s.length) {
        if (pIdx < p.length && (p[pIdx] === '?' || 
            p[pIdx] === s[sIdx])) {
            // Characters match
            sIdx++;
            pIdx++;
        } else if (pIdx < p.length && p[pIdx] === '*') {
            // Wildcard, so characters match - store the index.
            lastWildcardIdx = pIdx;
            nextToWildcardIdx = ++pIdx;
            sBacktrackIdx = sIdx;
        } else if (lastWildcardIdx === -1) {
            // No match, and no wildcard has been found.
            return false;
        } else {
            // Backtrack - no match, 
           // but a previous wildcard was found.
            pIdx = nextToWildcardIdx;
            sIdx = ++sBacktrackIdx;
        }
    }
    
    // Check if there are only wildcards left in the pattern.
    for (let i = pIdx; i < p.length; i++) {
        if (p[i] !== '*') return false;
    }
    
    return true;
}

// Driver code
const str = "baaabab";
const pattern = "*****ba*****ab";

if (isMatch(str, pattern))
    console.log("Yes");
else
    console.log("No");


// Time complexity: O(m x n)
// Auxiliary space: O(m x n)
