// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/count-say-problem-using-javascript/
The Count-and-Say problem involves generating the nth term of the count-and-say sequence. 
Each term of the sequence is generated from the previous term by reading the previous term 
and counting the number of consecutive same digits.

Example:
Input: n = 4;
Output: 1211
Explanation: We will start from 1, which will be pronounced as one one(11) and becomes the  next term of the series
Now, 11 will be pronounced as two one(21), and 21 will be pronounced as one two one one(1211) which will be the 
fourth term of the series and the answer as well.
*/

function countAndSay(n) {
    if (n === 1) return "1";
    let prevTerm = "1";
    for (let i = 2; i <= n; i++) {
        let count = 1;
        let currentTerm = "";
        for (let j = 0; j < prevTerm.length; j++) {
            if (prevTerm[j] === prevTerm[j + 1]) {
                count++;
            } else {
                currentTerm += count + prevTerm[j];
                count = 1;
            }
        }
        prevTerm = currentTerm;
    }
    return prevTerm;
}
console.log(countAndSay(5));
console.log(countAndSay(7));
console.log(countAndSay(10));

