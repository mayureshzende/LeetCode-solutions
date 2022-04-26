var searchInsert = function (nums, target) {
  if (target <= nums[0]) return 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (target > nums[i] && target <= nums[i + 1]) return i + 1;
  }
  return len;
};

console.log(searchInsert([1, 3, 5, 6], 5), 2);
console.log(searchInsert([1, 3, 5, 6], 2), 1);
console.log(searchInsert([1, 3, 5, 6], 7), 4);
console.log(searchInsert([1, 3, 5, 6], 0), 0);

/* 
const searchInsert = (nums, target, isFound=true) => {
    let left = 0;
    let right = nums.length-1;
    while(left <= right) {
        const mid = Math.floor((right+left)/2);
        const midNum = nums[mid];
        
        if(nums[0] > target) return 0;

        if(midNum === target) {
            return isFound ? mid : mid+1;
        }
        midNum > target ? (right = mid-1) : (left = mid+1);
    }
    return searchInsert(nums, target-1, false);
}
*/
