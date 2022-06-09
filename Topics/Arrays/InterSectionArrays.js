var intersect = function (nums1, nums2) {
  const obj = {};
  const res = [];
  for (let num of nums1) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  for (let num of nums2) {
    if (obj[num]) {
      res.push(num);
      obj[num]--;
    }
  }
  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
