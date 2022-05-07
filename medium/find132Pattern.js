var find132pattern = function (nums) {
  if (nums.length < 3) return false;
  let stack = [];

  let min = new Array(nums.length);

  min[0] = nums[0];

  for (let i = 1; i < nums.length; i++) min[i] = Math.min(min[i - 1], nums[i]);

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] > min[j]) {
      while (stack.length && stack[stack.length - 1] <= min[j]) stack.pop();
      if (stack.length && stack[stack.length - 1] < nums[j]) return true;
      stack.push(nums[j]);
    }
  }
  return false;
};

console.log(find132pattern([1, 2, 3, 4]), false);
console.log(find132pattern([3, 1, 4, 2]), true);
console.log(find132pattern([-1, 3, 2, 0]), true);
// // 156
// var find132pattern = function (nums) {
//   let stack = [];
//   let s3 = -Infinity;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] < s3) return true;
//     while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
//       s3 = stack.pop();
//     }
//     stack.push(nums[i]);
//   }
//   return false;
// };

// this  is in o(n * 2) which is not accepted

/* var find132pattern = function (nums) {
  let leftMin = nums[0];
  const len = nums.length;
  for (let j = 1; j < len - 1; j++) {
    for (let k = j + 1; k < len; k++) {
      if (nums[k] > leftMin && nums[j] > nums[k]) {
        return true;
      }
      leftMin = Math.min(leftMin, nums[j]);
    }
  }
  return false;
};
 */

/* 
Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.
*/
