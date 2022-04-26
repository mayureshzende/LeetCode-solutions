var removeElement = function (nums, val) {
  let count = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
};

console.log(removeElement([3, 2, 2, 3], 3), [2, 2, "_", "_"]);
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), [
  0,
  1,
  4,
  0,
  3,
  "_",
  "_",
  "_",
]);
