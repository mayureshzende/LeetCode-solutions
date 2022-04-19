var subtractProductAndSum = function (n) {
  let str = n.toString();
  let pr = 1,
    sum = 0;
  for (let i = 0; i < str.length; i++) {
    pr *= +str[i];
    sum += +str[i];
  }
  return pr - sum;
};

console.log(subtractProductAndSum(234), 15);
