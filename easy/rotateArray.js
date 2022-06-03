var rotate = function (nums, k) {
  k = k % nums.length;
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
  }
  return arr;
};
var rotate1 = function (nums, k) {
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    let b = nums.pop();
    nums.unshift(b);
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
