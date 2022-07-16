/**
 * @param {number[]} cost
 * @return {number}
 */

const minCostClimbingStairs = (cost) => {
  let step1 = 0;
  let step2 = 0;
  for (let i = cost.length - 1; i >= 0; i--) {
    let cur_stp = cost[i] + Math.min(step1, step2);
    step1 = step2;
    step2 = cur_stp;
  }
  return Math.min(step1, step2);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
console.log(minCostClimbingStairs([10, 15, 20]), 15);

var minCostClimbingStairs1 = function (cost) {
  const dp = [0];
  //   let c = Math.min(cost[0], cost[1]);
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }
  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};
