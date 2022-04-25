var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums;
  let i = 0;
  const length = nums.length;
  for (let j = 1; j < length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
    }
    nums[i] = nums[j];
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]), 2);
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
