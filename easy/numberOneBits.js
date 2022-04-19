var hammingWeight = function (n) {
  let count = 0;
  let str = n.toString(2).split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      count++;
    }
  }
  return count;
};

console.log(hammingWeight(00000000000000000000000000001011), 3);
console.log(hammingWeight(00000000000000000000000010000000), 1);
console.log(hammingWeight(11111111111111111111111111111101), 31);
