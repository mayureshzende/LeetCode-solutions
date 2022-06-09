const plusOne = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 9) {
      nums[i] = 0;
    } else {
      nums[i]++;
      return nums;
    }
  }
  return [1, ...nums];
};
