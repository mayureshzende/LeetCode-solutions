var maxProfit1 = function (prices) {
  let l = 0,
    r = 1;
  maxP = 0;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxP = Math.max(profit, maxP);
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
};

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minSoFar = prices[0];

  for (let i = 0; i < prices.length; i++) {
    minSoFar = Math.min(prices[i], minSoFar);
    let profit = prices[i] - minSoFar;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);
console.log(maxProfit([1, 2]), 1);
