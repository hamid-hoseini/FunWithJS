// Ebay coding interview question

/*
Given a sequence of moves represented by a string determine if a robot 
returns to the original at position (0, 0) o a 2d plane so the valid moves are 
up/down/left/right and return true if the robot returns to the original position
otherwise returns false

Example1:
     
input: "UD"
output: true

Example2:
input: "LLR"
output: false
*/

const robotPositionChecker = (moves) {
  let x = 0;
  let y = 0;

  for (let move of moves) {
    switch(move) {
        case 'U': y++; break;
        case 'R': x++; break;
        case 'D': y--; break;
        case 'L': x--; break;
    }

    return x === 0 && y === 0;
}

const moves = "UD";
console.log(robotPositionChecker(moves));
// Output: true

const moves = "LLR";
console.log(robotPositionChecker(moves));
// Output: false

  
  



