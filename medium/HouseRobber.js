var rob = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const robTotal = [];
  robTotal[0] = nums[0];
  robTotal[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    robTotal[i] = Math.max(robTotal[i - 1], robTotal[i - 2] + nums[i]);
  }
  return robTotal[robTotal.length - 1];
};

console.log(rob([2, 7, 9, 3, 1]), 12);
console.log(rob([2, 1, 1, 2]), 4);
console.log(rob([1, 2]), 2);
