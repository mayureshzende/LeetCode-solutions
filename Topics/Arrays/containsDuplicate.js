var containsDuplicate = function (nums) {
  const obj = {};
  //   const set = new Set(nums);
  //   console.log(set);
  for (let i = 0; i < nums.length; i++) {
    //     obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      return true;
    }
  }
  //   // console.log(obj);
  //   for (const key of Object.values(obj)) {
  //     // console.log(key);
  //     if (key > 1) return true;
  //   }
  return false;
  //   return set.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
