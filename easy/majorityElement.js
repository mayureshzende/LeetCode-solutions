var majorityElement = function (nums) {
  let obj = {};
  for (const n of nums) {
    obj[n] = (obj[n] || 0) + 1;
    if (obj[n] > nums.length / 2) return n;
  }
};

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
console.log(majorityElement([-1, 100, 2, 100, 100, 4, 100]), 100);

/* 
const majorityElement = (nums) => {
  let maj = '';
  let majCount = 0;

  for (const n of nums) {
    if (majCount === 0) {
      maj = n;
      majCount++;
    } else if (maj === n) majCount++;
    else majCount--;
  }
  return maj;
};
*/
