// Amazon coding interview question

/*
Write a function to find the longest prefix string amongst an array in javascript.

*/

// solution 1
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}

const strings = ['flower', 'flow', 'flight'];
const longestPrefix = longestCommonPrefix(strings);
console.log(longestPrefix); // Output: "fl"


// solution 2

const longestCommonPrefix2 = function(strs) {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  return strs[0];
}








