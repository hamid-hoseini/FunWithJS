// Ebay coding interview question

/*
Given an array we need to group anagrams together
input: ["eat", "ate", "tan", "ate", "nat", "bat"]

output: [["eat", "ate", "ate"], ["tan", "nat"], ["bat"]]
*/

const groupsAnagrams = function (strs) {
  let ordered = strs.map((str) => 
    str.split("").sort().join(""));

  let map = {};

  for (let i = 0; i < strs.length; i++) {
    if (!map[ordered[i]]) {
      map[ordered[i]] = [strs[i]];
    } else {
      map[ordered[i]].push(strs[i]);
    }
  }

  return Object.values(map);
}

// Test Case 1
let input = ["eat", "ate", "tan", "ate", "nat", "bat"];
console.log(groupsAnagrams(input));
// Output: [["eat", "ate", "ate"], ["tan", "nat"], ["bat"]]

// Test Case 2
let input = ["car", "silent", "elbow", "arc", "listen", "below"];
console.log(groupsAnagrams(input));
// Output: [["car", "arc"], ["silent", "listen"], ["elbow", "below"]]


