var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let p = 1;

  while (p * p <= x) {
    p++;
  }

  return p - 1;
};

console.log(mySqrt(4), 2);
console.log(mySqrt(8), 2);
