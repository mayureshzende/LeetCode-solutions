var missingNumber = function (nums) {
  let len = nums.length;
  let total = (len * (len + 1)) / 2;
  let sum = nums.reduce((acc, curr) => (acc += curr), 0);
  return total - sum;
};

console.log(missingNumber([3, 0, 1]), 2);
console.log(missingNumber([0, 1]), 2);
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
