var searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
var searchInsert1 = function (nums, target) {
  if (target <= nums[0]) return 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (target > nums[i] && target <= nums[i + 1]) return i + 1;
  }
  return len;
};

console.log(searchInsert([1, 3, 5, 6], 5), 2);
console.log(searchInsert([1, 3, 5, 6], 2), 1);
console.log(searchInsert([1, 3, 5, 6], 7), 4);
