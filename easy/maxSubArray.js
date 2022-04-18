var maxSubArray = function (nums) {
  if (nums.length < 2) return nums[0];
  let curSum = -Infinity;
  let maxSum = -Infinity;

  for (let i = 0, len = nums.length; i < len; i++) {
    // curSum = Math.max(0, curSum);
    if (curSum < 0) curSum = 0;
    curSum += nums[i];
    // maxSum = Math.max(curSumv, maxSum);
    if (curSum > maxSum) maxSum = curSum;
  }
  return maxSum;
};
