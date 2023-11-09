// compare scalar arrays

/**
 * You can use length and every method of arrays to compare two scalar(compared directly using ===) arrays. 
 * The combination of these expressions can give the expected result,
*/

const arrayFirst = [1, 2, 3, 4, 5];
const arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.every((value, index) => value === arraySecond[index])
); // true

// If you would like to compare arrays irrespective of order then you should sort them before,

const arrayFirst1 = [2, 3, 1, 4, 5];
const arraySecond1 = [1, 2, 3, 4, 5];
console.log(
  arrayFirst1.length === arraySecond1.length &&
    arrayFirst1.sort().every((value, index) => value === arraySecond1[index])
); //true