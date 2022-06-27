/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = (n) => {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
};
var hammingWeight1 = function (n) {
  let count = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) !== 0) count++;
    mask = mask << 1;
  }
  return count;
};

console.log(hammingWeight(00000000000000000000000000001011), 3);
console.log(hammingWeight(00000000000000000000000010000000), 1);
console.log(hammingWeight(11111111111111111111111111111101), 31);
