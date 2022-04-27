var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits];
};
// console.log([..."123"]);
// console.log(plusOne([1, 2, 3]), [1, 2, 4]);
// console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
// console.log(plusOne([9]), [1, 0]);
console.log(plusOne([9, 9]), [1, 0, 0]);
// console.log(plusOne([8]), [9]);
console.log(
  plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
);
