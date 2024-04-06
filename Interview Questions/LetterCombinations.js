// Coding Interview Question

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

// solution1:


var mapOfNumbers = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function (digits) {
    // Return early if no digits were supplied
    if (!digits.length) {
        return [];
    }

    // Initialise an array to store all possible letter combinations up to the previous digit
    let lastDigitPossibilities = [''];

    // Loop through each digit
    for (let i = 0; i < digits.length; i++) {
        // Initialise an array to store the possibilties for this digit
        let newPossibilities = [];

        // Loop through the last set of possibilities
        for (let x = 0; x < lastDigitPossibilities.length; x++) {
            // Loop through the possible letters for the current number
            for (let letter of mapOfNumbers[digits[i]]) {
                // Add the current number to each of the last set of possibilities
                newPossibilities.push(lastDigitPossibilities[x].concat(letter));
            }
        }

        // Check if this was the last digit
        if (i == digits.length - 1) {
            // Return the latest batch of possibilities as the answer
            return newPossibilities;
        }

        lastDigitPossibilities = newPossibilities;
    }
};


// Solution #2: Recursion

var mapOfNumbersRecursion = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

var letterCombinationsRecursion = function (digits) {
    // Return early if no digits were supplied
    if (!digits.length) {
        return [];
    }

    function getLetterCombinations(digits, previousCombinations) {
        // Initialise an array to store the possibilties for this digit
        let newPossibilities = [];

        // Loop through the previous iteration's combinations
        for (let previousCombination of previousCombinations) {
            // Loop through the possible letters for this number
            for (let possibleLetter of mapOfNumbersRecursion[digits[0]]) {
                // Add a combination of the previous set with the current letters to the array
                newPossibilities.push(
                    previousCombination.concat(possibleLetter)
                );
            }
        }

        // If there are more digits, run the function again, otherwise return the combinations
        return digits.length > 1
            ? getLetterCombinations(digits.slice(1), newPossibilities)
            : newPossibilities;
    }

    return getLetterCombinations(digits.toString(), ['']);
};
