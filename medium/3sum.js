/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = (arr) => {
  const len = arr.length;
  const res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let target = 0 - arr[i];
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        res.push([arr[i], arr[left], arr[right]]);
        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};
var threeSum1 = function (nums) {
  const res = [];
  const len = nums.length;
  nums.sort();
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < len; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]), [
  [-1, -1, 2],
  [-1, 0, 1],
]);
