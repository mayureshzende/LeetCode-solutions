const twoSum = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let com = target - nums[i];
    if (obj[com] !== undefined) {
      return [obj[com], i];
    }
    obj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
