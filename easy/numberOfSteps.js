var numberOfSteps = function (num) {
  let count = 0;
  let n = num;
  while (n) {
    if (n % 2 === 0) {
      n = n / 2;
      count++;
    } else {
      n = n - 1;
      count++;
    }
  }
  return count;
};
console.log(numberOfSteps(14), 6);
console.log(numberOfSteps(123), 12);
console.log(numberOfSteps(8), 4);
