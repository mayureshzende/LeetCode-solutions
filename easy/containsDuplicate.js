var containsDuplicate = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }
  console.log(obj);
  for (const key of Object.values(obj)) {
    // console.log(key);
    if (key > 1) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
