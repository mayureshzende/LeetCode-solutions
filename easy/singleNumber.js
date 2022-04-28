var singleNumber = function (nums) {
  const ht = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    ht[nums[i]] = ht[nums[i]] + 1 || 1;
  }

  for (const key in ht) {
    if (ht[key] === 1) return key;
  }
};

console.log(singleNumber([2, 2, 1]), 1);
console.log(singleNumber([4, 1, 2, 1, 2]), 4);
