var containsNearbyDuplicate = function (nums, k) {
  const useMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (useMap.has(num) && i - useMap.get(num) <= k) {
      return true;
    } else {
      useMap.set(num, i);
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
