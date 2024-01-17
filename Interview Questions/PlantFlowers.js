// Microsoft Coding Interview Question

/**
Can we plant 'n' flowers in a flower bed with the rule that no two flowers can be planted in adjacent pots
Input: flowerBed = [1,0,0,0,1],  n = 1
Output: true   => [1,0,1,0,1]

Reference: https://www.youtube.com/shorts/qCP-IT7qwG0
*/

const canPlantFlower = (flowerBed, n) => {
  let i = 0;
  while (i < flowerBed.length && n !== 0) {
    if (flowerBed[i] === 0 &&
        flowerBed[i - 1] !== 1 &&
        flowerBed[i + 1] !== 1) {
      i++;
      n--;
    }
    i++;
  }
  return i === 0;
}
