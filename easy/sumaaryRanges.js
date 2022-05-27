var summaryRanges = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }
    if (start !== nums[i]) {
      res.push(`${start}->${nums[i]}`);
    } else {
      res.push("" + start);
    }
  }
  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
console.log(summaryRanges([1, 2, 4, 5, 7]), ["1->2", "4->5", "7"]);
