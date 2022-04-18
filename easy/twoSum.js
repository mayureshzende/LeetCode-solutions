var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (obj[compliment] !== undefined) {
      return [obj[compliment], i];
    }
    obj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
