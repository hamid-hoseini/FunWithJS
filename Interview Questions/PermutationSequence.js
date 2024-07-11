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



// Solution 2
/*
Efficient Approach:
To optimize the above method mentioned above, observe that the value of k can be directly used to find the number 
at each index of the sequence.  

The first position of an n length sequence is occupied by each of the numbers from 1 to n exactly n! / n that is (n-1)! 
number of times and in ascending order. So the first position of the kth sequence will be occupied by the number present at 
index = k / (n-1)! (according to 1-based indexing).
The currently found number can not occur again so it is removed from the original n numbers and now the problem reduces to 
finding the ( k % (n-1)! )th permutation sequence of the remaining n-1 numbers.
This process can be repeated until we have only one number left which will be placed in the first position of the last 1-length sequence.
The factorial values involved here can be very large as compared to k. So, the trick used to avoid the full computation of such 
large factorials is that as soon as the product n * (n-1) * … becomes greater than k, we no longer need to find the actual 
factorial value because: 

k / n_actual_factorial_value = 0 
and k / n_partial_factorial_value = 0 
when partial_factorial_value > k 
*/

function findFirstNumIndex(k, n)
{
    if (n == 1)
        return [0, k]
        
    n -= 1
    let first_num_index = 0
    
    // n_actual_fact = n!
    let n_partial_fact = n

    while (k >= n_partial_fact && n > 1)
    {
        n_partial_fact = n_partial_fact * (n - 1)
        n -= 1
    }

    // First position of the kth sequence 
    // will be occupied by the number present
    // at index = k / (n-1)!
    first_num_index = Math.floor(k / n_partial_fact)

    k = k % n_partial_fact

    return [first_num_index, k]
}

// Function to find the
// kth permutation of n numbers
function findKthPermutation(n, k)
{
    // Store final answer
    let ans = ""

    let s = new Set()

    // Insert all natural number
    // upto n in set
    for (let i = 1; i <= n; i++)
        s.add(i)

    // Subtract 1 to get 0 based indexing
    k = k - 1
    
    for (let i = 0; i <n; i++)
    {
        // Mark the first position
        let itr = Array.from(s)
        
        let res =  findFirstNumIndex(k, n - i)
        let index = res[0]
        k = res[1]
        
        
        // itr now points to the
        // number at index in set s
        ans += (itr[index])

        // remove current number from the set
        itr.splice(index, 1)
        
        s = new Set(itr)
    }
    return ans
}

// Driver code
let n = 3
let k = 4
    
let kth_perm_seq = findKthPermutation(n, k)

console.log(kth_perm_seq)

