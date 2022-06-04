const twoSum = (numbers, target) => {
  let l = 0;
  let h = numbers.length - 1;
  while (l < h) {
    let sum = numbers[l] + numbers[h];
    if (sum < target) {
      l += 1;
    } else if (sum > target) {
      r -= 1;
    } else {
      return [l + 1, r + 1];
    }
  }
};
var twoSum1 = function (numbers, target) {
  const hash = {};
  for (let i = 0; i < numbers.length; i++) {
    if (hash[target - numbers[i]]) {
      return [hash[target - numbers[i]], i + 1];
    } else {
      hash[numbers[i]] = i + 1;
    }
  }
};

console.log(twoSum1([2, 3, 4], 6), [1, 3]);
// console.log(twoSum([2, 7, 11, 15], 9), [1, 2]);
// console.log(twoSum([-1, 0], -1), [1, 2]);
