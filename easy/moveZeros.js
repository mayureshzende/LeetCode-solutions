var moveZeroes = function (nums) {
  //   let arr = new Array(nums.length).fill(0);
  //   let c = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] > 0) {
  //       arr[c++] = nums[i];
  //     }
  //   }
  //   return arr;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[index++] = nums[i];
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
