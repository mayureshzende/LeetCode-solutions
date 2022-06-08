var rotate = function (nums, k) {
  k = k % nums.length;
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
    console.log(arr);
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5], 2));
