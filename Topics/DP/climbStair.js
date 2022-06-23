/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let steps = [1, 2];
  if (steps === 1) return 1;
  if (steps === 2) return 2;
  for (let i = 2; i <= n; i++) {
    steps.push(steps[i - 1] + steps[i - 2]);
  }
  return steps[n - 1];
};

console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);
