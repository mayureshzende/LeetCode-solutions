var largestPerimeter = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  console.log(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1] + arr[i - 2]) {
      return arr[i] + arr[i - 1] + arr[i - 2];
    }
  }
  return 0;
};

console.log(largestPerimeter([2, 1, 2]), 5);
console.log(largestPerimeter([1, 2, 1]), 0);
