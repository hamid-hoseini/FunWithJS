// Apple coding interview question

/*
Given an array nums containing n distinct numbers in the range 0 to n 
return the only number in this range that is missing in this array.

Example:
input: 301
output: 2 which is missing from the range from 0 to 3
*/

const missingNumber = function(nums) {
  let xor = 0;

  for (let i = 0; i <= nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }

  return xor
};

const num = [3,0 ,1];

console.log(missingNumber(nums)); // return 2
