/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = (prices) => {
  let mp = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      mp = Math.max(profit, mp);
    } else {
      l = r;
    }
    r++;
  }
  return mp;
};
var maxProfit1 = function (prices) {
  let minsoFar = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minsoFar = Math.min(prices[i], minsoFar);
    let profit = prices[i] - minsoFar;
    maxProfit = Math.max(profit, maxProfit);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
