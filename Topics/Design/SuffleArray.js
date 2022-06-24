/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums || [];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let arr = [...this.nums];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let ran = Math.floor(Math.random() * (len - i)) + i;

    let temp = arr[i];
    arr[i] = arr[ran];
    arr[ran] = temp;
  }
  return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
