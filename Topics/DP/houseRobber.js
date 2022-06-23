/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return nums[0];
  } else if (n === 2) {
    Math.max(nums[0], nums[2]);
  }

  let dp = [];
  dp[0] = nums[0];
  dp[1] = nums[1];
  dp[2] = nums[2] + nums[0];
  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
  }

  return Math.max(dp[n - 2], dp[n - 1]);
};
