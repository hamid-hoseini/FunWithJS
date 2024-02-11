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

  for (let i = 0; I < strs.length; i++) {
    if (!map[ordered[i]]) {
      map[ordered[i]] = [strs[i]];
    } else {
      map[ordered[i]].push(strs[i]);
    }
  }

  return Object.values(map);
}

