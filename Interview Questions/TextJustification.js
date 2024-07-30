// Coding Interview Question

/*
Reference: https://algo.monster/liteproblems/68
Given an array of strings words and a width maxWidth, format the text such that each line has exactly 
maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra 
spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not 
divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:
A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 
Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

*/

// Solution:

function fullJustify(words: string[], maxWidth: number): string[] {
   const justifiedText: string[] = []; // This will hold the result.

   // Process each word in the input array.
   for (let i = 0, totalWords = words.length; i < totalWords; ) {
       const currentLine: string[] = [words[i]]; // Start with the current word.
       let currentLineCharCount = words[i++].length; // Char count includes current word.
     
       // Keep adding words while they fit in maxWidth including spaces.
       while (i < totalWords && currentLineCharCount + 1 + words[i].length <= maxWidth) {
           currentLine.push(words[i]);
           // Update char count, adding one for the new space before the word.
           currentLineCharCount += 1 + words[i++].length;
       }
     
       // If this is the last line or the line contains only one word.
       if (i === totalWords || currentLine.length === 1) {
           // Join all the words with a single space
           const leftJustified = currentLine.join(' ');
           // Create the right padding with spaces to fill up to maxWidth.
           const rightPadding = ' '.repeat(maxWidth - leftJustified.length);
           // Add the final line to the answer.
           justifiedText.push(leftJustified + rightPadding);
           continue;
       }

       // Calculate the width of spaces needed and the width to distribute evenly.
       const totalSpaceWidth = maxWidth - (currentLineCharCount - currentLine.length + 1);
       const evenSpaceWidth = Math.floor(totalSpaceWidth / (currentLine.length - 1));
       // Determine if any extra spaces are needed.
       const remainderSpaces = totalSpaceWidth % (currentLine.length - 1);
       const currentRow: string[] = []; // This will hold the contents of the line.

       // Distribute the spaces to the current row.
       for (let j = 0; j < currentLine.length - 1; ++j) {
           currentRow.push(currentLine[j]); // Add the word to the line.
           // Add the appropriate number of spaces after the word.
           currentRow.push(' '.repeat(evenSpaceWidth + (j < remainderSpaces ? 1 : 0)));
       }
     
       // Add the last word without extra spaces after it.
       currentRow.push(currentLine[currentLine.length - 1]);

       // Join all elements of the row into a string and add to the result.
       justifiedText.push(currentRow.join(''));
   }

   return justifiedText; // Return the fully justified text.
}

