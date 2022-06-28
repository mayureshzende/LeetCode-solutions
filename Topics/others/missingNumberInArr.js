/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length;
  let sum = (len * (len + 1)) / 2;
  let red = nums.reduce((acc, curr) => (acc += curr), 0);
  return sum - red;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
console.log(missingNumber([3, 0, 1]), 2);
