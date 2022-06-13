var reverse = function (x) {
  let negative = false;
  if (x < 0) {
    negative = true;
    x = x * -1;
  }
  let num = 0;
  while (x !== 0) {
    num = num * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (num > 2147483648) return 0;

  return negative ? num * -1 : num;
};

console.log(reverse(234), 432);
console.log(reverse(-123), -321);
console.log(reverse(2147483648), 8463847412);
