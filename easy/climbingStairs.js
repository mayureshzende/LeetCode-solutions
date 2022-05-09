var climbStairs = function (n) {
  const arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

console.log(climbStairs(2), 2);
// 1 + 1  || 2

console.log(climbStairs(3), 3);
// 1 + 1 + 1 || 2 + 1 || 2 + 1

console.log(climbStairs(4), 5);
//  1 + 1 + 1 + 1 || 2 + 2 || 2 + 1 + 1 || 1 + 2 + 1 || 1 + 1 + 2
