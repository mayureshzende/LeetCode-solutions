var maxProfit = (prices) => {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let bs = prices[i] - prices[i - 1];
    if (bs > 0) {
      profit += bs;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7);
