var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    i % 2 !== 0 ? count++ : "";
  }
  return count;
};

console.log(countOdds(3, 7), 3);
