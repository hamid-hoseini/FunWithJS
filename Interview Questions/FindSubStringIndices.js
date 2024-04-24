// Coding Interview Question

/*
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

*/

function findSubStringIndices(s, L){
 
    // Number of a characters of a word in list L.
    let size_word = L[0].length
 
    // Number of words present inside list L.
    let word_count = L.length
 
    // Total characters present in list L.
    let size_L = size_word * word_count
 
    // Resultant vector which stores indices.
    let res = []
 
    // If the total number of characters in list L
    // is more than length of string S itself.
    if(size_L > s.length)
        return res
 
    // Map stores the words present in list L
    // against it's occurrences inside list L
    let hash_map = new Map()
 
    for(let i=0;i<word_count;i++){
        if(hash_map.has(L[i]))
            hash_map.set(L[i],hash_map.get(L[i]) + 1)
        else
            hash_map.set(L[i], 1)
    }
 
    for(let i=0;i< s.length - size_L + 1;i++){
        let temp_hash_map = new Map(hash_map)
        let j = i
        let count = word_count
 
        // Traverse the substring
        while(j < i + size_L){
 
            // Extract the word
            let word = s.substring(j,j+size_word)
 
            // If word not found or if frequency of
            // current word is more than required simply break.
            if (hash_map.has(word) == false || temp_hash_map.get(word) == 0)
                break
 
            // Else decrement the count of word
            // from hash_map
            else{
                temp_hash_map.set(word ,temp_hash_map.get(word)- 1)
                count -= 1
            }
            j += size_word
        }
 
        // Store the starting index of that substring
        // when all the words in the list are in substring
        if(count == 0)
            res.push(i)
    }
    return res
}
 
// Driver Code
 
let s = "barfoothefoobarman"
let L = ["foo", "bar"]
let indices = findSubStringIndices(s, L)

console.log(indices)
