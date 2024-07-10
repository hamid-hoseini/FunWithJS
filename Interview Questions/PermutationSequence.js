// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.
*/

// Solution 1:

/*
Input: N = 3, K = 4 
Output: 231 
Explanation: 
The ordered list of permutation sequence from integer 1 to 3 is : 123, 132, 213, 231, 312, 321. So, the 4th permutation sequence is “231”.

Input: N = 2, K = 1 
Output: 12 
Explanation: 
For n = 2, only 2 permutations are possible 12 21. So, the 1st permutation sequence is “12”. 
*/


function swap(ch, i, j) {
    var temp = ch[i];
    ch[i] = ch[j];
    ch[j] = temp;
    return ch;
}

// recursive function to generate all
// possible permutations of a string
function generate_permutations(ch, idx, result) {
    // base case
    if (idx == ch.length) {
        result.push(ch.join(""));
        return;
    }

    // traverse string from idx to end
    for (var i = idx; i < ch.length; i++) {
        swap(ch, i, idx);
        generate_permutations(ch, idx + 1, result);
        swap(ch, i, idx);
    }
}

// Function to find the
// kth permutation of n numbers
function findKthPermutation(n, k) {
    var s = "";
    var result = [];

    // Insert all natural number
    // upto n in string
    for (var i = 1; i <= n; i++) {
        s += i;
    }

    var ch = s.split("");
    generate_permutations(ch, 0, result);

    // sort the gen
    // generated permutations
    result.sort();

    // make k 0-based indexed to point to kth sequence
    return result[k - 1];
}

// Driver code

var n = 3;
var k = 4;

// function call
var kth_perm_seq = findKthPermutation(n, k);
console.log(kth_perm_seq);

// Time Complexity = O((N! * N) + (N! * log N!)) 
// Auxiliary Space = O(N) to store all permutations
