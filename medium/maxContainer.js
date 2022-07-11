/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max_area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] < height[right]) {
      max_area = Math.max(max_area, height[left] * (right - left));
      left++;
    } else {
      max_area = Math.max(max_area, height[right] * (right - left));
      right--;
    }
  }
  return max_area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
