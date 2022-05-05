var maxOperations1 = function (nums, k) {
  //   let right = nums.length - 1;
  //   let left = 0;
  let count = 0;
  const obj = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    let diff = k - nums[i];
    if (!obj[diff]) {
      obj[nums[i]] = 1;
    } else {
      count++;
      obj[diff]--;
      obj[nums[i]] = 0;
    }
    // console.log(obj, count);
  }
  return count;
};

var maxOperations = function (nums, k) {
  let right = nums.length - 1;
  let left = 0;
  let count = 0;
  nums.sort((a, b) => a - b);
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum > k) {
      right--;
    } else if (sum < k) {
      left++;
    } else {
      count++;
      left++;
      right--;
    }
  }
  return count;
};

console.log(maxOperations([1, 2, 3, 4], 5), 2);
console.log(maxOperations([3, 1, 3, 4, 3], 6), 1);
console.log(maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4), 2);
console.log(
  maxOperations(
    [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
    3
  ),
  4
);

console.log(
  maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2),
  2
);
