// Spotify coding interview question

/*
Given a string as a s consisting of words and spaces, return the length of the last word

Example1:
     
input: s = "Hello World"
output: 5

Example2:
input: s = "  Fly    me   to the moon    "
output: 4
*/

const lengthOfLastWorld = function(s) {
  let i = s.length - 1;
  let count = 0;
  
  while (i >= 0) {
    if (s[i] == " " && count > 0) {
      return count;
    } else if (s[i] != " ") {
      count++;
    }
    i--;
  }
  return count
}

const s = "  Fly    me   to the moon    ";
console.log(lengthOfLastWorld(s));
// 4

