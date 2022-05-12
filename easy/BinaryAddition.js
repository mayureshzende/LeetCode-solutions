var addBinary = function (a, b) {
  let sum = parseInt(a, 2) + parseInt(b, 2);
  //   console.log(sum.toString(2));
  return sum.toString(2);
};

console.log(addBinary("11", "1"), "100");
console.log(addBinary("1010", "1011"), "10101");
